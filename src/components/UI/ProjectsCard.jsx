import React from "react";

const ProjectCard = ({
  title = "Project Title",
  description = "Brief description of the project",
  image = "/",
  tags = ["Vue.js", "Tailwind CSS"],
  liveLink = "/",
  codeLink = "/"
}) => {
  return (
    <article className="max-w-sm mb-9 overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-blue-950">
      {/* Image Section */}
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </figure>

      {/* Content Section */}
      <section className="px-6 py-4">
        <header>
          <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        </header>
        <p className="text-gray-300 text-sm">{description}</p>
      </section>

      {/* Tags Section */}
      <footer className="px-6 pt-4 pb-2 mb-3">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="inline-block dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </footer>

      {/* Action Section */}
      <div className="px-6 pb-4 flex justify-between items-center">
      {codeLink && (
          <a href={codeLink} target="_blank" className="bg-primary rounded-lg p-2 hover:underline cursor-pointer text-sm">
            View Code
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" className="bg-primary rounded-lg p-2 hover:underline cursor-pointer text-sm">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
