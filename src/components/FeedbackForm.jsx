import { useState } from "react";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("typing");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(message);
    setStatus("sent");
  };

  if (status === "sent")
    return (
      <div className="mx-auto my-10 w-full max-w-2xl">
        <h1 className="text-2xl text-green-400">Thanks for you'r feeback</h1>
      </div>
    );

  return (
    <div className="mx-auto my-10 w-full max-w-2xl">
      <p className="mb-2">How was the learning experience?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          className="w-full rounded border p-4"
        ></textarea>
        <button className="cursor-pointer rounded bg-zinc-200 px-4 py-1.5">
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

// Pretend to send a message.
function sendMessage(message = "") {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
