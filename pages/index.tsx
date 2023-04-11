import DropZone from "@/components/Dropzone";
import { clsx } from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <header className="bg-slate-100 py-4 flex justify-between px-8">
        <h1
          className={clsx([inter.className, "text-sky-950 text-3xl font-bold"])}
        >
          SGS x Mailchimp
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <p>Welcome Visitor</p>
          <Image
            src="https://source.boringavatars.com/beam/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
            alt="User image placeholder"
            width={24}
            height={24}
          />
        </div>
      </header>
      <section className="max-w-xl mx-auto mt-14">
        <DropZone />
      </section>
    </main>
  );
}
