import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          oshi.fan
        </h1>
        <p className="text-2xl mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient font-medium">
          あなたの推しを見つけよう
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-slate-600">
          推しについて語り合い、ファン同士でつながる。あなたの推し活をもっと楽しく。
        </p>
        <Button size="lg" className="bg-oshi-accent hover:bg-purple-700 transition-colors">
          <Heart className="mr-2 h-5 w-5" />
          はじめる
        </Button>
      </div>
    </div>
  );
};

export default Hero;