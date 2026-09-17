import { NavLink } from "react-router";
import NavPath from "../../Router/NavPath";
import Button from "../Button/Button";
const navClass = "flex justify-between items-center";
const navButtonClass =
  "px-6 py-4.5 text-white font-semibold text-xl rounded-lg cursor-pointer";
const menu = [
  {
    title: "Home",
    path: NavPath.Home,
  },
  {
    title: "Listed Books",
    path: NavPath.Listed_Books,
  },
  {
    title: "Pages to Read",
    path: NavPath.PageToRead,
  },
];
const NavBar = () => {
  return (
    <nav className={`${navClass} py-12.5 sticky top-0 bg-white z-50 `}>
      <p className="font-bold text-primary text-2xl">Book Vibe</p>
      <div className={`${navClass} gap-6`}>
        {menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive, isPending }) =>
              isPending ? "text-lg text-primary" : isActive ? "px-5 py-3.5 border text-green border-green border-solid rounded font-semibold text-lg cursor-pointer" : ""
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className={`${navClass} gap-2`}>
        <Button className={`bg-green ${navButtonClass}`} />
        <Button className={`bg-blue ${navButtonClass}`} title="Sign Up" />
      </div>
    </nav>
  );
};

export default NavBar;
