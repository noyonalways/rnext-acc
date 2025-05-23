import { ProfileLevelContext } from "@/contexts/ProfileLevelContext";
import { useContext } from "react";

export default function Section({ children, isFancy }) {
  const level = useContext(ProfileLevelContext);
  return (
    <section
      className={`space-y-2 rounded border p-4 ${isFancy ? "border-4 border-dashed border-pink-300" : ""} `}
    >
      <ProfileLevelContext value={level + 1}>{children}</ProfileLevelContext>
    </section>
  );
}
