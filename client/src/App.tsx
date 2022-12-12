import { Box } from "@mantine/core";
import { useState } from "react";
import useSWR from "swr";
import "./App.css";
import AddTodo from "./components/AddTodo";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (URL: string) =>
  fetch(`${ENDPOINT}/${URL}`).then((res) => res.json());

function App() {
  const { data, mutate } = useSWR("api/todos", fetcher);

  return (
    <Box>
      {JSON.stringify(data)}
      <AddTodo />
    </Box>
  );
}

export default App;
