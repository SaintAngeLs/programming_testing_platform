import Layout from "../../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


interface TaskInfo {
  title: string;
}

export default function DeleteTaskPage() {
  const router = useRouter();
  const [taskInfo, setTaskInfo] = useState<TaskInfo | null>(null);
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/tasks?id=' + id).then(response => {
      setTaskInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push('/current_tasks');
  }

  async function deleteTask() {
    await axios.delete('/api/tasks?id=' + id);
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete Task "{taskInfo?.title}"?
      </h1>
      <div className="flex gap-4 justify-center">
        <button className="button-red" onClick={deleteTask}>Yes</button>
        <button className="button-default" onClick={goBack}>NO</button>
      </div>
    </Layout>
  );
}
