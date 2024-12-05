import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import NewsForm from "@/components/staff/NewsForm";
import NewsList from "@/components/staff/NewsList";
import { useEffect, useState } from "react";

const StaffNews = () => {
  const [authorId, setAuthorId] = useState<string | null>(null);

  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['staffProfile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (profile) {
      setAuthorId(profile.id);
    }
  }, [profile]);

  if (isProfileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">読み込み中...</div>
        </div>
      </div>
    );
  }

  if (!authorId) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">スタッフプロフィールが見つかりません</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">お知らせ管理</h1>
          <div className="mb-12">
            <NewsForm authorId={authorId} />
          </div>
          <div>
            <NewsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffNews;