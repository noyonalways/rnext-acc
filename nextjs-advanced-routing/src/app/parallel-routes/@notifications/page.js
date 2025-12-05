import delay from "@/lib/delay";
import Link from "next/link";

export default async function AssignmentsPage() {
  await delay(3000);
  // throw new Error("Notifications Test Error");
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
      <div className="flex space-x-2">
        <span>NOTIFICATIONS</span>
        <Link className="text-blue-500" href="/parallel-routes/seen">
          Seen
        </Link>
      </div>
    </div>
  );
}
