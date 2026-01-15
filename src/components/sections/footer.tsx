"use client";
//#region Imports
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import Link from "next/link";
//#endregion

//#region Constants
const navigation = {
  services: [
    { name: "General Consultation", href: "#" },
    { name: "Vaccinations", href: "#" },
    { name: "Dental Care", href: "#" },
    { name: "Preventive Care", href: "#" },
  ],
  company: [
    { name: "About PowerVet", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Booking", href: "#" },
    { name: "Emergency", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const social = [
  { name: "Facebook", icon: FacebookLogoIcon, href: "#" },
  { name: "Instagram", icon: InstagramLogoIcon, href: "#" },
  { name: "Twitter", icon: TwitterLogoIcon, href: "#" },
  { name: "YouTube", icon: YoutubeLogoIcon, href: "#" },
];
//#endregion

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent py-16" id="footer">
      <div className="px-6 lg:px-12 lg:py-16">
        {/* LOGO - MESSAGE - SOCIALS - LINKS 01 - LINKS 02 - LINKS 03 - LINKS 04  */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* LOGO - MESSAGE - SOCIALS */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            {/* LOGO */}
            <Link href="/#hero">
              <Image
                alt="PowerVet"
                src="/content/logos/whiteLogo.webp"
                width={0}
                height={0}
                sizes="100vw"
                className="w-44 h-auto"
              />
            </Link>

            {/* MESSAGE */}
            <p className="mt-4 max-w-xs text-white">
              Caring for your pets 24/7. PowerVet provides premium veterinary
              services with love and expertise.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white transition-colors hover:text-white"
                  aria-label={item.name}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon weight="duotone" className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LINKS 01 */}
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold text-white text-xl">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-white transition-colors hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LINKS 02 */}
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold text-white text-xl">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-white transition-colors hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LINKS 03 */}
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold text-white text-xl">Support</h3>
            <ul className="mt-4 space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-white transition-colors hover:text-white"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* COPYRIGHT - LINKS 04 */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* COPYRIGHT */}
          <p className="text-sm text-white font-light">
            © {new Date().getFullYear()} PowerVet. All rights reserved. |
            Designed by{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gui-bus/"
              className="font-black hover:underline transition-all duration-300"
            >
              guibus.dev
            </Link>
          </p>

          {/* LINKS 04 */}
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-white transition-colors hover:text-white"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
