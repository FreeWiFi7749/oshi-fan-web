import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-oshi-purple to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative px-4 py-16 mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-oshi-accent to-purple-600">
          oshi.fan
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-700">
          推し文化のためのMisskeyサーバー
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-slate-600">
          Share your passion, connect with fellow fans, and celebrate your favorite idols, characters, and artists together.
        </p>
        <Button size="lg" className="bg-oshi-accent hover:bg-purple-700 transition-colors">
          <Heart className="mr-2 h-5 w-5" />
          Join Our Community
        </Button>
      </div>
    </div>
  );
};

export default Hero;