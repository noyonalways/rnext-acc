import { submitForm } from "@/utils/submitForm";
import { useState } from "react";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
      setAnswer("");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  if (status === "success")
    return (
      <div className="mx-auto my-10 w-full max-w-2xl">
        <h1 className="text-2xl text-green-400">Thats's Write</h1>
      </div>
    );

  return (
    <div className="mx-auto my-10 w-full max-w-2xl">
      <h2 className="text-2xl">City quiz</h2>
      <p className="my-1.5">
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={status === "submitting"}
          value={answer}
          onChange={handleChange}
          className="w-full rounded border p-4"
        />
        <br />
        <button
          type="submit"
          disabled={answer === "" || status === "submitting"}
          className="cursor-pointer rounded bg-slate-100 px-4 py-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          Submit
        </button>
        {status === "submitting" && (
          <p className="mt-4 text-2xl font-semibold text-slate-400">
            Loading...
          </p>
        )}
        {error && (
          <p className="mt-4 text-2xl font-semibold text-red-400">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
