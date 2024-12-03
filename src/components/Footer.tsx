import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">oshi.fan</h3>
            <p className="text-sm text-gray-300">
              ファン文化とお気に入りを祝福するMisskeyサーバー
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-300 hover:text-white">
                  チーム
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ソーシャル</h3>
            <a
              href="https://github.com/oshi-fan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-300 hover:text-white"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
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