import { useQuery } from "@tanstack/react-query";

const NewsList = () => {
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

  if (isLoading) {
    return <div className="text-center">読み込み中...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">投稿済みのお知らせ</h2>
      {news?.map((item) => (
        <div key={item.id} className="glass-morphism p-6">
          <div className="text-sm text-gray-500 mb-2">{item.date}</div>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;