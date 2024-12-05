import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const NewsList = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news')
        .select(`
          *,
          staff_profiles (
            username,
            role
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  if (error) {
    console.error('Error fetching news:', error);
    return <div className="text-center text-red-500">エラーが発生しました。再度お試しください。</div>;
  }

  if (isLoading) {
    return <div className="text-center">読み込み中...</div>;
  }

  if (!news?.length) {
    return <div className="text-center text-gray-500">まだお知らせはありません。</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">投稿済みのお知らせ</h2>
      {news.map((item) => (
        <div key={item.id} className="glass-morphism p-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            <div className="text-sm text-gray-500">
              投稿者: {item.staff_profiles?.username || '不明'}
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;