// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Mailchimp from "@/utils/mailchimp";
import mailchimp from "@mailchimp/mailchimp_marketing";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  Mailchimp();
  const response = await mailchimp.lists.getListMembersInfo("aab7d9b7d0", {
    count: 150,
  });
  console.log(response, "LIST INFO");
  res.status(200).json({ name: "John Doe" });
}
