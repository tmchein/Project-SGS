import React from "react";

const DropZone = () => {
  const fileSubmitInputRef = React.useRef<any>();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const file = e.target.files?.[0];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fileSubmitInputRef.current.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-gray-800 border-dashed py-24 px-8 flex justify-center 
      items-center flex-col gap-4"
    >
      <label htmlFor="fileSubmitBtn">Upload your file</label>
      <button
        className="bg-gray-900 text-white py-2 px-16 transition-colors duration-150 ease-in-out hover:bg-gray-700 rounded-lg"
        id="fileSubmitBtn"
        type="submit"
      >
        Submit
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
