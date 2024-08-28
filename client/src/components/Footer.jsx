import React from "react";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Help",
    items: ["Contact Us", "FAQ's", "Product Care", "Track your order", "Store"],
  },

  {
    title: "Services",
    items: ["Repairs", "Personalization", "Art of Gifting"],
  },
  {
    title: "Company",
    items: ["About Us", "Blog", "Jobs", "Press", "Partners"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://fontawesome.com/icons/facebook?f=brands&s=solid",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://fontawesome.com/icons/instagram?f=brands&s=solid",
  },
  {
    name: "Twitter",
    icon: faXTwitter,
    link: "https://fontawesome.com/icons/x-twitter?f=brands&s=solid",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://fontawesome.com/icons/whatsapp?f=brands&s=solid",
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full mt-24 bg-black text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 borer-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-gray-500 hover:text-white cursor-pointer"
                  >
                    {item === "About Us" ? (
                      <Link className=" hover:text-stone-500" to="/about">
                        {item}
                      </Link>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-3 pt-2 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsleter</p>
            <p className="py-4">Be the first to know about new arrivals.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full p-2 mr-4 rounded-md mb-4"
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4"> 2024 TAREGHON COMPANY. All rights reserved.</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            {items.map((x) => {
              return (
                <FontAwesomeIcon icon={x.icon} style={{ color: "#ffffff" }} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
