const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">サポーターガイドライン</h1>
          <p className="text-lg text-slate-600">
            快適なコミュニティ作りのためのガイドライン
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-morphism p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">基本的な心構え</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>お互いを尊重し、思いやりのある言動を心がけましょう</li>
                <li>他者の推し活動を否定しないようにしましょう</li>
                <li>個人情報の取り扱いには十分注意しましょう</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">禁止事項</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>他者への誹謗中傷</li>
                <li>著作権侵害となる行為</li>
                <li>商業目的での利用</li>
                <li>スパム行為</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;