import Papa from "papaparse";
import React from "react";
import { toast } from "sonner";

const DropZone = () => {
  const fileSubmitInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      // Logic for handling the error
      toast.error("Please upload a file");
      return;
    }

    const reader = new FileReader();

    reader.onload = async function (e) {
      const fileToText = e.target?.result;
      console.log(String(fileToText));
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(fileToText!.toString(), {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });
      console.log(parsed);
    };

    reader.readAsText(file);

    // const formData = new FormData();
    // formData.append("tmpCsvFile", file, file.name);

    // const res = await fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    // if (res.ok) {
    //   // handle success
    //   const data = res.json();
    //   toast.success("File was uploaded successfully");
    // } else {
    //   // handling errors
    //   toast.error("There was an error uploading the file");
    // }
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
