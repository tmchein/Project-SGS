import { Member } from "@/types/contact";
import { contactUploadDummy } from "../__fixtures__/mailchimpFixture";
import { Chimp } from "../mailchimp";

describe("Mailchimp class", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set up the mailchimp class successfully", () => {
    const mail = new Chimp();
    let spy = jest.spyOn(mail, "setUp");
    mail.setUp();
    expect(spy).toBeCalledTimes(1);
  });

  it("Should add a contact successfully", () => {
    const mail = new Chimp();
    let spy = jest.spyOn(mail, "setUp");
    mail.setUp();
    expect(spy).toBeCalledTimes(1);

    const parsedCSV = JSON.stringify(contactUploadDummy);
    let addContactSpy = jest
      .spyOn(mail, "addContact")
      .mockImplementation(async () => {});

    mail.addContact(parsedCSV);

    expect(addContactSpy).toBeCalledTimes(1);
    expect(addContactSpy).not.toThrowError();
  });

  it("Should return contact list", () => {
    const mail = new Chimp();
    let spy = jest.spyOn(mail, "setUp");
    mail.setUp();
    expect(spy).toBeCalledTimes(1);

    let contactListSpy = jest
      .spyOn(mail, "getContactList")
      .mockImplementation(
        async (
          listId: string
        ): Promise<{ members: Member[]; total_items: any }> => {
          return { members: [], total_items: "30" };
        }
      );

    mail.getContactList("testListId123");

    expect(contactListSpy).toBeCalledTimes(1);
    expect(contactListSpy).not.toThrowError();
  });
});
