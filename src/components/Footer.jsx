import { Link } from "react-router-dom";
import vector from "../assets/Vector.png";
const Footer = () => {
  const linksData = [
    { id: 1, title: "Contact Us", path: "/contact-us" },
    { id: 2, title: "About Us", path: "/about-us" },
    { id: 3, title: "Account Settings", path: "/account-settings" },
    { id: 4, title: "terms & Conditions", path: "/terms-and-conditions" },
    { id: 5, title: "Competitions", path: "/competitions" },
  ];
  const socialsData = [
    { id: 1, title: "On Instagram", path: "https://www.instagram.com" },
    { id: 2, title: "On Facebook", path: "https://www.facebook.com" },
  ];
  return (
    <div className="mx-36 mb-8">
      {/* footer main part */}
      <div className="flex flex-row items-center justify-between">
        {/* left part */}
        <div className="flex flex-row gap-44">
          {/* left 1st */}
          <div className="flex flex-col">
            <div className="text-lg font-semibold mb-4">OTHER LINKS</div>
            <div className="flex flex-col space-y-1">
              {linksData.map((item) => (
                <div key={item.id}>
                  <Link to={item.path}>
                    <span className="underline">{item.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* left 2nd */}
          <div className="flex flex-col">
            <div className="text-lg font-semibold mb-4">FOLLOW US</div>
            <div className="flex flex-col space-y-1">
              {socialsData.map((item) => (
                <div key={item.id}>
                  <Link to={item.path}>
                    <span className="underline">{item.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="flex flex-col items-center gap-6">
          <img src={vector} className="w-[135px] h-[153px]" />
          <span className="text-lg font-semibold tracking-wider">
            CRUISE COLLECTIVE
          </span>
        </div>
      </div>
      {/* footer copyright part */}
      <div className="mt-14">
        <span className="text-gray-600 text-sm">
          Copyright © 2023 Cruise Collective. All rights reserved. CA Seller
          License: 2132310-70
        </span>
      </div>
    </div>
  );
};

export default Footer;
