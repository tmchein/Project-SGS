import { useContact } from "@/context/contacts/contactsContext";
import Papa from "papaparse";
import React from "react";
import { toast } from "sonner";

export interface Contact {
  "First name": string;
  "Last/Organization/Group/Household name": string;
  "System record ID": string;
  "Date changed": string;
  "Email Addresses\\Email address": string;
  "Email Addresses\\Date changed": string;
  "Todays Visitors Attribute\\Value": string;
  "Todays Visitors Attribute\\Date changed": string;
  "Addresses\\Address line 1": string;
  "Addresses\\Address line 2": string;
  "Addresses\\City": string;
  "Addresses\\ZIP": string;
  "Addresses\\State abbreviation": string;
  "Addresses\\Country abbreviation": string;
  "Phones\\Number": string;
  "Phones\\Date changed": string;
}

const DropZone = () => {
  const { setContacts } = useContact();
  const fileSubmitInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      // Logic for handling the error
      toast.error("Please upload a file");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async function (e) {
      const fileToText = e.target?.result;

      const parsed = await new Promise<Contact[]>((resolve, reject) => {
        Papa.parse<Contact>(fileToText!.toString(), {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });
      console.log(parsed);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify(parsed),
      });

      if (!res.ok) {
        // handle success
        toast.error("There was an error uploading the file");
        return;
      }

      setTimeout(async () => {
        const memberList = await fetch("/api/getListOfContacts", {
          method: "POST",
          body: "aab7d9b7d0",
        });
        const { members } = await memberList.json();
        console.log(members, "TEST");
        setContacts(members);
      }, 1000);
      toast.success("File was uploaded successfully");
    };

    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fileSubmitInputRef.current!.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-black rounded-md border-dashed py-24 px-8 flex justify-center 
      items-center flex-col gap-4"
    >
      <label htmlFor="fileSubmitBtn">Upload your file</label>
      <button
        className="bg-black text-white py-2 px-16 transition-colors duration-150 ease-in-out hover:bg-gray-800 rounded-lg"
        id="fileSubmitBtn"
        type="submit"
      >
        Upload
      </button>
      <input
        ref={fileSubmitInputRef}
        className="hidden"
        type="file"
        accept="text/csv"
        onChange={handleUpload}
      />
    </form>
  );
};

export default DropZone;
