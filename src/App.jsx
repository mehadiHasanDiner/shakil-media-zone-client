import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-bold text-2xl text-center my-3">Toy Land BD (Latest Website in the country)</h1>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          Number of Toys: {count}
        </button>
      </div>
    </>
  );
}

export default App;
