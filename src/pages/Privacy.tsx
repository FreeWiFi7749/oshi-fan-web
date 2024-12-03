const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-lg text-slate-600">
            個人情報の取り扱いについて
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-morphism p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">個人情報の収集について</h2>
              <p className="text-gray-700">
                当サービスでは、より良いサービス提供のため、必要最小限の個人情報を収集させていただいております。
                収集した情報は、利用目的の範囲内でのみ使用し、適切な管理を行っています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">情報の利用目的</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>サービスの提供・運営</li>
                <li>ユーザーサポート</li>
                <li>サービスの改善・開発</li>
                <li>重要なお知らせの送信</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;