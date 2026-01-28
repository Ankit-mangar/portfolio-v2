import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  sourceCodeLink,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full h-full"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#915eff"
        glareMaxOpacity={0.3}
        className="h-full"
      >
        <div className="bg-tertiary rounded-2xl p-8 border border-[#151030] hover:border-[#915eff] transition-all duration-300 h-full flex flex-col min-h-[320px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915eff] hover:text-white transition-colors flex-shrink-0 ml-4"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </div>
          
          <div className="flex-grow">
            <p className="text-secondary text-[14px] leading-relaxed">{description}</p>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag.name} 
                className={`text-[12px] ${tag.color} px-3 py-1 rounded-full bg-[#151030]`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
