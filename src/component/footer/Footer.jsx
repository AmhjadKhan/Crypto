import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold">
            <span className="gradient__header">Crypto</span>
          </h3>
          <p className="mt-4">
            BlockSec focuses on the security of the whole life cycle of smart
            contracts, specializing in rigorous testing.
          </p>
          <div className="flex space-x-4 mt-4">
            <i className="ri-facebook-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-fill"></i>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold">Useful Links</h4>
          <ul className="mt-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Governance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Community</h4>
          <ul className="mt-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Suggestion
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Partners</h4>
          <ul className="mt-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Ecosystem
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contributions
              </a>
            </li>
            <div className="flex items-center space-x-2">
              <input
                className="bg-gray-500 text-white placeholder-white px-4 py-2 rounded-l-lg focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-blue-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg border-2 flex items-center justify-center">
                <IoIosSend className="text-xl" />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
