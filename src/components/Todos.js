/** Dependencies */
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Todos = () => {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher,
    { suspense: true }
  );

  return (
    <div>
      {data?.map((todo) => (
        <p>{todo?.title}</p>
      ))}
    </div>
  );
};

export default Todos;
