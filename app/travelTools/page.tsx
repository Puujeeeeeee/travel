"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUmbrella, FaFirstAid, FaBatteryFull, FaAppleAlt, FaMap, FaSun, FaCamera, FaLock, FaWater, FaBook } from 'react-icons/fa';

const TravelTools = () => {
  const [currentTool, setCurrentTool] = useState(0);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [featuredStore, setFeaturedStore] = useState(0);

  const tools = [
    {
      name: "Аяллын цүнх",
      description: "Тав тухтай, бат бөх аяллын цүнх",
      image: "/backpack.jpg",
    },
    {
      name: "Гэрэл",
      description: "Хүчтэй, удаан ажилладаг гэрэл",
      image: "/flashlight.jpg",
    },
    {
      name: "Уулын гутал",
      description: "Ус нэвтэрдэггүй, хөнгөн уулын гутал",
      image: "/hiking-boots.jpg",
    },
    {
      name: "Унтлагын уут",
      description: "Дулаан, хөнгөн унтлагын уут",
      image: "/sleeping-bag.jpg",
    },
    {
      name: "Аяны хоолны хэрэгсэл",
      description: "Олон зориулалттай, хөнгөн жинтэй хоолны хэрэгсэл",
      image: "/camping-cookware.jpg",
    },
    {
      name: "Ус шүүгч",
      description: "Зөөврийн ус цэвэршүүлэгч систем",
      image: "/water-filter.jpg",
    },
    {
      name: "Нарны зай",
      description: "Зөөврийн нарны цэнэглэгч",
      image: "/solar-charger.jpg",
    },
    {
      name: "GPS төхөөрөмж",
      description: "Найдвартай, олон функцтэй GPS",
      image: "/gps-device.jpg",
    },
    {
      name: "Анхны тусламжийн иж бүрдэл",
      description: "Иж бүрэн анхны тусламжийн хэрэгсэл",
      image: "/first-aid-kit.jpg",
    },
    {
      name: "Борооны хувцас",
      description: "Ус нэвтэрдэггүй, амьсгалдаг борооны хувцас",
      image: "/rain-gear.jpg",
    },
    {
      name: "Майхан",
      description: "Хөнгөн жинтэй, амархан босгодог майхан",
      image: "/tent.jpg",
    },
    {
      name: "Олон зориулалтын хутга",
      description: "Олон функцтэй аяллын хутга",
      image: "/multi-tool.jpg",
    },
    {
      name: "Толгойн гэрэл",
      description: "Хүчтэй, удаан ажилладаг толгойн гэрэл",
      image: "/headlamp.jpg",
    },
    {
      name: "Дулаан хувцас",
      description: "Чийг шингээдэггүй, дулаан хадгалдаг хувцас",
      image: "/thermal-wear.jpg",
    },
    {
      name: "Аяллын камер",
      description: "Тэсвэртэй, өндөр чанартай зураг авдаг камер",
      image: "/travel-camera.jpg",
    },
  ];

  const stores = [
    {
      name: "Адвэнчер Гиер",
      logo: "/adventure-gear-logo.png",
      website: "https://adventuregear.mn",
      description: "Аяллын чанартай хэрэгсэл, хувцас",
      featuredProduct: {
        name: "Уулын гутал",
        image: "/hiking-boots.jpg",
        price: "199,000₮",
      },
    },
    {
      name: "Аутдор Монголиа",
      logo: "/outdoor-mongolia-logo.png",
      website: "https://mongolianoutdoortravel.com/",
      description: "Кэмпинг, аялал, уулын спортын тоног төхөөрөмж",
      featuredProduct: {
        name: "Аяллын цүнх",
        image: "/backpack.jpg",
        price: "299,000₮",
      },
    },
    {
      name: "Трэвэл Эссэншлс",
      logo: "/travel-essentials-logo.png",
      website: "https://travelessentials.mn",
      description: "Аяллын зайлшгүй шаардлагатай бүх зүйл",
      featuredProduct: {
        name: "Нарны зай",
        image: "/solar-charger.jpg",
        price: "159,000₮",
      },
    },
  ];

  const tips = [
    {
      icon: FaUmbrella,
      text: "Аяллын өмнө цаг агаарын мэдээг сайтар шалгаарай",
    },
    {
      icon: FaFirstAid,
      text: "Хэрэгцээт эм, анхны тусламжийн хэрэгслээ бүү мартаарай",
    },
    {
      icon: FaBatteryFull,
      text: "Цэнэглэгч, нөөц зай зэрэг цахилгаан хэрэгслээ авч яваарай",
    },
    { icon: FaAppleAlt, text: "Ус, хоол хүнс хангалттай авч яваарай" },
    { icon: FaMap, text: "Газрын зураг, GPS төхөөрөмж авч яваарай" },
    {
      icon: FaSun,
      text: "Нарны тос, малгай зэрэг нарнаас хамгаалах хэрэгслүүдийг бүү мартаарай",
    },
    {
      icon: FaCamera,
      text: "Дурсамжаа бичиж авахын тулд камер, гар утас сайн цэнэглээрэй",
    },
    {
      icon: FaLock,
      text: "Үнэт эд зүйлсээ хадгалах найдвартай газар, эсвэл түгжээтэй уут ашиглаарай",
    },
    { icon: FaWater, text: "Ус цэвэршүүлэх хэрэгсэл авч яваарай" },
    {
      icon: FaBook,
      text: "Аялал жуулчлалын гарын авлага, эсвэл онлайн мэдээллийг урьдчилан судлаарай",
    },
  ];

  useEffect(() => {
    const toolInterval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 5000);

    const storeInterval = setInterval(() => {
      setFeaturedStore((prev) => (prev + 1) % stores.length);
    }, 8000);

    return () => {
      clearInterval(toolInterval);
      clearInterval(storeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 p-8">
      <motion.h1 
        className="text-5xl font-bold text-white text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Аяллын Багаж Хэрэгсэл
      </motion.h1>
      
      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6 mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Онцлох багаж</h2>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentTool}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image src={tools[currentTool].image} alt={tools[currentTool].name} width={300} height={300} className="rounded-lg mr-6 shadow-lg" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">{tools[currentTool].name}</h3>
              <p className="text-gray-600 mt-2">{tools[currentTool].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-2 right-2 flex space-x-2">
          {tools.map((_, index) => (
            <motion.div 
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentTool ? 'bg-green-500' : 'bg-gray-300'}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">Онцлох дэлгүүр</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={featuredStore}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
              <Image src={stores[featuredStore].logo} alt={stores[featuredStore].name} width={150} height={150} className="mx-auto md:mx-0" />
              <h3 className="text-2xl font-semibold mt-2 text-blue-600">{stores[featuredStore].name}</h3>
              <p className="text-gray-600 mt-2">{stores[featuredStore].description}</p>
              <a 
                href={stores[featuredStore].website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                Дэлгүүрт зочлох
              </a>
            </div>
            <div className="md:w-1/3 text-center">
              <h4 className="text-xl font-semibold mb-2">Онцлох бүтээгдэхүүн</h4>
              <Image 
                src={stores[featuredStore].featuredProduct.image} 
                alt={stores[featuredStore].featuredProduct.name} 
                width={200} 
                height={200} 
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="mt-2 font-semibold">{stores[featuredStore].featuredProduct.name}</p>
              <p className="text-green-600 font-bold">{stores[featuredStore].featuredProduct.price}</p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <h4 className="text-xl font-semibold mb-2 text-center">Хямдралтай бүтээгдэхүүнүүд</h4>
              <ul className="bg-gray-100 rounded-lg p-4">
                <li className="mb-2">Аяллын гэрэл - <span className="line-through">50,000₮</span> <span className="text-red-500 font-bold">35,000₮</span></li>
                <li className="mb-2">Уулын гутал - <span className="line-through">250,000₮</span> <span className="text-red-500 font-bold">199,000₮</span></li>
                <li>Майхан - <span className="line-through">400,000₮</span> <span className="text-red-500 font-bold">320,000₮</span></li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">Бүх багаж хэрэгсэл</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.name}
              className="bg-gray-100 rounded-lg p-4 cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTool(tool)}
            >
              <Image src={tool.image} alt={tool.name} width={100} height={100} className="rounded-lg mb-2 mx-auto" />
              <h3 className="font-semibold text-center text-blue-600">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.button
        className="bg-yellow-400 text-white px-6 py-3 rounded-full font-bold text-xl mb-12 mx-auto block"
        whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsStoreOpen(true)}
      >
        Бүх дэлгүүрийг харах
      </motion.button>

      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">Аяллын зөвлөгөө</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex items-start space-x-4"
              whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3">
                <tip.icon className="text-white text-xl" />
              </div>
              <p className="text-gray-800">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedTool && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{selectedTool.name}</h3>
              <Image src={selectedTool.image} alt={selectedTool.name} width={200} height={200} className="rounded-lg mb-4 mx-auto" />
              <p className="text-gray-600">{selectedTool.description}</p>
              <button 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedTool(null)}
              >
                Хаах
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isStoreOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-3xl font-semibold mb-6 text-center text-green-600">Бүх дэлгүүр</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stores.map((store, index) => (
                  <motion.div 
                    key={store.name}
                    className="bg-gray-100 rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                  >
                    <Image src={store.logo} alt={store.name} width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-blue-600">{store.name}</h3>
                    <p className="text-gray-600 mb-4">{store.description}</p>
                    <a 
                      href={store.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      Дэлгүүрт зочлох
                    </a>
                  </motion.div>
                ))}
              </div>
              <button 
                className="mt-8 bg-red-500 text-white px-6 py-3 rounded-full font-bold mx-auto block"
                onClick={() => setIsStoreOpen(false)}
              >
                Хаах
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelTools;