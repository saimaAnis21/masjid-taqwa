import { Facebook, Twitter, Youtube, TwitterX } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>117 Telegraph Road</p>
              <p>Bald Hills, Qld 4036, Australia</p>
              <p className="mt-2">( +61 ) 431-477-025</p>
              <p>info@masjidtaqwa.org.au</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/prayer-times" className="hover:text-emerald-300">
                  Prayer Times
                </Link>
              </li> */}
              <li>
                <Link href="/events" className="hover:text-emerald-300">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-emerald-300">
                  Support Us
                </Link>
              </li>
              {/* <li>
                <Link href="/volunteer" className="hover:text-emerald-300">
                  Volunteer
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/masjidtaqwa.org.au#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/@MasjidTaqwaBris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmwF4vqHdwi6EGRdlDpdgKw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-800 text-center">
          <p>&copy; {new Date().getFullYear()} Masjid Taqwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;