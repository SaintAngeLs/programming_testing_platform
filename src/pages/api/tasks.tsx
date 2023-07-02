import { NextApiRequest, NextApiResponse } from 'next';
import { mongooseConnect } from '@/lib/mongoose';
import  Task, { TaskDocument } from '../../models/task';
import { isAdminRequest } from './auth/[...nextauth]';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req;
  await mongooseConnect();

  await isAdminRequest(req, res);

  if (method === 'POST') {
    const {
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
    } = req.body;

    const taskDoc = await Task.create({
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
    });

    res.json(taskDoc);
  } else if (method === 'GET') {
    if (req.query?.id) {
      const task = await Task.findOne({ _id: req.query.id });
      res.json(task);
    } else {
      const tasks = await Task.find();
      res.json(tasks);
    }
  } else if (method === 'PUT') {
    const {
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
      _id,
    } = req.body;

    await Task.updateOne(
      { _id },
      {
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
      }
    );

    res.json(true);
  } else if (method === 'DELETE') {
    if (req.query?.id) {
      await Task.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
}
