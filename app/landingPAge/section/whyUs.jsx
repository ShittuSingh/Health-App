import React from 'react';

const benefits = [
    {
        title: "100% Natural",
        description:
            "Indulge in the pure goodness of 100% natural vegetables. From farm to table, savor the freshness and vitality of nature's bounty with our wholesome selection. Explore the taste of authenticity in every bite.",
        icon: "🌿",
        bg: "bg-green-50",
    },
    {
        title: "Optimal Weight Loss",
        description:
            "Unlock the secrets to achieving optimal weight loss with our expert guidance. From personalized meal plans to effective strategies, embark on a journey toward a healthier, stronger you.",
        icon: "⚖️",
        bg: "bg-yellow-50",
    },
    {
        title: "Diet Health Service",
        description:
            "Elevate your well-being with our comprehensive diet health service. From personalized meal plans to expert nutritional advice, take charge of your health journey with confidence.",
        icon: "🥗",
        bg: "bg-yellow-100",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

            <div>
                <h4 className="text-green-700 font-semibold uppercase text-sm mb-2">
                    Why Choose Us
                </h4>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
                    Clean and Fresh Food with <br />
                    Great Nutrition
                </h2>

                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex items-start p-5 rounded-xl shadow-sm ${benefit.bg}`}
                        >
                            <div className="text-3xl mr-4">{benefit.icon}</div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex justify-center items-center">
                <img
                    src="https://framerusercontent.com/images/zX8fxibsaRAe6R0dyycBcse2U.png"
                    alt="Healthy Woman Stretching"
                    className="w-full max-w-md object-cover"
                />
            </div>
        </section>
    );
};

export default WhyChooseUs;
