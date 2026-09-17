import { use } from "react";

const HomeCard = ({data}) => {
    const newData=use(data)
    console.log(newData)
  return (
    <section>
      <p className="font-playfair font-bold text-[40px] text-center mb-9">Books</p>
      <div className="shadow border">
        <img src="" alt="" />

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            doloribus deserunt fugiat? Possimus harum, repudiandae at debitis
            explicabo cupiditate, amet assumenda tempore quos, voluptates
            ducimus iusto rem facilis commodi deserunt.
          </p>
          <p>
            Ad esse dolor deserunt excepturi, et provident cum dignissimos, sunt
            placeat itaque quibusdam, dicta cupiditate labore. Necessitatibus
            fugit sequi odio dolore dignissimos nesciunt, iste doloremque nemo
            quidem illum unde quae?
          </p>
        </div>

        <p>l</p>
        <p>l</p>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            nihil maxime eos at aliquid tempora doloremque illo ipsa minus,
            rerum animi placeat tempore voluptate a suscipit nisi asperiores,
            eaque aperiam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            nihil maxime eos at aliquid tempora doloremque illo ipsa minus,
            rerum animi placeat tempore voluptate a suscipit nisi asperiores,
            eaque aperiam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
