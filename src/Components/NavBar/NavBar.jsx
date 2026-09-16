import NavPath from "../../Router/NavPath";
import Button from "../Button/Button";
const navClass = "flex justify-between items-center";
const navButtonClass =
  "px-7 py-5 text-white font-semibold text-xl rounded-lg cursor-pointer";
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
    <nav className={`${navClass} py-12.5 `}>
      <p className="font-bold text-primary text-2xl">Book Vibe</p>
      <div className={`${navClass} gap-6`}>
        {menu.map((item) => (
          <Button
            className="px-5 py-3.5 border text-green border-green border-solid rounded font-semibold text-lg cursor-pointer"
            key={item.path}
            title={item.title}
          />
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
