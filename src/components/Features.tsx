import { Users, Shield, Heart, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-oshi-accent" />,
      title: "Passionate Community",
      description: "Connect with fans who share your interests and enthusiasm",
    },
    {
      icon: <Shield className="h-8 w-8 text-oshi-accent" />,
      title: "Safe Space",
      description: "A moderated environment where you can express your love freely",
    },
    {
      icon: <Heart className="h-8 w-8 text-oshi-accent" />,
      title: "Oshi First",
      description: "Built specifically for fans to celebrate their favorites",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-oshi-accent" />,
      title: "Active Discussions",
      description: "Engage in meaningful conversations about your interests",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-fade-up"
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