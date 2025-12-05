const ParallelRoutesLayout = ({
  children,
  assignments,
  notifications,
  quiz,
}) => {
  return (
    <>
      <header className="border p-10 text-2xl font-bold text-center m-4">
        <h1>Parallel Routes Header</h1>
      </header>
      <main>
        {children}
        <div className="grid gap-6 grid-cols-2 p-4 min-h-full">
          {assignments}
          {notifications}
          {quiz}
        </div>
      </main>
      <footer className="border p-10 text-2xl font-bold text-center m-4">
        <h1>Parallel Routes Footer</h1>
      </footer>
    </>
  );
};

export default ParallelRoutesLayout;
