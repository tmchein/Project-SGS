import { Member } from "@/types/contact";
import Contact from ".";

interface Props {
  contacts: Member[];
}

const ListOfContacts = ({ contacts }: Props) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 content-centers gap-4">
        {contacts.map(({ id, full_name, email_address }) => (
          <Contact
            key={id}
            id={id}
            full_name={full_name}
            email_address={email_address}
          />
        ))}
      </ul>
    </>
  );
};

export default ListOfContacts;
