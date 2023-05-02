import { Contact } from "@/components/Dropzone";
import mailchimp from "@mailchimp/mailchimp_marketing";

interface IChimp {
  setUp: () => void;
  addContact: (CSV: string) => Promise<void>;
  getContactList: (
    listId: string
  ) => Promise<{ members: any; total_items: any }>;
}
export class Chimp implements IChimp {
  setUp(): void {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX,
    });
  }

  async addContact(CSV: string): Promise<void> {
    const parsedCSV: Contact[] = JSON.parse(CSV);
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
        throw new Error("There was an error creating contacts");
      }
    });
  }
  //"aab7d9b7d0"
  async getContactList(
    listId: string
  ): Promise<{ members: any; total_items: any }> {
    try {
      // @ts-expect-error
      const allContacts = await mailchimp.lists.getListMembersInfo(listId, {
        count: 150,
      });
      const { members, total_items } = allContacts;
      return { members, total_items };
    } catch (error) {
      throw new Error("Could not retrieve information from the user list");
    }
  }
}
