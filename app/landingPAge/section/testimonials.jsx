import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      title: "Expert Guidance",
      content: "The meal plan program provided expert guidance every step of the way. From personalized meal recommendations to responsive support, it's been instrumental in helping me achieve my health goals.",
      author: "David Thompson",
      rating: 5,
    },
    {
      id: 2,
      title: "Thriving Success",
      content: "I can't thank the program's menu enough for helping me thrive. It's not just about losing weight; it's about feeling confident, vibrant, and empowered in my own skin. Truly life-changing!",
      author: "Emily Rodriguez",
      rating: 5,
    },
    {
      id: 3,
      title: "Transformative Journey",
      content: "Thanks to the diet plan program menu, I've experienced life-changing results. From shedding excess weight to feeling more energized, it's been a game-changer for my overall well-being.",
      author: "Mark Johnson",
      rating: 5,
    },
    {
      id: 4,
      title: "Nutritional Excellence",
      content: "This program's menu is a testament to nutritional excellence. With delicious, healthy meals, I've never felt better. It helped me adopt a sustainable approach to eating for long-term health.",
      author: "Sarah Patel",
      rating: 5,
    }
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
       <div className="text-center mb-16">
        <div className="text-green-700 font-medium uppercase text-sm mb-3">TESTIMONIAL</div>
        <h2 className="text-4xl font-bold text-gray-800">Our Client Say</h2>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border-t pt-6 px-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{testimonial.title}</h3>
            <p className="text-gray-600 mb-8">{testimonial.content}</p>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                 <img 
                  src={`https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">{testimonial.author}</div>
              </div>
              <div className="flex items-center">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}