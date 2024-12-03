import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">oshi.fanについて</h2>
          <div className="flex justify-center mb-4">
            <Info className="h-8 w-8 text-oshi-accent" />
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto glass-morphism p-8 rounded-2xl">
            oshi.fanは、ファン文化を大切にするMisskeyサーバーです。
            あなたの「推し」について自由に語り合える場所を目指しています。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-morphism p-8 hover:scale-105 transition-transform duration-300">
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
          <div className="glass-morphism p-8 hover:scale-105 transition-transform duration-300">
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