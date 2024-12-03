import { Github, Youtube, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">oshi.fan</h3>
              <p className="text-sm text-gray-300">
                ファン文化とお気に入りを祝福するMisskeyサーバー
              </p>
            </div>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-white">
                ホーム
              </Link>
              <Link to="/team" className="block text-sm text-gray-300 hover:text-white">
                チーム
              </Link>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">
                プライバシーポリシー
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white">
                利用規約
              </a>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">oshi.fan 公式</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/oshi-fan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  X
                </a>
              </div>
            </div>
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