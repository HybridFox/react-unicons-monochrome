import * as React from "react";
import { UimIconProps } from '../index.types'

function UimShieldPlus(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M14,11H13V10a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V13h1a1,1,0,0,0,0-2Z" /><path opacity={0.5} d="M19.63086,3.6499a1.00206,1.00206,0,0,0-.83594-.20263,7.98476,7.98476,0,0,1-6.22265-1.26709.99888.99888,0,0,0-1.14454,0A7.98,7.98,0,0,1,5.20508,3.44727.99971.99971,0,0,0,4,4.42627v7.457A9.01875,9.01875,0,0,0,7.76855,19.207L11.419,21.814a1.0004,1.0004,0,0,0,1.1621,0l3.6504-2.60742A9.01717,9.01717,0,0,0,20,11.8833v-7.457A1.0011,1.0011,0,0,0,19.63086,3.6499ZM14,13H13v1a1,1,0,0,1-2,0V13H10a1,1,0,0,1,0-2h1V10a1,1,0,0,1,2,0v1h1a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimShieldPlus;