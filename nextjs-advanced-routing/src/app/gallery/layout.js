const GalleryLayout = ({ children, modal }) => {
  return (
    <>
      <header className="border p-10 text-2xl font-bold text-center m-4">
        <h1>Combining Parallel & Intercepting Routes</h1>
      </header>
      <main>
        {modal}
        {children}
      </main>
      <footer className="border p-10 text-2xl font-bold text-center m-4">
        <h1>Combining Parallel & Intercepting Routes Footer</h1>
      </footer>
    </>
  );
};

export default GalleryLayout;
