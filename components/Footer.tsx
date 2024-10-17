import Link from "next/link";
import React from "react";

const data = {
  left: [
    { number: 1, title: "About", link: "/about" },
    { number: 2, title: "Policy", link: "/policy" },
    { number: 3, title: "Terms", link: "/terms" },
  ],
  middle: {
    title: "Startup 3",
    description:
      "Be sure to take a look at our Terms of Use and Privacy Policy",
  },
  right: [
    { number: 1, title: "Contact", link: "/contact" },
    { number: 2, title: "Twitter", link: "/twitter" },
    { number: 3, title: "Facebook", link: "/facebook" },
    { number: 4, title: "Google", link: "/google" },
  ],
};

const Footer = () => {
  return (
    <section className="bg-[#2f1893]">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row  lg:justify-between pt-20 pb-16 lg:px-16 md:px-12 sm:px-10 px-8">
          <div className="flex justify-center gap-4 lg:py-0  py-5">
            {data.left.map((item) => (
              <Link href={item.link} key={item.number} className="text-white hover:underline underline-offset-2 ">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex mx-auto lg:mx-0 flex-col sm:w-[19.875rem] lg:py-0  py-5 ">
              <h3 className="text-white text-center text-2xl leading-[1.953125rem] mb-7 font-bold">{data.middle.title}</h3>
              <p className="text-white text-center text-wrap">{data.middle.description}</p>
          </div>
          <div className="flex justify-center gap-4 lg:py-0  py-5 ">
            {data.right.map((item) => (
              <Link href={item.link} key={item.number} className="text-white hover:underline underline-offset-2">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
