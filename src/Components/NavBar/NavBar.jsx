import Button from "../Button/Button";
const navClass="flex justify-between"
const NavBar = () => {
  const menu = ["Home", "Listed Books", "Pages to Read"];
  return (
    <nav className={`${navClass}`}>
      <p>Book Vibe</p>
      <div className={`${navClass} gap-6`}>
        {menu.map((item) => (
          <Button key={item} title={item} />
        ))}
      </div>
      <div className={`${navClass} gap-2`}>
        <Button />
        <Button title="Sign Up" />
      </div>
    </nav>
  );
};

export default NavBar;
