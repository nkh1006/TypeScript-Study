import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { SetTodosType, TodosType } from '../store';

function TodoListItems({ todos, setTodos }: { todos: TodosType, setTodos: SetTodosType}) {
  return (
    <>
      {[].map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox />
          <Input mx={2} value={todo.text} />
          <Button>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({ todos, setTodos }: { todos: TodosType, setTodos: SetTodosType}) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoList;
