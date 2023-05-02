import { Chimp } from "@/utils/mailchimp";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mail = new Chimp();

  mail.setUp();

  const CSV = req.body;

  try {
    await mail.addContact(CSV);
    return res.status(200);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "There was an error creating contacts" });
  }
}
