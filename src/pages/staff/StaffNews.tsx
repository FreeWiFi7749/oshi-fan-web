import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import NewsForm from "@/components/staff/NewsForm";
import NewsList from "@/components/staff/NewsList";
import { supabase } from "@/integrations/supabase/client";

// スタッフメンバーの検証
const validateStaffMember = (role: string, username: string) => {
  // この部分は実際のプロジェクトでは、データベースやAPIを使用して検証する必要があります
  const staffMembers = {
    admin: ["admin1", "admin2"],
    mod: ["mod1", "mod2"],
    dev: ["dev1", "dev2"]
  };

  return staffMembers[role as keyof typeof staffMembers]?.includes(username);
};

const StaffNews = () => {
  const { role, username } = useParams();
  const { toast } = useToast();

  // スタッフメンバーの検証
  if (!role || !username || !validateStaffMember(role, username)) {
    toast({
      title: "アクセス権限がありません",
      description: "このページにアクセスする権限がありません。",
      variant: "destructive"
    });
    return <Navigate to="/" replace />;
  }

  // Fetch staff profile
  const { data: staffProfile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['staffProfile', username],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('staff_profiles')
        .select('id')
        .eq('username', username)
        .single();

      if (error) throw error;
      return data;
    }
  });

  if (isLoadingProfile) {
    return <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        読み込み中...
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">スタッフページ - お知らせ管理</h1>
          <p className="text-lg text-slate-600">
            {role === 'admin' ? '管理者' : role === 'mod' ? 'モデレーター' : '開発者'}として
            ログイン中: {username}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {staffProfile && <NewsForm authorId={staffProfile.id} />}
          <div className="mt-12">
            <NewsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffNews;