import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimHtml5(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M3.18249,2,4.78741,20.00071,11.98921,22l7.22171-2.00206L20.81751,2ZM17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z" /><path opacity={0.25} d="M17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z" /></svg>;
}

export default UimHtml5;