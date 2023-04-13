// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "node:fs";
import os from "node:os";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  try {
    const form = new formidable.IncomingForm();

    form.parse(req.body, async (err, fields, files: any) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
      }

      // Get the uploaded file.
      const uploadedFile = files.myFile;
      console.log(uploadedFile, "my file");

      // Save the file to a tmp directory.
      await fs.promises.rename(
        uploadedFile.path,
        `${os.tmpdir()}/${uploadedFile.name}`
      );
      console.log("TEST123", `${os.tmpdir()}/${uploadedFile.name}`);
      res.status(200).json({ message: "File uploaded successfully!" });
    });
  } catch (error: any) {
    console.error(error.message, "FATAL ERROR");
    res.status(500).json({ error: error.message });
  }

  // console.log(body, "this is the body");
}
