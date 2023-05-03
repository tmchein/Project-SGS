import { Member } from "@/types/contact";
import Papa from "papaparse";

export class CSVDownloader {
  static stringToCsv(contacts: Member[]) {
    const exportedContacts = contacts.map(
      ({ id, email_address, full_name, status }) => {
        return {
          ID: id,
          EMAIL: email_address,
          FIRSTNAME: full_name,
          STATUS: status,
        };
      }
    );

    return Papa.unparse(exportedContacts);
  }
}
