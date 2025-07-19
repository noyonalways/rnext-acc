import { useEffect, useState } from "react";

export default function Example5() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post("/analytics/event", { eventName: "visit_form" });
  }, []);

  // 🔴 Avoid: Event-specific logic inside an Effect
  // const [jsonToSubmit, setJsonToSubmit] = useState(null);
  // useEffect(() => {
  //     if (jsonToSubmit !== null) {
  //         post("/api/register", jsonToSubmit);
  //     }
  // }, [jsonToSubmit]);

  function handleSubmit(e) {
    e.preventDefault();
    // setJsonToSubmit({ firstName, lastName });
    // ✅ Good: Event-specific logic is in the event handler
    post("/api/register", { firstName, lastName });
  }

  function post(url, data) {
    console.log(`Posted to url ${url} with data ${JSON.stringify(data)}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded-lg bg-white p-8 shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Registration Form
        </h2>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
