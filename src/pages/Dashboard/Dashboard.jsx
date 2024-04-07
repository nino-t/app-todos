import TodoItem from "./_components/TodoItem";

const Dashboard = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <TodoItem key={item} id={1} message="Helo World" />
      ))}
    </>
  );
};

export default Dashboard;
