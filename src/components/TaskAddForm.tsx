import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const TaskAddForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [description1, setDescription1] = useState<string[]>([]); // Specify string[] type
  const [description2, setDescription2] = useState<string[]>([]); // Specify string[] type
  const [pdf, setPdf] = useState<File | null>(null); // Specify File | null type
  const [category, setCategory] = useState('');
  const [properties, setProperties] = useState<Record<string, unknown>>({}); // Specify Record<string, unknown> type
  const router = useRouter();

  const saveTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title,
      description,
      points,
      description1,
      description2,
      pdf,
      category,
      properties,
    };

    try {
      // Send a POST request to save the task
      await axios.post('/api/tasks', data);
      router.push('/tasks'); // Redirect to the tasks page after successful save
    } catch (error) {
      console.log(error);
      // Handle the error here
    }
  };

  return (
    <form onSubmit={saveTask}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Points</label>
      <input type="number" value={points} onChange={(e) => setPoints(parseInt(e.target.value))} />

      <label>Description 1</label>
      <input type="text" value={description1} onChange={(e) => setDescription1([e.target.value])} /> {/* Wrap in an array */}

      <label>Description 2</label>
      <input type="text" value={description2} onChange={(e) => setDescription2([e.target.value])} /> {/* Wrap in an array */}

      <label>PDF</label>
      <input type="file" onChange={(e) => setPdf(e.target.files?.[0] || null)} /> {/* Use optional chaining to handle null case */}

      <label>Category</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      {/* Add fields for properties here */}

      <button type="submit">Save</button>
    </form>
  );
};

export default TaskAddForm;
