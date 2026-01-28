import { motion } from "framer-motion";
import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

const SpotifyPlaylist = () => {
  const playlistId = config.spotify?.playlistId?.trim();

  if (!playlistId) {
    return null;
  }

  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`;

  return (
    <>
      <Header useMotion={true} {...config.sections.spotify} />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-8 w-full max-w-2xl mx-auto"
      >
        <motion.div
          className="rounded-2xl overflow-hidden border border-[#151030] shadow-lg spotify-card-glow"
          whileHover={{
            y: -8,
            borderColor: "rgba(145, 94, 255, 0.6)",
            boxShadow: "0 20px 40px rgba(145, 94, 255, 0.25)",
            transition: { duration: 0.3 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <iframe
            style={{ borderRadius: 12 }}
            src={embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            className="min-h-[352px] w-full"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(SpotifyPlaylist, "music");
