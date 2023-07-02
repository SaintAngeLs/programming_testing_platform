import Layout from "@/components/Layout";
import TaskAddForm from "../../../components/TaskAddForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import  Task, { TaskDocument } from "../../../models/task"; // Import the Task model
import mongoose from "mongoose";

// interface TaskInfo {
//     _id: string;
//     title: string;
//     description: string;
//     points: number;
//     description1: string[];
//     description2: string[];
//     active: boolean;
//     pdf: File | null;
//     category: string;
//     properties: object;
//     testingSuite: File | null;
//     startDate: Date;
//     deadline: Date; 
//   }

export default function EditProduct() {
  const [taskInfo, setTaskInfo] = useState<TaskDocument | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/api/tasks?id=${id}`)
      .then(response => {
        setTaskInfo(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [id]);

  return (
    <Layout>
      <h1>Edit task Content</h1>
      {taskInfo && (
        <TaskAddForm
          _id={taskInfo._id}
          title={taskInfo.title}
          description={taskInfo.description}
          points={taskInfo.points}
          description1={taskInfo.description1}
          description2={taskInfo.description2}
          active={taskInfo.active}
          category={taskInfo.category}
          properties={taskInfo.properties}
          pdf={taskInfo.pdf}
          testingSuite={taskInfo.testingSuite}
          startDate={taskInfo.startDate}
          deadline={taskInfo.deadline}
        />
      )}
    </Layout>
  );
}
