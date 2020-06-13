import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimHistory(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,2A10.0165,10.0165,0,0,0,5.0061,4.87183V3a1,1,0,0,0-2,0V7.5a.99974.99974,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.21844A7.97907,7.97907,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Z" /><path opacity={1} d="M14,13H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z" /><path opacity={0.5} d="M12,4A8.00807,8.00807,0,0,0,6.21844,6.5H8.5061a1,1,0,0,1,0,2h-4.5a.98918.98918,0,0,1-.9776-.889A9.92176,9.92176,0,0,0,2,12a1,1,0,0,1,2,0,8,8,0,1,0,8-8Zm2,9H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimHistory;