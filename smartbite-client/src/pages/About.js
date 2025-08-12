/*
      "See what users love about SmartBite and how it helped them stay on track with nutrition.",
  
      "Real people. Real transformations. Discover motivational health journeys from our users.",
  
      "Easy, science-backed wellness tips to help you build lasting healthy habits.",
  
      "Busting popular diet myths with facts and expert insights you can trust.",

        SmartBite empowers you to make smarter dietary choices through
        personalized meal planning, AI guidance, and nutritional awareness.
        Here's how we inspire and support your journey.

        SmartBite empowers you to make smarter dietary choices through
        personalized meal planning, AI guidance, and nutritional awareness.
        Explore the categories below to learn more and get inspired!
      
*/

/*
import React from "react";
import { Link } from "react-router-dom";
import reviewImg from "../assets/reviews.jpg";
import storyImg from "../assets/stories.jpg";
import tipsImg from "../assets/tips.jpg";
import mythImg from "../assets/myths.jpg";

const aboutCards = [
  {
    image: reviewImg,
    title: "Customer Reviews",
    link: "/reviews",
  },
  {
    image: storyImg,
    title: "Inspiring Stories",
    link: "/stories",
  },
  {
    image: tipsImg,
    title: "Healthy Lifestyle Tips",
    link: "/tips",
  },
  {
    image: mythImg,
    title: "Common Nutrition Myths",
    link: "/myths",
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        About SmartBite
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        SmartBite empowers you to make smarter dietary choices through
        personalized meal planning, AI guidance, and nutritional awareness.
        Explore our core categories:
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {aboutCards.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="group relative w-72 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
          >
            {}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[180px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

           
            <div className="absolute bottom-0 w-full p-4 text-center">
              <h3 className="text-lg font-semibold text-white drop-shadow-lg z-10">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

*/
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import reviewsImg from "../assets/reviews.jpg";
import storiesImg from "../assets/stories.jpg";
import tipsImg from "../assets/tips.jpg";
import mythsImg from "../assets/myths.jpg";

const thumbnails = [
  {
    title: "Customer Reviews",
    image: reviewsImg,
    link: "/reviews",
  },
  {
    title: "Inspiring Stories",
    image: storiesImg,
    link: "/stories",
  },
  {
    title: "Healthy Tips",
    image: tipsImg,
    link: "/tips",
  },
  {
    title: "Nutrition Myths",
    image: mythsImg,
    link: "/myths",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        Learn, Get Inspired, and Stay Healthy with SmartBite
      </h1>
      <div className="thumbnail-grid">
        {thumbnails.map((item, index) => (
          <Link to={item.link} key={index} className="thumbnail-card">
            <div className="thumbnail-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="thumbnail-image"
              />
              <div className="overlay" />
            </div>
            <h3 className="thumbnail-title">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
