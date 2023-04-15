import { Member } from "@/types/contact";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const ContactContext = createContext<{
  contacts: Member[];
  setContacts: React.Dispatch<any>;
}>({
  contacts: [],
  setContacts: () => {},
});

export default function ContactProvider({ children }: PropsWithChildren) {
  const [contacts, setContacts] = useState<any[]>([]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("ContactContext must be used within a ContactProvider");
  }
  return context;
}
