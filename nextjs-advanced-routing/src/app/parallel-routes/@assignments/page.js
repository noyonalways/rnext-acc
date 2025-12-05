import delay from "@/lib/delay";

export default async function AssignmentsPage() {
  await delay(3000);
  return (
    <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
      ASSIGNMENTS
    </div>
  );
}
