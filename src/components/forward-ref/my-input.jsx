// react 19 updated version no need to use forwardRef

const MyInput = ({ ref }) => {
  return <input className="border" ref={ref} />;
};

export default MyInput;
