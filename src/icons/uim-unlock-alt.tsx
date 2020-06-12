import * as React from "react";
import { UimIconProps } from '../index.types'

function UimUnlockAlt(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M8 11c-.55214.00014-.99986-.44734-1-.99948C7 10.00035 7 10.00017 7 10V7c.00123-2.76266 2.24181-5.00124 5.00447-5.00001 1.32241.00059 2.59079.5248 3.52776 1.45801.62936.63624 1.07989 1.42715 1.30615 2.293.13937.53428-.18077 1.08038-.71505 1.21975-.53428.13937-1.08038-.18077-1.21975-.71505C14.903 6.25346 14.90243 6.25123 14.90186 6.249c-.13673-.52056-.40783-.99607-.78614-1.3789-1.17747-1.16731-3.07829-1.15907-4.2456.0184C9.31324 5.45022 9.00055 6.20902 9 7v3c.00014.55214-.44734.99986-.99948 1C8.00035 11 8.00017 11 8 11zM12 18c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-3c0-.55229.44771-1 1-1s1 .44771 1 1v3c.00014.55214-.44734.99986-.99948 1C12.00035 18 12.00017 18 12 18z" /><path opacity={1} d="M17,9H7c-1.65686,0-3,1.34314-3,3v7c0,1.65686,1.34314,3,3,3h10c1.65686,0,3-1.34314,3-3v-7C20,10.34314,18.65686,9,17,9z M13,17c0.00012,0.55212-0.44733,0.99988-0.99945,1C12.00037,18,12.00018,18,12,18c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055v-3c0-0.55231,0.44769-1,1-1s1,0.44769,1,1V17z" /></svg>;
}

export default UimUnlockAlt;