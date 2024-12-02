"use client";
import { useState } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import ClearIcon from "@mui/icons-material/Clear";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

interface Accommodation {
  name: string;
  location: string;
  description: string;
  rating: number;
  price: number;
  image: string;
}

const AmraltGazar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hotels");

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
    <div className="w-[100%] h-full bg-[#e8f5e9]">
      <div className="w-full h-[25vh] bg-[url('/mongolian-pattern.png')] bg-repeat-x bg-contain flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[#2c1810] bg-opacity-20"></div>

        <div className="flex gap-4 mb-4 z-10">
          <button
            onClick={() => setActiveTab("hotels")}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${
              activeTab === "hotels"
                ? "bg-[#d4af37] text-white"
                : "bg-white text-[#2c1810] border-2 border-[#d4af37]"
            }`}
          >
            Зочид буудал
          </button>
          <button
            onClick={() => setActiveTab("resorts")}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${
              activeTab === "resorts"
                ? "bg-[#d4af37] text-white"
                : "bg-white text-[#2c1810] border-2 border-[#d4af37]"
            }`}
          >
            Амралтын газар
          </button>
        </div>

        <div className="flex items-center z-10 bg-white rounded-full px-6 py-3 border-2 border-[#d4af37] w-[600px]">
          <HotelIcon className="text-[#d4af37] mr-3" />
          <input
            type="text"
            placeholder={
              activeTab === "hotels"
                ? "Буудал, байршил хайх..."
                : "Амралтын газар, байршил хайх..."
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-[#2c1810]"
          />
          <button className="ml-4 px-6 py-2 rounded-full font-bold text-white bg-[#d4af37] hover:bg-[#b38f28]">
            Хайх
          </button>
        </div>
      </div>
      <div className="w-full h-auto px-8 py-8">
        <div className="mb-8"></div>
        <div className="flex gap-8">
          <div className="w-1/4 bg-white p-6 rounded-lg border-2 border-[#d4af37]">
            <h2 className="text-xl font-bold mb-4 text-[#2c1810] border-b-2 border-[#d4af37] pb-2">
              Шүүлтүүр
            </h2>
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
              <h3 className="font-semibold mb-2" htmlFor="ratingFilter">Үнэлгэээ</h3>
              <select
                id="ratingFilter"
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
            <h2 className="text-2xl font-bold mb-6 text-[#2c1810] border-b-2 border-[#d4af37] pb-2">
              {activeTab === "hotels"
                ? "Монголын Шилдэг Б��удлууд"
                : "Монголын Шилдэг Амралтын Газрууд"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccommodations.map((accommodation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border-2 border-[#d4af37] overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={accommodation.image}
                      alt={accommodation.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-[#2c1810]">
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
                    <button
                      onClick={() => {
                        setSelectedAccommodation(accommodation);
                        setIsPopupOpen(true);
                      }}
                      className="mt-4 w-full bg-[#2E7D32] text-white px-4 py-2 rounded-md hover:bg-[#1B5E20] transition-colors"
                    >
                      Дэлгэрэнгүй
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && selectedAccommodation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute p-2 top-0 right-0 text-gray-500 hover:text-gray-700 "
            >
              <ClearIcon />
            </button>

            <div className="relative w-full h-64 mb-6">
              <Image
                src={selectedAccommodation.image}
                alt={selectedAccommodation.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#2c1810] mb-2">
              {selectedAccommodation.name}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(selectedAccommodation.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">
                ({selectedAccommodation.rating} од)
              </span>
            </div>

            <p className="flex items-center text-gray-600 mb-2">
              <FiberManualRecordIcon
                className="text-[#2E7D32] mr-2"
                style={{ fontSize: "12px" }}
              />
              {selectedAccommodation.location}
            </p>

            <p className="text-gray-700 mb-4">
              {selectedAccommodation.description}
            </p>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-2xl font-bold text-[#2E7D32]">
                {selectedAccommodation.price.toLocaleString()}₮
                <span className="text-sm text-gray-600 font-normal">
                  {" "}
                  / шөнө
                </span>
              </p>
            </div>

            <button className="mt-6 w-full bg-[#2E7D32] text-white px-6 py-3 rounded-lg hover:bg-[#1B5E20] transition-colors">
              Захиалах
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmraltGazar;
