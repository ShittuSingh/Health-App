import React from "react";
import { Flame } from "lucide-react";
import Header from "../../../components/header"

const HeroSection = () => {
    return (
        <div className="bg-[#fefef5] px-8 py-2 rounded-[2rem]">
            <Header />
            <section className="flex flex-col lg:flex-row items-center justify-between px-32 py-8">

                <div className="max-w-xl space-y-6">

                    <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-full shadow">
                            <Flame className="text-red-500" />
                        </div>
                        <div className="text-sm">
                            <p className="text-gray-600 font-medium">TRACK YOUR CALORIES</p>
                            <p className="text-red-600 font-semibold text-md">
                                Smart & Simple Calorie Counter
                            </p>
                        </div>
                    </div>


                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                        Count Calories <br /> Eat Smarter <br /> Live Healthier
                    </h1>


                    <p className="text-gray-600 text-lg">
                        Stay on top of your nutrition with our accurate calorie counter and meal
                        tracker. Monitor your food, log your workouts, and reach your fitness goals
                        with ease.
                    </p>


                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#ffcc91] px-6 py-2 rounded-full font-semibold hover:bg-[#fbbf77] transition">
                            Start Tracking
                        </button>
                        <button className="border border-red-500 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>


                <div className="relative mt-10 lg:mt-0">
                    <div className="bg-red-500 p-8 rounded-tl-[3rem] rounded-bl-[3rem]">
                        <img
                            src="https://i.pinimg.com/736x/49/8d/bd/498dbd1640c835a5c741135d7400d1f3.jpg"
                            alt="User tracking calories"
                            className="w-[300px] h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                        <div className="text-white mt-4 text-right">
                            <p className="font-bold uppercase">Calorie Mate</p>
                            <p className="text-sm">Smart Nutrition Tracker</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default HeroSection;