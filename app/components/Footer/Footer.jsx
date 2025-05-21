import Link from "next/link";
import React from "react";

const Footer = () => {
  const support = [
    {
      id: 1,
      name: "FAQ",
      link: "/",
    },
    {
      id: 2,
      name: "Shipping & Returns",
      link: "/",
    },
    {
      id: 3,
      name: "Care guide",
      link: "/",
    },
    {
      id: 4,
      name: "Reedem warranty",
      link: "/",
    },
  ];

  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      link: "/",
    },
    {
      id: 2,
      name: "Facebook",
      link: "/",
    },
    {
      id: 3,
      name: "Twitter",
      link: "/",
    },
    {
      id: 4,
      name: "Tiktok",
      link: "/",
    },
  ];

  const aboutUs = [
    {
      id: 1,
      name: "Our story",
      link: "/",
    },
    {
      id: 2,
      name: "Designer",
      link: "/",
    },
    {
      id: 3,
      name: "Craftmanship",
      link: "/",
    },
    {
      id: 4,
      name: "Sustainability",
      link: "/",
    },
  ];

  return (
    <div className="px-4 pt-16 mx-auto  md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 text-center sm:text-left">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center justify-center sm:justify-start"
          >
            <img
              src="/img/logo/logo.png"
              alt="dekoor"
              className="w-24 mx-auto sm:mx-0"
            />
          </Link>
          <div className="mt-6 lg:max-w-sm mx-auto sm:mx-0">
            <p className="text-sm text-gray-800">
              Dekoor is a furniture company created to fulfill the needs of
              family with aesthetic feeling in their furniture. Always pay
              attention to details and give clear communication for the
              customers. Priority of our design is comfortability.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-center sm:text-left">
          <p className="font-semibold tracking-wide text-[#101828]">Support</p>
          {support.map((item) => (
            <div key={item.id}>
              <Link
                href={item.link}
                className="text-gray-800 hover:text-deep-purple-800 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-center sm:text-left">
          <p className="font-semibold tracking-wide text-[#101828]">
            Social Media
          </p>
          {socialMedia.map((item) => (
            <div key={item.id}>
              <Link
                href={item.link}
                className="text-gray-800 hover:text-deep-purple-800 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-center sm:text-left">
          <p className="font-semibold tracking-wide text-[#101828]">About Us</p>
          {aboutUs.map((item) => (
            <div key={item.id}>
              <Link
                href={item.link}
                className="text-gray-800 hover:text-deep-purple-800 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
        <p className="text-sm text-gray-600">©Copyright 2022 Dekoor</p>
      </div>
    </div>
  );
};

export default Footer;
