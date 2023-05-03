import ListOfContacts from "@/components/Contact/ListOfContacts";
import Layout from "@/containers/Layout";
import { Member } from "@/types/contact";
import { CSVDownloader } from "@/utils/CSVDownloader";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

const Contacts = ({ contacts }: { contacts: Member[] }) => {
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
    <Layout>
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
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const memberList = await fetch(
    "http://localhost:3000/api/getListOfContacts",
    {
      method: "POST",
      body: "aab7d9b7d0",
    }
  );
  const { members }: { members: Member[] } = await memberList.json();
  const contacts = members;
  // Pass data to the page via props
  return { props: { contacts } };
}

export default Contacts;
