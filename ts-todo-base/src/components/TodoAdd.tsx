import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { SetTodosType } from "../store";

function TodoAdd({ setTodos } : { setTodos: SetTodosType }) {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" 
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
      />
      <Button>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
