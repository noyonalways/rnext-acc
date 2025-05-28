// react 19 updated version no need to use forwardRef

import { useImperativeHandle, useRef } from "react";

const MyInputWithImperative = ({ ref }) => {
  const realInputRef = useRef();
  useImperativeHandle(ref, () => {
    // allowed methods
    return {
      focus: () => {
        realInputRef.current.focus();
      },
    };
  });

  return <input className="border" ref={realInputRef} />;
};

export default MyInputWithImperative;
