import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="relative  ">
      <img className="  opacity-40   " src={featuredImg} alt="" />
      <div className="absolute top-20  ">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Featured Item"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center px-16 py-8 bg-slate-100 bg-opacity-70">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 ">
            <p>March 20, 2023</p>
            <p className="uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
