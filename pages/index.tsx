import DropZone from "@/components/Dropzone";
import { useContact } from "@/context/contacts/contactsContext";
import { clsx } from "clsx";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { contacts, setContacts } = useContact();

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
          <img
            src={`https://source.boringavatars.com/beam/120/Juan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
            alt="Visitor image"
            style={{ width: "24px", height: "24px" }}
            className="w-6 h-6"
          />
        </div>
      </header>
      <Toaster />
      <section className="max-w-xl mx-auto mt-14">
        <DropZone />
      </section>
      <section className="w-full flex flex-col items-center justify-center my-8 gap-8">
        <h2 className={clsx([inter.className, "text-2xl font-bold"])}>
          YOUR MAILCHIMP CONTACTS
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 content-centers gap-4">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <article
                className="max-w-lg rounded-md flex flex-col border-2
              border-slate-300 py-4 px-2 bg-slate-200"
              >
                <header>
                  <h3 className="text-lg font-semibold">{contact.full_name}</h3>
                </header>
                <section>{contact.email_address}</section>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
