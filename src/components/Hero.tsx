"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
const words = `Hello! My name is Abhises Poudyal. I am fullstack developer
`;
const Hero = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Abhises Poudyal",
      designation: "Fullstack developer",
      src: "/assets/profileimage.jpg",
    },
    {
      quote:
        "Passionate React.js developer with 4 years of experience, mastering Context API, Redux, Bootstrap, Material-UI, Tailwind CSS, Shadcn, and Aternity. Crafting seamless user interfaces and scalable web solutions.",
      name: "React Js/Next Js",
      designation: "4 years experience in react 2 month experince in next ",
      src: "/assets/react.jpg",
    },
    {
      quote:
        "Experienced Express.js developer with 2 years of expertise in building robust backend APIs, handling authentication, middleware, and database integration for scalable and efficient web applications.",
      name: "Node/Express",
      designation: "2 year experience in express",
      src: "/assets/express.jpg",
    },
    {
      quote:
        "Experienced Laravel developer with 1 years of expertise in building dynamic web applications, handling RESTful APIs, database migrations, and crafting efficient backend solutions with clean and scalable code.",
      name: "Php/Laravel",
      designation: "1 year experince in laravel",
      src: "/assets/laravel.jpg",
    },
    {
      quote:
        "Experienced Django developer with 1 years of expertise in building scalable web applications, RESTful APIs, and efficient backend solutions with robust security and clean architecture.",
      name: "Python/Django/FastApi",
      designation: "1 year experince in Django and can work in fastapi too",
      src: "/assets/django.jpg",
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="mt-20 mx-4 flex items-center justify-center max-w-lg">
        <TextGenerateEffect duration={2} filter={true} words={words} />
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Hero;
