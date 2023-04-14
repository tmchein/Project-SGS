// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const CSV = req.body;
  const parsedCSV = JSON.parse(CSV);
  //id aab7d9b7d0

  for (const contact of parsedCSV) {
    const {
      "First name": firstName,
      "Last/Organization/Group/Household name": lastName,
    } = contact;
    console.log("FLAG", firstName, lastName);
  }

  // const response = await mailchimp.ping.get();

  // res.status(200).json(body);
  res.status(200).json({ name: "John Doe" });
  // console.log(body, "this is the body");
}
