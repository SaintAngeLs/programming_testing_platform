import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Task, { TaskDocument } from "../models/task"; // Import the Task model

interface TaskAddFormProps {
  _id: string;
  title: string;
  description: string;
  points: number;
  description1: string[];
  description2: string[];
  active: boolean;
  category: string; // Change the type to string
  properties: Record<string, unknown> | {};
  pdf: File | null;
  testingSuite: File | null;
  startDate: Date;
  deadline: Date | null;
}

const TaskAddForm: React.FC<TaskAddFormProps> = ({
  _id, 
  title:existingTitle, 
  description:existingDescription, 
  points:existingPoints, 
  description1: existingDescription1, 
  description2:existingDescription2, 
  active: existingActive,
  category:existingCategory, 
  properties:existingProperties, 
  pdf:existingPdf, 
  testingSuite:existingTestingSuite,
  startDate: existingStartDate,
  deadline: existingDeadline,}) => {
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [points, setPoints] = useState(existingPoints || 0);
  const [description1, setDescription1] = useState<string[]>(existingDescription1 || []); // Specify string[] type
  const [description2, setDescription2] = useState<string[]>(existingDescription2 || []); // Specify string[] type
  const [active, setActive] = useState<boolean>(existingActive || false)
  const [pdf, setPdf] = useState<File | null>(existingPdf ||  null); // Specify File | null type
  const [category, setCategory] = useState(existingCategory || '');
  const [properties, setProperties] = useState<Record<string, unknown>>(existingProperties || {}); // Specify Record<string, unknown> type
  const [testingSuite, setTestingSuite] = useState<File | null>(existingTestingSuite || null); // Add state for testingSuite
  const [startDate, setStartDate] = useState<Date>(existingStartDate || new Date());
  const [deadline, setDeadline] = useState<Date | null>(existingDeadline || null);
  const [goToTasks, setGoToTasks] = useState(false);
  const router = useRouter();

  const saveTask = async (event: React.FormEvent<HTMLFormElement>) => {
    

     // Check if required fields are filled
    if (!title || !description || !pdf) 
    {
      window.alert('Please fill in all required fields.');
      return;
    }

    const data = {
      title,
      description,
      points,
      description1,
      description2,
      active,
      pdf,
      category,
      properties,
      testingSuite,
      startDate,
      deadline,
    };
    event.preventDefault();
    if(_id)
    {
        //update the product
        await axios.put('/api/tasks', {...data,_id});
    }
    else
    {
        // create new one product
        await axios.post("/api/tasks", data);
    }
    setGoToTasks(true);
    
    

    // try {
    //   // Send a POST request to save the task
    //   await axios.post('/api/tasks', data);
    //   router.push('/current_tasks'); // Redirect to the tasks page after successful save
    // } catch (error) {
    //   console.log(error);
    //   // Handle the error here
    // }
  };
  if(goToTasks)
  {
    router.push('/current_tasks')
  }

  return (
    <form onSubmit={saveTask}>
      <div className='flex '>
        <div className='form-group w-50'>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Points</label>
          <input type="number" value={points} onChange={(e) => setPoints(parseInt(e.target.value))} />

          <label>Description 1</label>
          <input
            type="text"
            value={description1.join(',')} // Join the array elements with a separator
            onChange={(e) => setDescription1(e.target.value.split(','))} // Split the string into an array
          />

          <label>Description 2</label>
          <input
            type="text"
            value={description2.join(',')} // Join the array elements with a separator
            onChange={(e) => setDescription2(e.target.value.split(','))} // Split the string into an array
          />

          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

        </div>
        <div className='form-group w-50'>
          <label>PDF</label>
          <input type="file" onChange={(e) => setPdf(e.target.files?.[0] || null)} /> {/* Use optional chaining to handle null case */}
          <label>Testing suite</label>
          <input type="file" onChange={(e) => setTestingSuite(e.target.files?.[0] || null)} /> {/* Use optional chaining to handle null case */}
          <div className="grid grid-cols-6 items-center py-2">
            <div className="col-span-1">
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                id="active-checkbox"
                className="mr-2"
                style={{ marginRight: 0 }} // Set inline style to override margin
              />
            </div>
            <div className="col-span-5">
              <label htmlFor="active-checkbox" className="text-sm font-bold" style={{ marginLeft: 0 }}>
                Set the task currently active
              </label>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10 items-center">
            <div className="col-span-3">
              <label>Start Date</label>
              <input type="date" value={startDate.toISOString().slice(0, 10)} onChange={(e) => setStartDate(new Date(e.target.value))} />
            </div>
            <div className="col-span-3">
              <label>Deadline</label>
              <input type="date" value={deadline ? deadline.toISOString().slice(0, 10) : ''} onChange={(e) => setDeadline(new Date(e.target.value))} />
            </div>
            <div className="col-span-6" style={{ justifySelf: 'end' }}>
              <button type="submit" className='button-primary-version'>Save</button>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Add fields for properties here */}

      
      
      
      
    </form>
  );
};

export default TaskAddForm;
