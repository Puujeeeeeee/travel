"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Youtube = () => {
    const [featuredVideo, setFeaturedVideo] = useState(0);

    const videos = [
        { id: "video1", title: "Монголын үзэсгэлэнт газрууд", thumbnail: "/thumbnail1.jpg" },
        { id: "video2", title: "Аяллын зөвлөгөө: Хэрхэн цүнх бэлтгэх вэ?", thumbnail: "/thumbnail2.jpg" },
        { id: "video3", title: "Говь цөлөөр аялах нь", thumbnail: "/thumbnail3.jpg" },
        { id: "video4", title: "Хангайн нуруугаар явган аялал", thumbnail: "/thumbnail4.jpg" },
        { id: "video5", title: "Аяллын хоол хийх арга", thumbnail: "/thumbnail5.jpg" },
        // Бусад видеонуудыг энд нэмнэ үү
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFeaturedVideo((prev) => (prev + 1) % videos.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 p-8">
            <style jsx global>{`
                .gradient-bg {
                    background-image: linear-gradient(to bottom right, #3b82f6, #10b981);
                }
            `}</style>

            <motion.h1 
                className="text-5xl font-bold text-white text-center mb-12"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Аяллын YouTube Видеонууд
            </motion.h1>

            <motion.div 
                className="gradient-bg rounded-lg shadow-xl p-6 mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold mb-4 text-white">Онцлох видео</h2>
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={featuredVideo}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="aspect-w-16 aspect-h-9"
                    >
                        <iframe 
                            width="100%" 
                            height="400" 
                            src={`https://www.youtube.com/embed/${videos[featuredVideo].id}`} 
                            title={videos[featuredVideo].title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            <motion.div 
                className="gradient-bg rounded-lg shadow-xl p-6 mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">Бүх видеонууд</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {videos.map((video, index) => (
                        <motion.div 
                            key={video.id}
                            className="bg-white bg-opacity-20 rounded-lg p-2 cursor-pointer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setFeaturedVideo(index)}
                        >
                            <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                            <h3 className="font-semibold text-sm text-white text-center">{video.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Youtube;
