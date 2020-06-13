import * as React from "react";
import "../utils/style.css";

function UimLeftIndent(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 7H3A1 1 0 0 1 3 5H21a1 1 0 0 1 0 2zM13 11H3A1 1 0 0 1 3 9H13a1 1 0 0 1 0 2zM21 19H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 15H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21,14.6665a.99869.99869,0,0,1-.64014-.23193l-2-1.6665a.9996.9996,0,0,1,0-1.53614l2-1.6665A.9997.9997,0,0,1,22,10.3335v3.333a.99929.99929,0,0,1-1,1Z"
  }));
}

export default UimLeftIndent;