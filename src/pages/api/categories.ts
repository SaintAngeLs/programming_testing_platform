import { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";
import { Category } from "@/models/Category";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "POST") {
    const { name, parentCategory, properties } = req.body;
    const categoryDocument = await Category.create({
      name,
      parentCategory: parentCategory || undefined,
      properties: properties,
    });
    res.json(categoryDocument);
  }

  if (method === "GET") {
    const categories = await Category.find().populate("parentCategory");
    res.json(categories);
  }

  if (method === "PUT") {
    const { name, parentCategory, properties, _id } = req.body;
    const categoryDocument = await Category.updateOne(
      { _id },
      {
        name,
        parentCategory: parentCategory || undefined,
        properties: properties,
      }
    );
    res.json(categoryDocument);
  }

  if (method === "DELETE") {
    const { _id } = req.query;
    await Category.deleteOne({ _id: _id });
    res.json("ok");
  }
}
