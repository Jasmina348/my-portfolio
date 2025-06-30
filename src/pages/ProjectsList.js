import { useContext, useState, useEffect } from "react";
import ProjectSingle from "../components/project/project";
import { ProjectsContext } from "../context/projectsContext";
import { motion } from "framer-motion";

// Sample fallback data in case context isn't available
const sampleProjects = [
  // You can add some sample projects here if needed
];

const ProjectsList = () => {
  // Use default values to prevent errors if context is undefined
  const contextData = useContext(ProjectsContext) || {};
  const { 
    projects = sampleProjects,
    searchProject = "", 
    setSearchProject = () => {},
    searchProjectsByTitle = [],
    selectProject = "",
    setSelectProject = () => {},
    selectProjectsByCategory = []
  } = contextData;
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [localProjects, setLocalProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Initialize local projects state
  useEffect(() => {
    if (projects && projects.length > 0) {
      setLocalProjects(projects);
      setFilteredProjects(projects);
    }
  }, [projects]);
  
  // Get all project categories
  const categories = localProjects.length > 0 
    ? [...new Set(localProjects.map(item => item.category))]
    : [];
  
  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (typeof setSearchProject === 'function') {
      setSearchProject(value);
    }
    
    // Local filtering fallback
    if (value) {
      const filtered = localProjects.filter(project => 
        project.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(localProjects);
    }
  };
  
  // Handle category selection
  const handleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    
    if (typeof setSelectProject === 'function') {
      setSelectProject(value);
    }
    
    // Local filtering fallback
    if (value) {
      const filtered = localProjects.filter(project => 
        project.category === value
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(localProjects);
    }
  };
  
  // Determine which projects to display with fallback logic
  const projectsToDisplay = selectProject && selectProjectsByCategory.length > 0
    ? selectProjectsByCategory
    : searchProject && searchProjectsByTitle.length > 0
    ? searchProjectsByTitle
    : filteredProjects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.7, delay: 0.15 }}
      className="container mx-auto"
    >
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects Portfolio
          </p>
        </div>

        <div className="mt-10 sm:mt-16">
          <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
            Search projects by title or filter by category
          </h3>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-xl mx-auto px-4 sm:px-0">
            {/* Search input */}
            <div className="w-full">
              <input
                className="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark rounded-lg text-sm font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="name"
                name="name"
                type="search"
                placeholder="Search projects"
                aria-label="Search Projects"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            {/* Category select */}
            <div className="w-full">
              <select
                className="w-full px-4 py-3 border border-gray-300 dark:border-primary-dark rounded-lg text-sm font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategory}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:gap-10">
          {projectsToDisplay && projectsToDisplay.length > 0 ? (
            projectsToDisplay.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
              />
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10">
              <p className="font-general-medium text-xl text-ternary-dark dark:text-ternary-light">
                No projects found matching your criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsList;
