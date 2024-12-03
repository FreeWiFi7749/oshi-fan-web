import { Github, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">oshi.fan</h3>
          <p className="text-base text-gray-300">
            ファン文化とお気に入りを祝福するMisskeyサーバー
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Navigation */}
          <div className="flex justify-center gap-8 mb-8">
            <Link to="/" className="text-lg font-medium text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/team" className="text-lg font-medium text-gray-200 hover:text-white transition-colors">
              Team
            </Link>
            <Link to="/news" className="text-lg font-medium text-gray-200 hover:text-white transition-colors">
              News
            </Link>
          </div>

          {/* Secondary Navigation */}
          <div className="flex justify-center gap-6 mb-8">
            <Link to="/moderators" className="text-base text-gray-300 hover:text-white transition-colors">
              運営について
            </Link>
            <Link to="/privacy" className="text-base text-gray-300 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link to="/faq" className="text-base text-gray-300 hover:text-white transition-colors">
              よくある質問
            </Link>
          </div>

          {/* Tertiary Navigation */}
          <div className="flex justify-center mb-12">
            <Link to="/guidelines" className="text-sm text-gray-400 hover:text-white transition-colors">
              サポーターガイドライン
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/oshi-fan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base text-gray-200 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base text-gray-200 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base text-gray-200 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5 mr-2" />
              X
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} oshi.fan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;