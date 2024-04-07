import { useState } from "react";
import TodoItem from "./_components/TodoItem";
import UiButton from "../../components/atoms/ui-button";
import ModalAddNewTodo from "./_components/ModalAddNewTodo";

const Dashboard = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      message: "Hello World",
    },
  ]);
  const [modalAddNewOpened, setModalAddNewOpened] = useState(false);

  return (
    <>
      <UiButton onClick={() => setModalAddNewOpened(true)}>Add New Todo</UiButton>
      {todos.map(({ id, message }) => (
        <TodoItem key={id} id={id} message={message} />
      ))}

      {modalAddNewOpened && <ModalAddNewTodo onCancel={() => setModalAddNewOpened(false)} />}
    </>
  );
};

export default Dashboard;
