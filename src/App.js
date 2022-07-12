/** Dependencies */
import { Suspense, useId, useState, useTransition } from "react";

/** Components */
import Todos from "./components/Todos";

/** Stylesheets */
import "./App.css";

function App() {
  const id = useId();

  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      setShowCounter((prev) => !prev);
    });

    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h2>useId Hook</h2>
      <form>
        <label htmlFor={`username-${id}`}>Username: </label>
        <input id={`username-${id}`} />
        <br />
        <label htmlFor={`password-${id}`}>Password: </label>
        <input id={`password-${id}`} />
      </form>
      <hr />

      <div>
        <h2>useTransition Hook</h2>
        {isPending && <h1>Loading...</h1>}
        <button onClick={onClick}> Click me!</button>
        {showCounter && <div>{count}</div>}
      </div>
      <hr />
      <div>
        <h2>Suspense</h2>
        <Suspense fallback={<h1>Todos Loading....</h1>}>
          <Todos />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
