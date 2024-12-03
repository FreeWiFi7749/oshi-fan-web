import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const News = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news')
        .select(`
          *,
          staff_profiles (username)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
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
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-500">
                    {new Date(item.created_at).toLocaleDateString('ja-JP')}
                  </div>
                  <div className="text-sm text-gray-500">
                    投稿者: {item.staff_profiles?.username || '不明'}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{item.content.replace(/\\n/g, '\n')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;