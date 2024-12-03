import { Users, Shield, Heart, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-morphism p-8 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;