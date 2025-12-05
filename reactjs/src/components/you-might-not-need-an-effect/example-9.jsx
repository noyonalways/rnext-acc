const useSomeAPI = () => {
  return "some data here...";
};

// 🔴 Avoid: this.
/* const Parent = () => {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {data && (
        <p className="mb-6 text-center text-xl font-bold text-blue-600">
          {data}
        </p>
      )}
      <Child onFetched={setData} />
    </div>
  );
};

export default Parent;

const Child = ({ onFetched }) => {
  const data = useSomeAPI();

  // 🔴 Avoid: Passing data to the parent in an Effect
  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">
        Child Component
      </h1>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-gray-600 italic">
          This component fetches and passes data to parent
        </p>
      </div>
    </div>
  );
};
 */

const Parent = () => {
  const data = useSomeAPI();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {data && (
        <p className="mb-6 text-center text-xl font-bold text-blue-600">
          {data}
        </p>
      )}
      {/* // ✅ Good: Passing data down to the child */}
      <Child data={data} />
    </div>
  );
};

export default Parent;

const Child = ({ data }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">
        Child Component
      </h1>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-gray-600 italic">{data}</p>
      </div>
    </div>
  );
};
