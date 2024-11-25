const Brends = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center space-x-4 ">
      <div className="flex flex-col">
        <h1 className="font-serif font-bold text-4xl text-shadow-md">
          Онцлох бараа бүтээгдэхүүнүүд
        </h1>
        <div className="flex mt-8 items-center space-x-4">
          <div className="flex flex-col gap-2  items-center justify-center text-center">
            <img className="rounded-md" src="hos.jpg" alt="" width={430} />
            <h1 className="text-5xl font-serif">Best Sellers</h1>
            <p className="text-gray-600">
              Elevate your journey with our <br /> top-rated timeless travel
              staples.
            </p>
            <button className="px-8 py-2 bg-black text-white hover:bg-white border-2 border-black hover:text-black">
              SHOP NOW
            </button>
          </div>
          <div className="flex flex-col gap-2  items-center justify-center text-center">
            <img className="rounded-md" src="man.webp" alt="" width={430} />
            <h1 className="text-5xl font-serif">Man</h1>
            <p className="text-gray-600">
              Elevate your journey with our <br /> top-rated timeless travel
              staples.
            </p>
            <button className="px-8 py-2 bg-black text-white hover:bg-white border-2 border-black hover:text-black ">
              SHOP NOW
            </button>
          </div>
          <div className="flex  float-right flex-col gap-2  items-center justify-center text-center">
            <img className="rounded-md" src="right.webp" alt="" width={430} />
            <h1 className="text-5xl font-serif">Woman</h1>
            <p className="text-gray-600">
              Elevate your journey with our <br /> top-rated timeless travel
              staples.
            </p>
            <button className="px-8 py-2 bg-black text-white hover:bg-white border-2 border-black hover:text-black">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brends;
