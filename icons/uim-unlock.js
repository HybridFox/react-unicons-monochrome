import * as React from "react";
import "../utils/style.css";

function UimUnlock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M7,9h10c1.65685,0,3,1.34315,3,3v7c0,1.65685-1.34315,3-3,3H7c-1.65685,0-3-1.34315-3-3v-7C4,10.34315,5.34315,9,7,9z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M9,7c0.00055-0.79095,0.31323-1.5498,0.87012-2.11151c1.1673-1.17749,3.06812-1.18567,4.24561-0.01837c0.3783,0.38281,0.64941,0.85834,0.78613,1.37891c0.00055,0.0022,0.00116,0.00446,0.00171,0.00665c0.1394,0.5343,0.68549,0.85443,1.21979,0.71509c0.53424-0.1394,0.85437-0.68549,0.71503-1.21979c-0.22626-0.86584-0.67676-1.65674-1.30615-2.29297C14.59528,2.52478,13.3269,2.00061,12.00446,2C9.24182,1.99878,7.00122,4.23737,7,7v2h2V7z"
  }));
}

export default UimUnlock;