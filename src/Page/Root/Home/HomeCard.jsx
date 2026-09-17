import { use } from "react";
import Button from "../../../Components/Button/Button";

const HomeCard = ({ data }) => {
  const newData = use(data);
  console.log(newData);
  return (
    <section>
      <p className="font-playfair font-bold text-[40px] text-center mb-9">
        Books
      </p>
      <div className="grid grid-cols-3 gap-6">
        {newData.map((item) => (
          <div className="shadow border">
            <img className="h-41.5 mx-auto" src={item.image} alt="" />

            <div>
              <Button title="Young Adult"/>
              <Button title="Identity"/>
              
            </div>

            <p>{item.bookName}</p>
            <p>By: {item.author}</p>
            <div>
              <p>{item.tags[0]}</p>
              <p>{item.tags[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCard;
