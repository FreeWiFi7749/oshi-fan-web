import { Users, Shield, Heart, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-oshi-accent" />,
      title: "情熱的なコミュニティ",
      description: "同じ興味を持つファン同士でつながりましょう",
    },
    {
      icon: <Shield className="h-8 w-8 text-oshi-accent" />,
      title: "安全な空間",
      description: "モデレーション付きの快適な環境で交流できます",
    },
    {
      icon: <Heart className="h-8 w-8 text-oshi-accent" />,
      title: "推し中心",
      description: "推しについて自由に語り合える場所です",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-oshi-accent" />,
      title: "活発な議論",
      description: "推しについて深い会話を楽しめます",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;