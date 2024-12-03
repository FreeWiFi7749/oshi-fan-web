import { useQuery } from "@tanstack/react-query";

const News = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      // Mockデータを返す
      return [
        {
          id: 1,
          date: "2024-03-10",
          title: "新機能のお知らせ",
          content: "コミュニティ機能がアップデートされました。"
        },
        {
          id: 2,
          date: "2024-03-05",
          title: "メンテナンスのお知らせ",
          content: "定期メンテナンスを実施いたします。"
        }
      ];
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">お知らせ</h1>
          <p className="text-lg text-slate-600">
            oshi.fanからの最新情報をお届けします
          </p>
        </div>

        {isLoading ? (
          <div className="text-center">読み込み中...</div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {news?.map((item) => (
              <div key={item.id} className="glass-morphism p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;