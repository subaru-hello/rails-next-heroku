
type TodoProps = {
  todo: {
    isCompleted?: boolean;
    text: string;
  }
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo = ({ todo, index, completeTodo, removeTodo }: TodoProps) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  };
  
  export default Todo;
  