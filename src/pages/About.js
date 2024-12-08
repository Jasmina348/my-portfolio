import profileImage from "../images/profile.jpg";
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";

const About = () => {
  useCountUp({ ref: "experienceCounter", end: 12, duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 77, duration: 2 });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
          

          <div className="font-general-regular w-full sm:w-3/4 text-left">
            Highly dedicated professional with hands-on experience delivering
            exceptional software development services to clients. Application
            Development: Excel at strategically creating and testing
            user-friendly applications while aiding clients in managing tasks
            and data effortlessly. Web Designing: Adept at applying technical
            expertise and creativity to build and design functional websites.
            Project Management: Proficient in defining execution strategies for
            successful resource and time allocation to deliver project goals
            within deadlines. Key Strengths: Demonstrated ability to produce
            high-quality deliverables that meet or exceed timeline and budgetary
            targets. Able to build, train, and manage high-performing teams.
          </div>
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img src={profileImage} className="rounded-lg w-96" alt="" />
          </div>
        </div>
      </motion.div>
      <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
          <div className="mb-20 sm:mb-0">
            <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
              <span id="experienceCounter" /> 
            </h2>
            <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
              Years of experience
            </span>
          </div>

          <div className="mb-20 sm:mb-0">
            <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
              <span id="feedbackCounter" /> %
            </h2>
            <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
              Positive feedback
            </span>
          </div>

          <div className="mb-20 sm:mb-0">
            <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
              <span id="projectsCounter" /> %
            </h2>
            <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
              Projects completed
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
