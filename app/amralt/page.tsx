"use client";
import { useState } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import ClearIcon from "@mui/icons-material/Clear";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarIcon from "@mui/icons-material/Star";
import Image from 'next/image';

const AmraltGazar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);

  const accommodations = [
    {
      name: "Shangri-La Ulaanbaatar",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Таван одтой зочид буудал, олон улсын стандартын үйлчилгээ",
      rating: 5,
      price: 500000,
      image: "/shangri-la.jpeg",
    },
    {
      name: "Blue Sky Hotel & Tower",
      location: "Баянзүрх дүүрэг, Улаанбаатар",
      description: "Орчин үеийн архитектур бүхий таван одтой зочид буудал",
      rating: 5,
      price: 450000,
      image: "/blue-sky.jpg",
    },
    {
      name: "Terelj Hotel & Spa",
      location: "Горхи-Тэрэлж үндэсний цэцэрлэгт хүрээлэн",
      description:
        "Байгальтай харилцан зохицсон тансаг зэрэглэлийн амралтын газар",
      rating: 5,
      price: 600000,
      image: "/terelj-hotel.jpeg",
    },
    {
      name: "Best Western Premier Tuushin Hotel",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Хотын төвд байрлах олон улсын сүлжээний зочид буудал",
      rating: 4,
      price: 350000,
      image: "/tuushin-hotel.jpeg",
    },
    {
      name: "Kempinski Hotel Khan Palace",
      location: "Баянзүрх дүүрэг, Улаанбаатар",
      description:
        "Тансаг зэрэглэлийн үйлчилгээ бүхий олон улсын сүлжээний зочид буудал",
      rating: 5,
      price: 550000,
      image: "/kempinski-hotel.jpeg",
    },
    {
      name: "Holiday Inn Ulaanbaatar",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Бизнес аялагчдад зориулсан орчин үеийн зочид буудал",
      rating: 4,
      price: 300000,
      image: "/holiday-inn.jpeg",
    },
    {
      name: "Ramada Ulaanbaatar Citycenter",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Хотын төвд байрлах олон улсын стандартын зочид буудал",
      rating: 4,
      price: 280000,
      image: "/ramada-ulaanbaatar.jpg",
    },
    {
      name: "Novotel Ulaanbaatar",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Орчин үеийн дизайн бүхий олон улсын сүлжээний зочид буудал",
      rating: 4,
      price: 320000,
      image: "/novotel-ulaanbaatar.jpg",
    },
    {
      name: "Bayangol Hotel",
      location: "Баянгол дүүрэг, Улаанбаатар",
      description: "Уламжлалт монгол соёлыг харуулсан зочид буудал",
      rating: 3,
      price: 200000,
      image: "/bayangol-hotel.jpeg",
    },
    {
      name: "Chinggis Khaan Hotel",
      location: "Сүхбаатар дүүрэг, Улаанбаатар",
      description: "Монголын түүх, соёлыг харуулсан зочид буудал",
      rating: 3,
      price: 180000,
      image: "/chinggis-khaan-hotel.jpg",
    },
  ];

  const filteredAccommodations = accommodations.filter((accommodation) => {
    const matchesSearch =
      accommodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accommodation.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "budget" && accommodation.price < 200000) ||
      (priceFilter === "mid" &&
        accommodation.price >= 200000 &&
        accommodation.price < 400000) ||
      (priceFilter === "luxury" && accommodation.price >= 400000);
    const matchesRating = accommodation.rating >= ratingFilter;

    return matchesSearch && matchesPrice && matchesRating;
  });

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
      <div className="w-full h-auto px-8 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Хайх..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-8">
          <div className="w-1/4">
            <h2 className="text-xl font-bold mb-4">Шүүлтүүр</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Үнэ</h3>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="all">Бүгд</option>
                <option value="budget">Хямд (200,000₮ хүртэл)</option>
                <option value="mid">Дунд (200,000₮ - 400,000₮)</option>
                <option value="luxury">Өндөр (400,000₮-с дээш)</option>
              </select>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Үнэлгээ</h3>
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value={0}>Бүгд</option>
                <option value={3}>3+ од</option>
                <option value={4}>4+ од</option>
                <option value={5}>5 од</option>
              </select>
            </div>
          </div>
          <div className="w-3/4">
            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Монголын шилдэг зочид буудал ба амралтын газрууд
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccommodations.map((accommodation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={accommodation.image}
                      alt={accommodation.name}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-600">
                      {accommodation.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {accommodation.location}
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(accommodation.rating)].map((_, i) => (
                        <StarIcon key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-sm mt-2">{accommodation.description}</p>
                    <p className="text-lg font-bold mt-2">
                      {accommodation.price.toLocaleString()}₮
                    </p>
                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                      Дэлгэрэнгүй
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmraltGazar;
