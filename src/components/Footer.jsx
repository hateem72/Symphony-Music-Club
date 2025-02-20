
import { FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { name: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/p/C-fBe1JPMaK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { name: 'youtube', icon: <FaYoutube />, url: 'https://www.youtube.com/@Allenhouse505' },
    { name: 'website', icon: <FaGlobe />, url: 'https://allenhouse.ac.in' }
];
    return (
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient text-center">
        <div className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
        {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-purple-400 glow-pulse text-2xl sm:text-3xl transform hover:scale-125 transition-transform"
                    >
                        {social.icon}
                    </a>
                ))}
        </div>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Developed By @ Hateem Ansari | Allenhouse Institute Of Technology , Rooma Kanpur</p>
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent neon-border rounded-full text-lg sm:text-xl glow-pulse hover:scale-110 transition-transform"
        
        onClick={() => window.open('https://www.instagram.com/p/C-fBe1JPMaK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', '_blank')}>
          Join the Symphony
        </button>
      </footer>
    );
  }
  
  export default Footer;