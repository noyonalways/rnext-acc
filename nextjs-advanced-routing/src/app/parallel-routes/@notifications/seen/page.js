import Link from "next/link";

export default function SeenPage() {
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
      <div className="flex space-x-2">
        <span>SEEN NOTIFICATIONS</span>
        <Link className="text-blue-500" href="/parallel-routes">
          All
        </Link>
      </div>
    </div>
  );
}
