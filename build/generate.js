const path = require('path')
const fs = require('fs-plus')
const cheerio = require('cheerio')
const upperCamelCase = require('uppercamelcase')
const svgr = require('@svgr/core').default

const iconsComponentPath = path.join(process.cwd(), 'monochrome')
const iconsIndexPath = path.join(process.cwd(), 'index.js')
const uniconsConfig = require('@iconscout/unicons/json/monochrome.json')

const COLOR_CLASS = {
  'class="uim-primary"': 'opacity="1"',
  'class="uim-secondary"': 'opacity="0.7"',
  'class="uim-tertiary"': 'opacity="0.5"',
  'class="uim-quaternary"': 'opacity="0.25"',
  'class="uim-quinary"': 'opacity="0"'
}

// Clear Directories
fs.removeSync(iconsComponentPath)
fs.mkdirSync(iconsComponentPath)

const indexJs = []

const icon = uniconsConfig[0]

uniconsConfig.forEach(icon => {
  const baseName = `uim-${icon.name}`
  const location = path.join(iconsComponentPath, `${baseName}.js`)
  const name = upperCamelCase(baseName)
  let svgFile = fs.readFileSync(path.resolve('node_modules/@iconscout/unicons', icon.svg), 'utf-8')
  
  Object.keys(COLOR_CLASS).forEach(key => {
    svgFile = svgFile.replace(new RegExp(key, 'g'), COLOR_CLASS[key])
  })

  svgr(svgFile, { svgo: false, svgProps: { width: "{props.size || '1em'}", height: "{props.size || '1em'}", fill: 'currentColor' } }, { componentName: name }).then(template => {
    fs.writeFileSync(location, template, 'utf-8')
  })

  // Add it to index.js
  indexJs.push(`export { default as ${name} } from './icons/${baseName}'`)
})

fs.writeFileSync(iconsIndexPath, indexJs.join('\n'), 'utf-8')

console.log(`Generated ${uniconsConfig.length} icon components.`)