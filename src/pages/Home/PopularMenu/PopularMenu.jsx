import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"POPULAR MENU"}
        className="mb-12"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 ">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;