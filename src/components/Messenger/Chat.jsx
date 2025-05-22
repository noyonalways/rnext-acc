import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section className="w-full">
      <textarea
        className="h-24 w-full rounded border p-2"
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="rounded bg-gray-200 px-4 py-1.5">
        Send to {contact.email}
      </button>
    </section>
  );
}
