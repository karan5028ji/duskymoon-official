'use client';

import { motion } from 'framer-motion';
import releases from '@/data/releases.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const recentReleases = releases.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
        <div className="absolute inset-0 bg-[#121212]" />
        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="text-[#A3A3A3] text-sm font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Latest Release
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#EAEAEA] mb-8"
          >
            SAPNE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
            className="text-[#A3A3A3] text-lg mb-10 max-w-md mx-auto"
          >
            A cinematic journey through dreams and reality
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 }}
            href="https://open.spotify.com/artist/57sDiEfeHnIZX2g7gvPBR2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#EAEAEA] text-[#EAEAEA] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#EAEAEA] hover:text-[#0A0A0A] transition-all duration-300"
          >
            Stream Now
          </motion.a>
        </div>
      </section>

      {/* Recent Releases Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#EAEAEA] mb-12"
          >
            Recent Releases
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {recentReleases.map((release) => (
              <motion.div
                key={release.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden mb-4 bg-[#121212]">
                  <img
                    src={release.coverArt}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase">
                      View Release
                    </span>
                  </div>
                </div>
                <h3 className="text-[#EAEAEA] text-lg font-semibold mb-1">
                  {release.title}
                </h3>
                <p className="text-[#A3A3A3] text-sm">
                  {release.type} &middot; {release.artists.join(', ')}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
