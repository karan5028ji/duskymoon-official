import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#EAEAEA] text-lg font-bold tracking-widest uppercase mb-4">
              DuskyMoon
            </h3>
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              Independent record label. Cinematic minimalism. Forward-thinking music.
            </p>
          </div>
          <div>
            <h4 className="text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/roster" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  Artist Roster
                </Link>
              </li>
              <li>
                <Link href="/releases" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  Demo Drop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EAEAEA] text-sm font-semibold tracking-wider uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://open.spotify.com/artist/57sDiEfeHnIZX2g7gvPBR2" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/duskymoonproductions" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DUSKYMOON_PRODUCTIONS" target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors text-sm">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-xs">
            &copy; {new Date().getFullYear()} DuskyMoon Productions. All rights reserved.
          </p>
          <p>Founded by <a href="https://kxrn.is-a.dev" rel="dofollow" target="_blank" className="text-[#A3A3A3] hover:text-[#EAEAEA] transition-colors">Kxrn</a></p>
        </div>
      </div>
    </footer>
  );
}
