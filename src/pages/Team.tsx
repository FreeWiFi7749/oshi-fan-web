import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "運営代表",
      role: "サーバー管理者",
      description: "コミュニティの健全な運営とビジョンの実現に努めています。",
    },
    {
      name: "モデレーターチーム",
      role: "コミュニティ管理",
      description: "安全で快適な環境づくりのため、24時間体制でサポートを行っています。",
    },
    {
      name: "開発チーム",
      role: "技術サポート",
      description: "サーバーの安定運用と新機能の開発を担当しています。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">運営チーム</h1>
          <p className="text-lg text-slate-600">
            oshi.fanを支える運営メンバーをご紹介します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-oshi-accent/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-oshi-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-oshi-accent mb-4">{member.role}</p>
                <p className="text-slate-600">{member.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;