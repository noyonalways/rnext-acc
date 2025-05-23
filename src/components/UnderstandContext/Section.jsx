import { LevelContext } from "@/contexts/LevelContext";

export default function Section({ children, level }) {
  return (
    <section className="rounded border p-4">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
