import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className="bg-slate-100 py-4 flex items-center justify-between px-8">
        <h1
          className={clsx([inter.className, "text-sky-950 text-3xl font-bold"])}
        >
          SGS x Mailchimp
        </h1>
        <div>
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">My Contacts</Link>
            </li>
          </ul>
        </div>
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
      <main>{children}</main>
    </>
  );
};

export default Layout;
