import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-oshi-purple to-white">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          oshi.fan
        </h1>
        <p className="text-2xl mb-6 text-oshi-accent font-medium">
          推し文化のためのMisskeyサーバー
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-slate-600">
          あなたの推しについて語り合い、ファン同士でつながりましょう。
        </p>
        <Button size="lg" className="bg-oshi-accent hover:bg-purple-700 transition-colors">
          <Heart className="mr-2 h-5 w-5" />
          コミュニティに参加する
        </Button>
      </div>
    </div>
  );
};

export default Hero;