import * as React from "react";
import "../utils/style.css";

function UimLayersAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M21,2H9C8.44803,1.99969,8.00031,2.44689,8,2.99886C8,2.99924,8,2.99962,8,3v4h8c0.55197-0.00031,0.99969,0.44689,1,0.99886C17,7.99924,17,7.99962,17,8v8h4c0.55197,0.00031,0.99969-0.44689,1-0.99886c0-0.00038,0-0.00076,0-0.00114V3c0.00031-0.55197-0.44689-0.99969-0.99886-1C21.00076,2,21.00038,2,21,2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3,12h8c0.55229,0,1,0.44771,1,1v8c0,0.55228-0.44771,1-1,1H3c-0.55228,0-1-0.44772-1-1v-8C2,12.44771,2.44772,12,3,12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16,7H6C5.44803,6.99969,5.00031,7.44689,5,7.99886C5,7.99924,5,7.99962,5,8v4h6c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v6h4c0.55197,0.00031,0.99969-0.44689,1-0.99886c0-0.00038,0-0.00076,0-0.00114V8c0.00031-0.55197-0.44689-0.99969-0.99886-1C16.00076,7,16.00038,7,16,7z"
  }));
}

export default UimLayersAlt;