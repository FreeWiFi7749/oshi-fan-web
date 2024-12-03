const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">oshi.fanについて</h1>
          <p className="text-lg text-slate-600">
            ファン文化とお気に入りを祝福するコミュニティ
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-morphism p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">私たちのミッション</h2>
              <p className="text-gray-700">
                oshi.fanは、ファンの皆様が安心して交流できる場所を提供することを目指しています。
                推し活動を通じて生まれる喜びや感動を、より多くの人々と共有できる環境づくりに取り組んでいます。
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">コミュニティの価値観</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>相互理解と尊重</li>
                <li>安全で快適な環境の維持</li>
                <li>創造的な表現の自由</li>
                <li>多様性の受容</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;