import { NextApiRequest, NextApiResponse } from "next";

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  console.log("query", req.query);
  return res.status(200).json({ message: "Den er go" });
}
