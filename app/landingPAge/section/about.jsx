import React from 'react';
import { CircleCheck } from 'lucide-react';

export default function NutritionUI() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 relative">
            {/* Floating food images */}
            <div className="absolute top-10 left-10">
                <div className="w-20 h-20 rounded-full bg-yellow-300 opacity-80" />
            </div>
            <div className="absolute top-40 left-40">
                <div className="w-12 h-12 rounded-full bg-red-500 opacity-80" />
            </div>
            <div className="absolute top-20 right-20">
                <div className="w-16 h-16 rounded-full bg-red-400 opacity-80" />
            </div>

            {/* Header Section */}
            <div className="text-center mb-8">
                <div className="text-green-700 font-medium uppercase text-sm mb-2">WHO WE ARE</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Prioritize Nutrition for<br />Optimal Health</h1>

                {/* Service highlights */}
                <div className="flex justify-center space-x-8 mb-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CircleCheck className="text-green-600 w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="font-semibold">Certified</div>
                            <div>Nutrisionists</div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CircleCheck className="text-green-600 w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="font-semibold">Always On</div>
                            <div>Time Service</div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CircleCheck className="text-green-600 w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="font-semibold">24/7 Support</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-8 mb-16">

                <div className="md:w-1/3 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                        <img src="https://framerusercontent.com/images/cqdLQSeNPlfhw2mfhRjLKUEJw.png?scale-down-to=512" alt="" />
                    </div>
                </div>


                <div className="md:w-1/3 text-center flex items-center">
                    <div>
                        <p className="text-gray-700 mb-4">
                            Discover the key to vibrant living with our guide on prioritizing nutrition
                            for optimal health. Explore expert tips and insights to nourish your
                            body and elevate your well-being today!
                        </p>


                       
                    </div>
                </div>

           
                <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-64 h-64 flex items-center justify-center">
                        <img src="https://framerusercontent.com/images/XA8hNOKkWsEGqQxbbCJamXZaDVU.png?scale-down-to=1024" alt="" />

                    </div>
                </div>
            </div>

        
            <div className="border border-green-200 border-dashed rounded-xl p-8">
                <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-3xl font-bold text-green-700 mb-1">99+</div>
                        <div className="text-gray-600 text-sm">Trusted Clients</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700 mb-1">36KG</div>
                        <div className="text-gray-600 text-sm">Protein Delivered</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700 mb-1">578KG</div>
                        <div className="text-gray-600 text-sm">Calories Burned</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-700 mb-1">128+</div>
                        <div className="text-gray-600 text-sm">Order</div>
                    </div>
                </div>
            </div>
        </div>
    );
}