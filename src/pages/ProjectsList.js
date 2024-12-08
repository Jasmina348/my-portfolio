import { useContext } from "react";
import ProjectSingle from "../components/project/project";
import { projectsData } from "../data/projectsData";

const ProjectsList = () => {
  let data = projectsData;
  return (
    <div className="container mx-auto">
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>

        <div className="mt-10 sm:mt-16">
          <h3
            className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
          >
            Search projects by title or filter by category
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {data ? (
            data.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsList;
