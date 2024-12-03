import { Server, Globe, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const AdminIntro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">運営メンバー紹介</h2>
          <div className="flex justify-center mb-4">
            <Globe className="h-8 w-8 stroke-[1.5] text-primary" />
          </div>
        </div>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div 
            className={`glass-morphism p-8 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Server className="h-8 w-8 stroke-[1.5] text-primary" />
              </div>
              <CardTitle>サーバー管理人</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <img
                  src="/placeholder.svg"
                  alt="管理人のアバター"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold mb-2">ゆうき</h3>
                <p className="text-gray-600">
                  oshi.fanの立ち上げメンバー。
                  推し活動歴10年以上の経験を活かし、
                  ファンの皆さんが安心して交流できる
                  場所を作ることを目指しています。
                </p>
              </div>
            </CardContent>
          </div>
          <div 
            className={`glass-morphism p-8 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 stroke-[1.5] text-primary" />
              </div>
              <CardTitle>モデレーター</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <img
                  src="/placeholder.svg"
                  alt="モデレーターのアバター"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold mb-2">さくら</h3>
                <p className="text-gray-600">
                  コミュニティの健全な運営をサポート。
                  ユーザーの皆さんが快適に過ごせる
                  環境づくりに取り組んでいます。
                </p>
              </div>
            </CardContent>
          </div>
          <div 
            className={`glass-morphism p-8 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 stroke-[1.5] text-primary" />
              </div>
              <CardTitle>開発担当</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <img
                  src="/placeholder.svg"
                  alt="開発担当のアバター"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold mb-2">たろう</h3>
                <p className="text-gray-600">
                  サーバーの技術面を担当。
                  安定したサービス提供と
                  新機能の開発を行っています。
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIntro;