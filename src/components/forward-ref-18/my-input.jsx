// react v19 updated version no need to use forwardRef

import { forwardRef } from "react";

const MyInputWithForwaredRef = forwardRef((props, ref) => {
  return <input {...props} className="border" ref={ref} />;
});

export default MyInputWithForwaredRef;
