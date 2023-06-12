import img from "../../assets/home/chef-service.jpg";

const ServiceBannnar = () => {
  return (
    <div className="my-8 relative">
      <img className="opacity-70" src={img} alt="" />
      <div className=" text-center  absolute top-36 bg-white text-black mx-8 p-8">
        <h3 className="text-3xl font-bold font-sans">Bistro Boss</h3>
        <p className="text-gray-700 p-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          ab, accusamus inventore dicta necessitatibus nemo fugiat magni enim
          nam aperiam alias non minima incidunt. Officia ex est magni? Dolorum,
          reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default ServiceBannnar;
