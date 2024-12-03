const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">よくある質問</h1>
          <p className="text-lg text-slate-600">
            oshi.fanに関するよくある質問をまとめました
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="glass-morphism p-6">
            <h2 className="text-xl font-semibold mb-3">Q: アカウントの作成方法は？</h2>
            <p className="text-gray-700">
              トップページの「アカウント作成」ボタンから、必要な情報を入力して作成できます。
            </p>
          </div>

          <div className="glass-morphism p-6">
            <h2 className="text-xl font-semibold mb-3">Q: 利用料金について</h2>
            <p className="text-gray-700">
              基本的な機能は無料でご利用いただけます。
            </p>
          </div>

          <div className="glass-morphism p-6">
            <h2 className="text-xl font-semibold mb-3">Q: 推し活動の制限はありますか？</h2>
            <p className="text-gray-700">
              コミュニティガイドラインに沿っている限り、自由に活動していただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;