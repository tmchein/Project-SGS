interface Props {
  full_name: string;
  email_address: string;
}

const Contact = ({ full_name, email_address }: Props) => {
  return (
    <li>
      <article
        className="max-w-lg rounded-md flex flex-col border-2
              border-slate-300 py-4 px-2 bg-slate-200"
      >
        <header>
          <h3 className="text-lg font-semibold">{full_name}</h3>
        </header>
        <section>{email_address}</section>
      </article>
    </li>
  );
};

export default Contact;
