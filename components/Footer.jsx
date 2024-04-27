import { FOOTER_SOCIALS_ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 px-4 grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
      <div className="flex gap-20">
        <div>
          <h4 className="text-white mb-6">Contact Us</h4>
          <ul className="text-silver flex flex-col gap-3">
            <li className="flex">
              <div className="inline-flex items-center justify-content-center">
                <Image
                  src="/socials/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  style={{ marginRight: "10px" }}
                />
                <Link href="https://maps.app.goo.gl/57mzBTP4x82uD5pK8">
                  Cub 1, Abdelkader Belarbi, Bab Ezzouar
                </Link>
              </div>
            </li>
            <li className="flex">
              <div className="inline-flex items-center justify-content-center">
                <Image
                  src="/socials/mail.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  style={{ marginRight: "10px" }}
                />
                <a href="mailto:cub1@gmail.com">cubtechclub@gmail.com</a>
              </div>
            </li>
            <li className="flex">
              <div className="inline-flex items-center justify-content-center">
                <Image
                  src="/socials/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  style={{ marginRight: "10px" }}
                />
                <a href="tel:+2130000000">+213 21 21 21</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-white mb-6">Follow Us</h4>
        <div className="flex gap-4">
  {FOOTER_SOCIALS_ICONS.map((sm) => (
    <div
      className="w-8 h-8 bg-white_10 rounded-full flex items-center justify-center"
      key={sm.id}
    >
      <Link href={sm.url}>  <Image src={sm.icon} alt={sm.alt} width={20} height={20} />
      </Link>
    </div>
  ))}
</div>
      </div>
    </footer>
  );
};

export default Footer;
