import * as React from "react";

function UimEllipsisV(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 5,
    r: 2,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 19,
    r: 2,
    opacity: 1
  }));
}

export default UimEllipsisV;