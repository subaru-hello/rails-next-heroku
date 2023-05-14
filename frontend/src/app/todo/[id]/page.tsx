import { Todo } from '../../components/organisms/TodoList'; // You may need to move your types into a separate file


const TodoDetails = (params: any) => {
 
    const todos = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('todos') || '[]') : [];
    const todo: Todo = todos.find((todo: Todo) => todo.id === Number(params.todo.id));
    if (!todo) {
        return <div>Todo not found</div>;
      }
    
  return (
    <div>
      <h2>Todo Details:</h2>
      <p>{todo.text}</p>
      <p>Status: {todo.isCompleted ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
};

// This function runs at build time on the server, and its return value populates props.
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params;

//   // Fetch the todo from wherever you're storing your todos
//   // This is just a placeholder and will not actually work
// //   const todo = await fetchTodoById(id);

//   return {
//     props: {
//       todo
//     },
//   };
// };

export default TodoDetails;
