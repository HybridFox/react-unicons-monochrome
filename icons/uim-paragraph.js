import * as React from "react";

function UimParagraph(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M13 15.5H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2zM21 10.5H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
  }));
}

export default UimParagraph;