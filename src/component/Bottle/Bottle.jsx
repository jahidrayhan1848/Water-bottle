

// eslint-disable-next-line react/prop-types
const Bottle = ({ bottle, handleToCart }) => {
  // eslint-disable-next-line react/prop-types
  const { id, img, name, price, quantity, ratings, ratingsCount, seller } =
    bottle;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl font-medium">Price:: {price} $</p>
        <div className="card-actions">
          <button onClick={()=>handleToCart(bottle)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;