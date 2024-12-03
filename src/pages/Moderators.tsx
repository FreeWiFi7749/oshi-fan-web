const Moderators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">運営について</h1>
          <p className="text-lg text-slate-600">
            oshi.fanの運営体制とガイドライン
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-morphism p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">運営方針</h2>
              <p className="text-gray-700">
                コミュニティの健全な発展と、メンバーの皆様が安心して活動できる環境の維持を最優先に考えています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">モデレーションチーム</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>24時間体制でのコミュニティ監視</li>
                <li>迅速な問題解決とサポート</li>
                <li>公平で透明性のある運営</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderators;