const Brends = () => {
  return (
    <div className="w-[100vw] h-auto flex flex-col items-center justify-center space-x-4 ">
      <div className="flex flex-col">
        <h1 className="font-serif font-bold text-4xl text-shadow-md mt-6">
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
      <div className="flex px-8 w-full h-[100vh]">
        <div className="flex flex-col">
          <h1 className="font-serif font-bold text-4xl text-shadow-md mt-8 mb-5">
            Аялаллын багаж хэрэгслүүд
          </h1>
          <div className="relative">
            <img className="rounded-md" src="trvl.jpg" alt="" />
            <div className="absolute  w-[300px] h-[200px]  bottom-0 left-0 bg-black/50">
              <div className=" text-whitebg-opacity-0 bg-gray-600 rounded-md">
                hello world
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brends;
