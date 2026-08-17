import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demo Drop",
  description: "Submit your music to DuskyMoon Productions. We're always looking for the next sound.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#EAEAEA] mb-4">
            Demo Drop
          </h1>
          <p className="text-[#A3A3A3] text-lg max-w-2xl">
            Got something that needs to be heard? Send us your best work. We review every submission.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#121212] border border-[#2A2A2A] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#8E8E8E] transition-colors"
                placeholder="Artist / Producer name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#121212] border border-[#2A2A2A] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#8E8E8E] transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="genre" className="block text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-3">
              Genre / Style
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="w-full bg-[#121212] border border-[#2A2A2A] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#8E8E8E] transition-colors"
              placeholder="Hip-Hop, Electronic, Experimental..."
            />
          </div>

          <div>
            <label htmlFor="links" className="block text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-3">
              Music Links
            </label>
            <input
              type="url"
              id="links"
              name="links"
              className="w-full bg-[#121212] border border-[#2A2A2A] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#8E8E8E] transition-colors"
              placeholder="SoundCloud, Dropbox, Google Drive..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-[#121212] border border-[#2A2A2A] text-[#EAEAEA] px-4 py-3 focus:outline-none focus:border-[#8E8E8E] transition-colors resize-none"
              placeholder="Tell us about yourself and your music..."
            />
          </div>

          <button
            type="submit"
            className="w-full border border-[#EAEAEA] text-[#EAEAEA] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#EAEAEA] hover:text-[#0A0A0A] transition-all duration-300"
          >
            Submit Demo
          </button>

          <p className="text-[#8E8E8E] text-xs text-center">
            We typically respond within 2-4 weeks. No unsolicited attachments via email.
          </p>
        </form>
      </div>
    </div>
  );
}
