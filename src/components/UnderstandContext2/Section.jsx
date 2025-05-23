import { LevelContext2 } from "@/contexts/LevelContext2";
import { useContext } from "react";

export default function Section({ children }) {
  const level = useContext(LevelContext2);
  return (
    <section className="rounded border p-4">
      <LevelContext2.Provider value={level + 1}>
        {children}
      </LevelContext2.Provider>
    </section>
  );
}
