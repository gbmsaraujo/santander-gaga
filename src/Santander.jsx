import { motion } from "framer-motion";
import { useState } from "react";

export default function SantanderVip() {
    const eras = [
        {
            name: "THE FAME",
            background: "bg-gradient-to-r from-blue-900 via-black to-blue-500",
            textColor: "text-white",
            buttonColor: "bg-blue-700 border-2 border-white",
            extraStyles: "shadow-[0_0_20px_rgba(255,255,255,0.8)] contrast-150",
        },
        {
            name: "BORN THIS WAY",
            background: "bg-black",
            textColor: "text-white",
            buttonColor: "bg-gray-800 border-2 border-white",
            extraStyles:
                "shadow-[0_0_20px_rgba(255,255,255,0.8)] grayscale contrast-200",
        },
        {
            name: "ARTPOP",
            background:
                "bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500",
            textColor: "text-white",
            buttonColor: "bg-blue-600",
        },
        {
            name: "JOANNE",
            background: "bg-gradient-to-r from-pink-200 via-white to-blue-300",
            textColor: "text-black",
            buttonColor: "bg-pink-400",
        },{
            name: "CHROMATICA",
            background: "bg-gradient-to-r from-black via-pink-700 to-gray-900",
            textColor: "text-pink-300",
            buttonColor: "bg-pink-600",
        },
        
    ];

    const [currentEra, setCurrentEra] = useState(0);
    const switchEra = () => {
        setCurrentEra((prevEra) => (prevEra + 1) % eras.length);
    };

    return (
        <div
            className={`flex items-center justify-center min-h-screen transition-all duration-500 ${
                eras[currentEra].background
            } p-10 ${eras[currentEra].extraStyles || ""}`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="p-12 text-center backdrop-blur-md rounded-3xl shadow-2xl border border-gray-500 relative"
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className={`text-6xl font-extrabold uppercase tracking-widest drop-shadow-lg ${eras[currentEra].textColor}`}
                >
                    S∀NTANDER,
                </motion.h1>
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    className={`text-7xl font-extrabold mt-4 drop-shadow-glow tracking-wide uppercase border-4 px-4 py-2 inline-block ${eras[currentEra].textColor}`}
                >
                    Me dê um VIP!
                </motion.h2>
                <motion.button
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className={`mt-8 px-8 py-4 text-xl font-bold rounded-full shadow-xl hover:scale-110 transition-all uppercase tracking-widest ${eras[currentEra].buttonColor} text-white`}
                    onClick={switchEra}
                >
                    🎤 Born to be VIP! ({eras[currentEra].name}) 🎤
                </motion.button>
            </motion.div>
        </div>
    );
}
