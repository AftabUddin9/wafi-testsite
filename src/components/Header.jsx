import { HashLink as Link } from "react-router-hash-link";
import SearchComponent from "./SearchComponent";
const Header = () => {
  const navItems = [
    { id: 1, title: "DESRINATION GUIDES" },
    { id: 2, title: "CRUISE BY INTEREST" },
    { id: 3, title: "CRUISE LINES" },
  ];

  return (
    <div className=" mx-20 my-6 space-y-4">
      {/* upper row */}
      <div className="flex flex-row items-center justify-between">
        {/* logo */}
        <div>
          <a href="/" className="">
            <h1 className="text-3xl font-bold tracking-widest">
              CRUISE COLLECTIVE
            </h1>
          </a>
        </div>
        {/* subtitle & button */}
        <div className="flex flex-row items-center gap-4">
          <h2 className="font-medium text-lg">Discounts, Ideas & reviews</h2>
          <button className="bg-[#f9b741] py-[3px] px-3">
            <span className="font-semibold">JOIN FOR FREE OR LOG IN</span>
          </button>
        </div>
      </div>
      {/* lower row */}
      <div className="flex flex-row items-center justify-center">
        <ul className="flex flex-row items-center justify-between gap-[70px] font-semibold">
          <Link to="/exclusive-discounts">EXCLUSIVE DISCOUNTS</Link>
          {navItems.map((item) => (
            <div key={item.id} className="flex flex-row  cursor-pointer">
              <div className="">{item.title}</div>
              <svg
                className={`w-7 h-7 fill-current text-[#fe9e39] transition-transform `}
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          ))}
          <Link to="/new-to-cruising">NEW TO CRUISING?</Link>
          <Link to="/articles">ARTICLES</Link>
        </ul>
        {/* search */}
        <div className="ml-24">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default Header;
