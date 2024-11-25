import Button from "@mui/material/Button";
import Link from "next/link";
const Product = () => {
  return (
    <div className="w-[100vw] h-full flex flex-col items-center justify-center ">
      <div className="relative">
        <img className="w-full h-[100vh]" src="travel.avif" alt="" />
        <div className="absolute w-full top-[70%] flex text-center flex-col items-center justify-center">
          <p className="text-white text-xl font-semibold">
            Эв нэгдлийг бий болгосноор та цаг хугацааны сорилтыг даван туулж
            чадна.
            <br /> Энэ бол багийн үндэс суурь юм.
          </p>
          {/* <Button className="bg-green-500 top-4" variant="contained">
            Дэлгүүр хэсэх үү?
          </Button> */}
        </div>
      </div>
      <div className="w-[100vw] h-[50vh] flex mt-5 bg-[#a3b18a]">
        <div className="w-[50%] h-full ">
          <img className="w-full h-full" src="girl2.jpeg" alt="" />
        </div>
        <div className="w-[50%] h-full text-white flex items-center justify-center text-4xl font-extrabold font-serif">
          МОНГОЛЫН ХАМГИЙН ТОМ
        </div>
      </div>
      <div className="w-[100vw] h-[50vh] flex mt-5 bg-[#a3b18a]">
        <div className="w-[50%] h-full text-white flex items-center justify-center text-4xl font-extrabold font-serif">
          ХАМГИЙН ӨРГӨН СОНГОЛТТОЙ
        </div>

        <img className="w-[50%] h-full " src="girl2.jpg" alt="" />
      </div>
      <div className="mt-5 w-[100vw] h-[80vh] relative ">
        <img src="bag.jpg" alt="" />
        <div className="absolute top-10 left-10 ">
          <p className="text-3xl italic font-extrabold  -tracking-tighter">
            Та өөрт тохирох аялалын <br />
            хэрэгслээ хайж байна уу?{" "}
          </p>
          <p className="font-bold text-xl mt-6">
            Welcome сайтаар зочилж өөрийн аяллалын <br /> төгс хамтрагчаа
            олцгооё.
          </p>
          <Link href={"/shop"}>
            <button className="px-8 py-2 bg-white mt-4 font-bold tracking-widest hover:bg-black hover:text-white trasnation-all">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
