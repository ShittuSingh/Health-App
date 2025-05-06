import React from "react";

const articles = [
  {
    title: "Building Long-Term Success with a Balanced Diet Meal Plan",
    date: "Friday, April 8, 2022",
    image: "https://www.carehospitals.com/ckfinder/userfiles/images/ketogenic_diet_i_.webp",  
    link: "#",
  },
  {
    title: "How a Diet Meal Plan Can Transform Your Health",
    date: "Tuesday, March 15, 2022",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvCSZo1kSXPgYnr6pNVEetSt2jaEgMaUYew&s",
    link: "#",
  },
  {
    title: "Understanding Macronutrients in Your Diet Meal Plan",
    date: "Monday, February 28, 2022",
    image: "https://i0.wp.com/thelecc.com/wp-content/uploads/2021/04/image-asset.jpeg?fit=800%2C600&ssl=1",
    link: "#",
  },
];

const WeeklyUpdates = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="uppercase text-sm text-green-200 mb-2">
          Tips and Articles
        </h4>
        <h2 className="text-3xl font-semibold mb-12">Nutriwell Weekly Updates</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-md mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{article.date}</p>
                <a
                  href={article.link}
                  className="text-green-700 font-medium text-sm hover:underline"
                >
                  Continue Reading
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="text-white underline text-sm font-semibold hover:text-green-200"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeeklyUpdates;
