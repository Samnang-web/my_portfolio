import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./UI/ProjectsCard";
import { Icon } from "@iconify/react";
import code_1 from "../assets/code-1.jpg";
import code_2 from "../assets/code-2.jpg";
import code_3 from "../assets/code-3.jpg";
import code_4 from "../assets/code-4.jpg";
import code_5 from "../assets/code-5.jpg";
import code_6 from "../assets/code-6.jpg";

const projects = [
  {
    title: "Outfit",
    description: "Outfit is a E-commerce Website",
    image: code_1,
    category: "Frontend",
    tags: ["React JS", "Tailwind CSS", "JavaScript"],
    liveLink: "https://outfit-ashen.vercel.app/",
    codeLink: "https://github.com/Samnang-web/outfit",
  },
  {
    title: "Home Estate",
    description: "A Frontend Site",
    image: code_2,
    category: "FrontEnd",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://home-estate-kappa.vercel.app/",
    codeLink: "https://github.com/Samnang-web/home-estate",
  },
  {
    title: "Book Store",
    description: "",
    image: code_3,
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://book-store-beige-seven.vercel.app/",
    codeLink: "https://github.com/Samnang-web/book-store",
  },
  {
    title: "Responsive Burger Website",
    description: "",
    image: code_4,
    category: "Frontend",
    tags: ["Vue.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://burgerapp-dusky.vercel.app/",
    codeLink: "https://github.com/Samnang-web/burger",
  },
  {
    title: "Responsive Plant Website",
    description: "",
    image: code_5,
    category: "Frontend",
    tags: ["Vue.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://plants-chi.vercel.app/",
    codeLink: "https://github.com/Samnang-web/plants",
  },
  {
    title: "Portfolio Website-1",
    description: "",
    image: code_6,
    category: "Frontend",
    tags: ["Vue.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://portfolio-omega-vert-55.vercel.app/",
    codeLink: "https://github.com/Samnang-web/portfolio",
  },
  {
    title: "Portfolio Website-2",
    description: "",
    image: code_1,
    category: "Frontend",
    tags: ["Vue.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://portfoliowebsite-ivory.vercel.app/",
    codeLink: "https://github.com/Samnang-web/portfolio_2",
  },
  {
    title: "Big Shop",
    description: "Is a Ecommerce website",
    image: code_2,
    category: "Frontend",
    tags: ["React JS", "Tailwind CSS", "JavaScript"],
    liveLink: "https://bigshop-eight.vercel.app/",
    codeLink: "https://github.com/Samnang-web/bigshop",
  },
  {
    title: "Clothes",
    description: "Is a Ecommerce website",
    image: code_3,
    category: "Frontend",
    tags: ["React JS", "Tailwind CSS", "JavaScript"],
    liveLink: "https://clothes-inky.vercel.app/",
    codeLink: "https://github.com/Samnang-web/clothes",
  },
  {
    title: "Noted Application",
    description: "Full-stack ",
    image: code_4,
    category: "Fullstack",
    tags: [
      "Vue JS",
      ".Net core API",
      "Postgresql",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://notes-application-1g64.vercel.app",
    codeLink: "https://github.com/Samnang-web/Notes-Application",
  },
  {
    title: "Blog App with admin Dashboard",
    description: "Full-stack ",
    image: code_2,
    category: "Fullstack",
    tags: [
      "Vue JS",
      ".Net core API",
      "Postgresql",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://blog-fullstack-alpha.vercel.app",
    codeLink: "https://github.com/Samnang-web/Blog-fullstack",
  },
  {
    title: "Inventory System",
    description: "Management System with Dashboard ",
    image: code_2,
    category: "Fullstack",
    tags: [
      "Vue JS",
      ".Net core API",
      "Postgresql",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://inventory-system-ecru-three.vercel.app",
    codeLink: "https://github.com/Samnang-web/Inventory-System",
  },
  {
    title: "TO-DO List",
    description: "With Authentication",
    image: code_2,
    category: "Fullstack",
    tags: [
      "Vue JS",
      ".Net core API",
      "Postgresql",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveLink: "https://to-do-list-72cq.vercel.app",
    codeLink: "https://github.com/Samnang-web/To-do-list",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="project"
      className="max-w-screen-xl relative w-11/12 px-16 pb-20 mx-auto"
    >
      <h5 className="text-primary uppercase text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Projects
      </h5>
      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {["All", "Frontend", "Fullstack"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-blue-950 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Custom Navigation Buttons */}
      <button className="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-left" className="font-bold text-3xl" />
      </button>
      <button className="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
        <Icon icon="line-md:arrow-right" className="font-bold text-3xl" />
      </button>

      {/* Swiper Component */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="max-w-full mt-8"
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index} className="max-w-[300px]">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
