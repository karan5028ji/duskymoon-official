'use client';

import { motion } from 'framer-motion';
import releases from '@/data/releases.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ReleasesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#EAEAEA] mb-4">
            Releases
          </h1>
          <p className="text-[#A3A3A3] text-lg max-w-2xl">
            The sound of DuskyMoon. Every release is a chapter in our evolving story.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {releases.map((release) => (
            <motion.div
              key={release.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-[#121212] border border-[#2A2A2A] overflow-hidden hover:border-[#8E8E8E] transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-[#171717]">
                <img
                  src={release.coverArt}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3">
                    {release.links.spotify && (
                      <a
                        href={release.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#EAEAEA] text-[#0A0A0A] px-4 py-2 text-xs font-semibold tracking-wider uppercase hover:bg-[#A3A3A3] transition-colors"
                      >
                        Spotify
                      </a>
                    )}
                    {release.links.appleMusic && (
                      <a
                        href={release.links.appleMusic}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#EAEAEA] text-[#EAEAEA] px-4 py-2 text-xs font-semibold tracking-wider uppercase hover:bg-[#EAEAEA] hover:text-[#0A0A0A] transition-all"
                      >
                        Apple Music
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-[#EAEAEA] text-xl font-bold">
                    {release.title}
                  </h2>
                  <span className="text-[#8E8E8E] text-xs font-semibold tracking-wider uppercase">
                    {release.type}
                  </span>
                </div>
                
                <p className="text-[#A3A3A3] text-sm mb-1">
                  {release.artists.join(' & ')}
                </p>
                
                <p className="text-[#8E8E8E] text-xs">
                  {new Date(release.releaseDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
