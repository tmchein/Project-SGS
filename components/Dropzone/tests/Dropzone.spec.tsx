import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropZone from "..";

describe("Dropzone", () => {
  const file = new File(["hello"], "dummyFile.csv", { type: "text/csv" });

  it("Should render Dropzone component", () => {
    render(<DropZone />);
    const DropzoneTitle = screen.getByText(/Upload your file/i);
    expect(DropzoneTitle).toBeInTheDocument();
  });

  it("Should upload a file successfully", async () => {
    render(<DropZone />);

    const input = screen.getByLabelText(/file uploader/i) as HTMLInputElement;
    await userEvent.upload(input, file);

    expect(input!.files![0]).toStrictEqual(file);
    expect(input.files?.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});
