'use client';
import {FC, useState, FormEvent, ChangeEvent } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
