import ListOfContacts from "@/components/Contact/ListOfContacts";
import DropZone from "@/components/Dropzone";
import { useContact } from "@/context/contacts/contactsContext";
import { CSVDownloader } from "@/utils/CSVDownloader";
import { clsx } from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { contacts } = useContact();
  const anchorDownloadRef = useRef<HTMLAnchorElement>(null);

  function downloadCSV() {
    const unparsed = CSVDownloader.stringToCsv(contacts);

    const blob = new Blob([unparsed], { type: "text/csv" });
    const URL = window.URL || window.webkitURL;
    const download = URL.createObjectURL(blob);
    anchorDownloadRef.current!.href = download;
    anchorDownloadRef.current?.click();
  }

  return (
    <main>
      <header className="bg-slate-100 py-4 flex justify-between px-8">
        <h1
          className={clsx([inter.className, "text-sky-950 text-3xl font-bold"])}
        >
          SGS x Mailchimp
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <p>Welcome visitor</p>
          <Image
            src={`https://source.boringavatars.com/beam/120/Juan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
            alt="Visitor image"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      </header>
      <Toaster />
      <section className="max-w-xl mx-auto mt-14">
        <DropZone />
      </section>
      {Boolean(contacts.length) && (
        <section className="w-full flex flex-col items-center justify-center my-8 gap-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className={clsx([inter.className, "text-2xl font-bold"])}>
              YOUR MAILCHIMP CONTACTS
            </h2>
            <button
              onClick={downloadCSV}
              className="bg-black text-white py-2 px-16 transition-colors duration-150 ease-in-out hover:bg-gray-800 rounded-lg"
            >
              Download your contacts
            </button>
            <a ref={anchorDownloadRef} href="" className="hidden">
              Download file
            </a>
          </div>
          <ListOfContacts contacts={contacts} />
        </section>
      )}
    </main>
  );
}
