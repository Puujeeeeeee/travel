import HotelIcon from "@mui/icons-material/Hotel";
import ClearIcon from "@mui/icons-material/Clear";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const AmraltGazar = () => {
  return (
    <div className="w-[100%] h-full bg-gray-100">
      <div className="w-full h-[20vh] bg-green-600 flex items-center justify-center">
        <div className="w-[350px] h-[65px] border-4 rounded-xl border-yellow-500 bg-gray-100 flex items-center  justify-around space-x-4  text-black ">
          <div className="flex gap-2">
            <HotelIcon />
            <p>Ulaanbaatar</p>
          </div>
          <ClearIcon className="text-md" />
        </div>
        <div className="w-[350px] h-[65px] border-4 rounded-xl border-yellow-500 bg-gray-100 flex items-center  justify-around space-x-4  text-black ">
          <div className="flex gap-2">
            <DateRangeIcon />
            <p>Check-in date</p>-<p>Check-out date</p>
          </div>
        </div>
        <div className="w-[350px] h-[65px] border-4 rounded-xl border-yellow-500 bg-gray-100 flex items-center  justify-around space-x-4  text-black ">
          <div className="flex gap-2 items-center">
            <PersonIcon />
            <p>2 Adult</p>
            <FiberManualRecordIcon className="text-sm" />
            <p>0 children</p>
            <FiberManualRecordIcon className="text-sm" />
            <p>1 room</p>
          </div>
        </div>
        <button className="h-[65px] text-center border-4 border-yellow-500 px-8 rounded-xl font-bold text-white text-xl hover:bg-white hover:text-green-500">
          Search
        </button>
      </div>
      <div className="w-full h-auto px-[132px] py-[64px]">
        <div className="w-full h-[100vh] bg-gray-100 flex gap-8">
          <div className="w-[25%] h-full border-2 rounded-xl items-center ">
            <h1 className="border-b-2 pb-4 p-2 font-bold text-lg text-black">
              Filter by
            </h1>
            <div className="p-2 flex  gap-2 text-black justify-between items-center">
              <div className="flex gap-2">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text text-black">Guest houses</span>
              </div>

              <p className="text-sm">35</p>
            </div>
          </div>
          <div className="w-[75%] h-[300px] border-2 rounded-xl p-6 flex gap-4">
            <img
              src="220730153.webp"
              alt=""
              width="250px"
              className="rounded-xl"
            />
            <div className="flex flex-col ">
              <h1 className="text-green-500 font-bold text-xl tracking-wide">
                Ramada Ulaanbaatar City Center
              </h1>
              <div className="flex text-[12px] text-green-600 underline font-bold gap-4 cursor-pointer">
                <p>Bayngol, Ulaanbaatar</p>
                <p>Show on map</p>
              </div>
              <p className="text-[12px]">
                Boasting a spa and wellness centre, fitness centre and gourmet
                cuisine across 2 stylish restaurant and bar, the 4-star Ramada
                Ulaanbaatar City Center is located in the city centre of
                Ulaanbaatar.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex w-[120px] h-[50px] items-center justify-center text-white rounded-xl bg-green-600 cursor-pointer ">
                Show Prices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmraltGazar;
