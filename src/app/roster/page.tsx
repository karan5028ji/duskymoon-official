'use client';

import { motion } from 'framer-motion';
import artists from '@/data/artists.json';

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

export default function RosterPage() {
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
            Artist Roster
          </h1>
          <p className="text-[#A3A3A3] text-lg max-w-2xl">
            The visionaries shaping the sound of tomorrow. Each artist brings a unique perspective to the DuskyMoon collective.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-[#121212] border border-[#2A2A2A] overflow-hidden hover:border-[#8E8E8E] transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-[#171717]">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-[#EAEAEA] text-xl font-bold">
                    {artist.name}
                  </h2>
                  <span className="text-[#8E8E8E] text-xs font-semibold tracking-wider uppercase">
                    {artist.role}
                  </span>
                </div>
                
                {artist.realName && (
                  <p className="text-[#A3A3A3] text-sm mb-3">
                    {artist.realName}
                  </p>
                )}
                
                <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4">
                  {artist.bio}
                </p>

                <div className="flex gap-4">
                  {artist.socials.spotify && (
                    <a
                      href={artist.socials.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-xs font-semibold tracking-wider uppercase"
                    >
                      Spotify
                    </a>
                  )}
                  {artist.socials.instagram && (
                    <a
                      href={artist.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-xs font-semibold tracking-wider uppercase"
                    >
                      Instagram
                    </a>
                  )}
                  {artist.socials.website && (
                    <a
                      href={artist.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-xs font-semibold tracking-wider uppercase"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
