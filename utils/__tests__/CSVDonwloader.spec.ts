import { ContactsFixture } from "@/__fixtures__/ListOfContacts";
import { CSVDownloader } from "../CSVDownloader";

describe("CSV downloader class", () => {
  it("should parse a string to CSV", () => {
    const unparsed = CSVDownloader.stringToCsv(ContactsFixture);
    const isString = Boolean(typeof unparsed === "string");
    expect(unparsed).not.toBeFalsy();
    expect(unparsed).not.toBeNull();
    expect(unparsed).not.toBeUndefined();
    expect(isString).toBeTruthy();
  });
});
