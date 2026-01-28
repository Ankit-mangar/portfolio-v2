import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div 
            className="h-28 w-28 flex items-center justify-center" 
            key={technology.name}
            title={technology.name}
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="h-24 w-24 rounded-full bg-tertiary flex items-center justify-center p-4 shadow-lg hover:shadow-[#915eff]/50 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(145, 94, 255, 0.8)",
                scale: 1.1,
              }}
            >
              <img 
                src={technology.icon} 
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
