import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container bg-gray-200  z-30 py-5 items-center ">
      <Link href="/">
        <div className="flex text-xl font-medium items-center justify-center">
          <p className="text-green-400">Wel</p>
          <p className="text-gray-400">come</p>
        </div>
      </Link>

      <div className="hidden h-full gap-12  lg:flex">
        <Link href="/">
          <p className="text-black font-md hover:text-gray-600 hover:underline">
            Home
          </p>
        </Link>
        <Link href="/service">
          <p className="text-black font-md hover:text-gray-600 hover:underline">
            Монголын гайхамшигууд
          </p>
        </Link>
        <Link href="/product">
          <p className="text-black font-md hover:text-gray-600 hover:underline">
            Аялах газрууд
          </p>
        </Link>{" "}
        <Link href="/contactUs">
          <p className="text-black font-md hover:text-gray-600 hover:underline">
            Аялаллын багаж хэрэгсэлүүд
          </p>
        </Link>
      </div>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
