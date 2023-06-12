import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img className="w-[120px] image" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
