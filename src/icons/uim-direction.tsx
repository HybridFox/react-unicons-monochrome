import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimDirection(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12 19.5a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 9.707 14.793L12 17.08594l2.293-2.293A.99989.99989 0 0 1 15.707 16.207l-3 3A.99676.99676 0 0 1 12 19.5zM15 10.5a.99676.99676 0 0 1-.707-.293L12 7.91406 9.707 10.207A.99989.99989 0 0 1 8.293 8.793l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 10.5z" /></svg>;
}

export default UimDirection;