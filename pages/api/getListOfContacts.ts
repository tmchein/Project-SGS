import { Chimp } from "@/utils/mailchimp";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mail = new Chimp();

  mail.setUp();

  const listID = req.body;

  try {
    const { members, total_items } = await mail.getContactList(listID);
    return res.status(200).json({ members, total_items });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message });
    } else {
      return res.status(404).json({ error: "Unexpected error" });
    }
  }
}
