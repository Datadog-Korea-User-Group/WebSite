import Image from "next/image";
import Link from "next/link";
import React from "react";

import { twMerge } from "tailwind-merge";

import { Heading } from "./Heading";

export const Sponsor = () => {
  const sponsors = [
    {
      title: "CJ 올리브영 (CJ OliveYoung)",
      src: "/images/sponsors/oliveyoung.jpg",
      link: "https://career.oliveyoung.com/",
      className: "",
    },
  ];
  return (
    <div>
      <Heading as='h2' className='font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'>
        Sponsors
      </Heading>
      <div className='flex flex-wrap'>
        {sponsors.map((item) => (
          <Link href={item.link} key={item.title}>
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain mr-4 mb-4", item.className)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
