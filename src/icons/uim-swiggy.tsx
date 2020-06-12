import * as React from "react";
import { UimIconProps } from '../index.types'

function UimSwiggy(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M10.04674,14.6931c-.6537,0-1.3077-.01213-1.961.00356a1.34217,1.34217,0,0,1-1.32992-.74721A11.18811,11.18811,0,0,1,5.2302,8.43165a6.27226,6.27226,0,0,1,1.84692-4.2846A6.71782,6.71782,0,0,1,9.77066,2.3954a6.608,6.608,0,0,1,3.64843-.243,6.831,6.831,0,0,1,5.34315,5.711.50726.50726,0,0,1-.34456.60247,4.95025,4.95025,0,0,1-1.57287.37382,14.83135,14.83135,0,0,1-3.148.04575c-.4199-.05212-.49612-.13556-.49938-.569-.00446-.59239-.0015-1.18484-.0021-1.77726-.0001-.09192-.00159-.18384-.00357-.27574a.297.297,0,0,0-.31381-.335c-.23448-.008-.33857.12462-.33935.34045-.00368,1.01116-.00232,2.02234-.0018,3.03351.00015.28725.18225.35756.427.35734.90906-.00081,1.81815-.00412,2.72717.00265a6.9447,6.9447,0,0,1,1.67041.16169,1.20325,1.20325,0,0,1,1.0117,1.63471,14.17062,14.17062,0,0,1-1.49447,3.87148,34.228,34.228,0,0,1-3.57641,5.25988c-.345.42932-.71124.84147-1.05994,1.26787-.15794.19314-.27715.18895-.431-.01052a43.866,43.866,0,0,1-3.42652-4.95565c-.12627-.22061-.22613-.45664-.3332-.68786-.1029-.22223-.01869-.36755.19318-.46728a2.59609,2.59609,0,0,1,.8005-.19481,7.70388,7.70388,0,0,1,2.348.0199c.44979.08231.52372.188.5232.639-.0004.34728-.0057.69461-.00056,1.0418.00326.22058.06579.43157.32967.42949.26288-.00208.32486-.214.3261-.4341.00407-.72517-.00119-1.4504.00336-2.17556.002-.31218-.19531-.37176-.44456-.37226q-1.04184-.0021-2.08369-.00049Z" data-name="Brand Logos" /></svg>;
}

export default UimSwiggy;