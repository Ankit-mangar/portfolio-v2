import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

const BlogCard: React.FC<{ index: number; post: MediumPost }> = ({
  index,
  post,
}) => {
  const cleanDescription = post.description
    .replace(/<[^>]*>/g, '')
    .substring(0, 180) + '...';
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary xs:w-[360px] w-full rounded-2xl overflow-hidden border border-[#151030] hover:border-[#915eff] transition-all duration-300 cursor-pointer group"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => window.open(post.link, '_blank')}
    >
      <div className="relative h-[200px] bg-gradient-to-br from-[#915eff] to-[#151030] p-6 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #915eff 25%, transparent 25%, transparent 75%, #915eff 75%, #915eff)',
            backgroundSize: '20px 20px',
          }}
        />
        <motion.svg 
          className="w-16 h-16 text-white relative z-10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </motion.svg>
      </div>

      <div className="p-6 flex flex-col h-[280px]">
        <motion.div 
          className="flex items-center justify-between mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#915eff] text-xs font-semibold uppercase tracking-wider">
            Medium
          </span>
          <span className="text-secondary text-xs">
            {formatDate(post.pubDate)}
          </span>
        </motion.div>

        <motion.h3 
          className="text-white text-[20px] font-bold mb-3 line-clamp-2 group-hover:text-[#915eff] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {post.title}
        </motion.h3>

        <motion.p 
          className="text-secondary text-[14px] leading-relaxed flex-grow line-clamp-4 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {cleanDescription}
        </motion.p>

        <motion.div 
          className="flex items-center text-[#915eff] text-sm font-semibold mt-auto group-hover:gap-2 transition-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Read Article
          <motion.svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const mediumUsername = '@ankit.thapa10121998';
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {loading ? (
          <div className="w-full flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#915eff]"></div>
          </div>
        ) : posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogCard key={index} index={index} post={post} />
          ))
        ) : (
          <div className="w-full text-center py-20">
            <p className="text-secondary text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "blog");
