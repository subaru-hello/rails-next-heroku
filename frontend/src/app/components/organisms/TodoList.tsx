"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { axiosInstance } from '@/app/utils/axios';

export interface Todo {
  id: number;
  text: string;
  isCompleted?: boolean;
}
export interface TestTodo {
  title: string;
  contents: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
const [testTodos, setTestTodos] = useState<TestTodo[]>([])
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

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/todos`);
      setTestTodos(res.data);
    };
    f();
    console.log('test', testTodos)
  }, []);

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
        {testTodos.map((todo) => (
          <>
          <p>{todo.title}</p>
          <p>{todo.contents}</p>
          </>
        ))}
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
