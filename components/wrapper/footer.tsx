import Link from "next/link";
import { CustomDock } from "./custome-dock";

const footerLinks = {
  solutions: [
    {
      label: "Sustainable Logistics",
      href: "/solutions/sustainable-logistics",
    },
    { label: "Ocean Freight", href: "/solutions/ocean-freight" },
    { label: "Air Freight", href: "/solutions/air-freight" },
    { label: "Less-than-Container Load", href: "/solutions/lcl" },
    { label: "Rail Freight", href: "/solutions/rail-freight" },
    { label: "Additional Services", href: "/solutions/additional-services" },
    { label: "Container Tracking", href: "/solutions/container-tracking" },
    { label: "Instant Quote", href: "/solutions/instant-quote" },
  ],
  network: [
    { label: "The Power Of Many", href: "/network/power-of-many" },
    { label: "Members Benefits", href: "/network/benefits" },
    { label: "Members Directory", href: "/network/directory" },
    { label: "Payment Protection", href: "/network/payment-protection" },
  ],
  resources: [
    { label: "Ocean Rate Index", href: "/resources/ocean-rate-index" },
    { label: "Schedule", href: "/resources/schedule" },
    {
      label: "Container Dimensions & Specifications",
      href: "/resources/container-specs",
    },
    { label: "Incoterms", href: "/resources/incoterms" },
    { label: "Freight Dictionary", href: "/resources/dictionary" },
    { label: "Blogs", href: "/resources/blogs" },
  ],
  about: [
    { label: "Our Mission", href: "/about/mission" },
    { label: "Why All-Forward", href: "/about/why-all-forward" },
    { label: "Careers", href: "/about/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Our Locations", href: "/locations" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1437] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Links */}
          <div className="space-y-8 lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solutions Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-blue-500 pb-2">
                  OUR SOLUTIONS
                </h3>
                <ul className="space-y-2">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Network Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-blue-500 pb-2">
                  THE NETWORK
                </h3>
                <ul className="space-y-2">
                  {footerLinks.network.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-blue-500 pb-2">
                  RESOURCES
                </h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Column */}
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-blue-500 pb-2">
                  ABOUT US
                </h3>
                <ul className="space-y-2">
                  {footerLinks.about.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <CustomDock />
          <div className="text-gray-400 text-sm">
            Copyright © 2024 All-Forward, Inc.{" "}
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>{" "}
            /{" "}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
