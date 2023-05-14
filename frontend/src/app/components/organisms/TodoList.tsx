"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Todo from './Todo';
import TodoForm from './TodoForm';

export interface Todo {
  id: number;
  text: string;
  isCompleted?: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { id: todos.length, text }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <div key={index}>
            <Link href={`/todo/${todo.id}`}>
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
