import { useState } from "react";

const Example1 = () => {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  // const [fullName, setFullName] = useState("");
  // useEffect(() => {
  //   setFullName(firstName + " " + lastName);
  // }, [firstName, lastName]);

  // ✅ Good: calculated during rendering
  const fullName = firstName + " " + lastName;

  return (
    <div className="m-4 border p-6">
      <p>{fullName}</p>
    </div>
  );
};

export default Example1;
