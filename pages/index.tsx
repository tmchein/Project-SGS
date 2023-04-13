import DropZone from "@/components/Dropzone";
import { pickRandomNames } from "@/utils/randomVisitorNames";
import { clsx } from "clsx";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name] = React.useState<string>(() => pickRandomNames());
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
    </main>
  );
}
