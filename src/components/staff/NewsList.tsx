import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface News {
  id: number;
  title: string;
  content: string;
  created_at: string;
  author_id: string;
}

interface StaffProfile {
  username: string;
  role: string;
}

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from("news")
        .select(`*, staff_profiles(username, role)`)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNews(data || []);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("ニュースの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (news.length === 0) return <div>ニュースはありません</div>;

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{item.content}</p>
            <div className="mt-4 text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsList;