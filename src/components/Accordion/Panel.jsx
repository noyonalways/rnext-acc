const Panel = ({ title, children, expanded, onToggle }) => {
  return (
    <div className="space-y-3 rounded border p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {expanded && <p>{children}</p>}
      <button
        onClick={onToggle}
        className="cursor-pointer rounded bg-gray-300 px-6 py-1"
      >
        {expanded ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default Panel;
