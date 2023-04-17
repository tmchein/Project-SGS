import { Contact } from "@/components/Dropzone";
import Mailchimp from "@/utils/mailchimp";
import mailchimp from "@mailchimp/mailchimp_marketing";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const CSV = req.body;
  const parsedCSV = JSON.parse(CSV);

  Mailchimp();

  parsedCSV.map(async (contact: Contact) => {
    const {
      "First name": firstName,
      "Last/Organization/Group/Household name": lastName,
      "Email Addresses\\Email address": email,
      "System record ID": recordId,
      "Date changed": record_date,
      "Email Addresses\\Date changed": email_date,
      "Todays Visitors Attribute\\Value": visitor_attr,
      "Todays Visitors Attribute\\Date changed": visitor_date,
      "Addresses\\Address line 1": addr1,
      "Addresses\\Address line 2": addr2,
      "Addresses\\City": city,
      "Addresses\\ZIP": zip,
      "Addresses\\State abbreviation": state,
      "Addresses\\Country abbreviation": country,
      "Phones\\Number": phone,
      "Phones\\Date changed": phone_date,
    } = contact;

    try {
      await mailchimp.lists.addListMember("aab7d9b7d0", {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          SR_ID: recordId,
          SR_DATE: record_date,
          EMAIL_DATE: email_date,
          VSTR_ATTR: visitor_attr,
          VSTR_DATE: visitor_date,
          ADDRESS1: addr1,
          ADDRESS2: addr2,
          CITY: city,
          ZIP: zip,
          STATE: state,
          COUNTRY: country,
          PHONE: phone,
          PHONE_DATE: phone_date,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "There was an error creating contacts" });
    }
  });

  try {
    setTimeout(async () => {
      // @ts-expect-error
      const allContacts = await mailchimp.lists.getListMembersInfo(
        "aab7d9b7d0",
        {
          count: 150,
        }
      );
      const { members, total_items } = allContacts;
      return res.status(200).json({ members, total_items });
    }, 1000);
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Could not retrieve information from the user list" });
  }
}
