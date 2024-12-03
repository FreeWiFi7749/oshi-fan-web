import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">oshi.fanについて</h2>
          <div className="flex justify-center mb-4">
            <Info className="h-8 w-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient" />
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto glass-morphism p-8 rounded-2xl">
            oshi.fanは、ファン文化を大切にするMisskeyサーバーです。
            あなたの「推し」について自由に語り合える場所を目指しています。
          </p>
        </div>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div 
            className={`glass-morphism p-8 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <CardHeader>
              <CardTitle>サーバーの特徴</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• 推し活動を応援する文化</li>
                <li>• 丁寧なモデレーション</li>
                <li>• 安定した運営体制</li>
                <li>• コミュニティ主導の運営方針</li>
              </ul>
            </CardContent>
          </div>
          <div 
            className={`glass-morphism p-8 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <CardHeader>
              <CardTitle>利用について</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• 完全無料で利用可能</li>
                <li>• 簡単な登録手続き</li>
                <li>• 多様な推し活動に対応</li>
                <li>• 初心者でも安心の環境</li>
              </ul>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
