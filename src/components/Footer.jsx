import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    sections: [
      {
        title: "about",
        links: [
          { label: "About Verily", path: "/about" },
          { label: "Careers", path: "/careers" },
          { label: "Social Impact" },
          { label: "Affiliates" },
          { label: "Sitemap" },
          { label: "Global Sites" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "skincare",
        links: [
          { label: "Makeup" },
          { label: "Skincare" },
          { label: "Fragrance" },
        ],
      },
      {
        title: "supplements",
        links: [
          { label: "Makeup" },
          { label: "Skincare" },
          { label: "Fragrance" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "makeup",
        links: [{ label: "Makeup" }, { label: "Skincare" }],
      },
      {
        title: "men",
        links: [
          { label: "Makeup" },
          { label: "Skincare" },
          { label: "Fragrance" },
          { label: "Bath & Body" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "contact",
        links: [
          { label: "Verily" },
          { label: "ul. Kowalewska 2a" },
          { label: "00-193 Warszawa" },
          { label: "Tel.: +48 123 456 789" },
          { label: "Fax: +48 124 456 789" },
          { label: "E-mail: info@verily.com" },
        ],
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-yellow-400 text-3xl font-bold font-inter">
              Verily
            </h2>
          </div>

          <div className="hidden md:grid grid-cols-4 gap-8 text-sm">
            {footerColumns.map((column, i) => (
              <div key={i} className="flex flex-col space-y-4">
                {column.sections.map((section, j) => (
                  <div key={j}>
                    <h3 className="font-inter font-semibold text-white tracking-wide text-lg mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1 text-gray-300">
                      {section.links.map((link, k) => (
                        <li key={k}>
                          {link.path ? (
                            <Link
                              to={link.path}
                              className="hover:text-yellow-400"
                            >
                              {link.label}
                            </Link>
                          ) : link.label.includes("@") ||
                            link.label.includes("Tel.") ||
                            link.label.includes("Fax") ? (
                            <a href="#" className="hover:text-yellow-400">
                              {link.label}
                            </a>
                          ) : (
                            <span className="hover:text-yellow-400 cursor-pointer">
                              {link.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-4 w-full text-sm">
            {footerColumns.slice(0, 3).map((column, i) =>
              column.sections.map((section, j) => (
                <details
                  key={`${i}-${j}`}
                  className="border-b border-gray-600 pb-2"
                >
                  <summary className="font-semibold text-lg cursor-pointer">
                    {section.title}
                  </summary>
                  <ul className="ml-4 mt-2 space-y-1 text-gray-300">
                    {section.links.map((link, k) => (
                      <li key={k}>
                        {link.path ? (
                          <Link
                            to={link.path}
                            className="hover:text-yellow-400 block"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.target
                                .closest("details")
                                ?.removeAttribute("open");
                            }}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <span className="hover:text-yellow-400 block cursor-pointer">
                            {link.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              ))
            )}

            <div>
              <h3 className="font-inter font-semibold text-white tracking-wide text-lg mb-2">
                Contact
              </h3>
              <ul className="space-y-1 text-gray-300">
                {footerColumns[3].sections[0].links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-yellow-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex md:flex-col gap-4 text-yellow-400 text-xl mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <ImInstagram />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2025 Verily USA, Inc. All rights reserved.{" "}
          <a href="#" className="underline">
            Terms of Use
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
