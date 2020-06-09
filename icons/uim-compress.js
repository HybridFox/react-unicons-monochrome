import * as React from "react";

function UimCompress(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M8 22a.99974.99974 0 0 1-1-1V17H3a1 1 0 0 1 0-2H8a.99974.99974 0 0 1 1 1v5A.99974.99974 0 0 1 8 22zM8 9H3A1 1 0 0 1 3 7H7V3A1 1 0 0 1 9 3V8A.99974.99974 0 0 1 8 9zM21 9H16a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V7h4a1 1 0 0 1 0 2zM16 22a.99974.99974 0 0 1-1-1V16a.99974.99974 0 0 1 1-1h5a1 1 0 0 1 0 2H17v4A.99974.99974 0 0 1 16 22z" /></svg>;
}

export default UimCompress;