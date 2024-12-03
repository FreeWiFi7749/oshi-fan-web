import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// 管理者かどうかをチェックする関数
const isAdmin = () => {
  // ここでは簡単な例として localStorage を使用
  return localStorage.getItem("isAdmin") === "true";
};

const News = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const { data: news, isLoading, refetch } = useQuery({
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

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際のプロダクションでは、この部分はサーバーサイドで処理すべきです
    if (adminPassword === "admin123") { // この方法は例示用です。実際の実装では使用しないでください
      localStorage.setItem("isAdmin", "true");
      setShowAdminLogin(false);
      toast({
        title: "ログイン成功",
        description: "管理者としてログインしました",
      });
    } else {
      toast({
        title: "エラー",
        description: "パスワードが正しくありません",
        variant: "destructive"
      });
    }
    setAdminPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast({
      title: "ログアウト",
      description: "管理者からログアウトしました",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAdmin()) {
      toast({
        title: "エラー",
        description: "管理者のみが投稿できます",
        variant: "destructive"
      });
      return;
    }

    if (!title || !content) {
      toast({
        title: "エラー",
        description: "タイトルと内容を入力してください",
        variant: "destructive"
      });
      return;
    }

    // ここでは仮のモックデータを追加
    const newPost = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      title,
      content
    };

    toast({
      title: "投稿完了",
      description: "ニュースを投稿しました",
    });

    setTitle("");
    setContent("");
    refetch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-oshi-purple/20 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">お知らせ</h1>
          <p className="text-lg text-slate-600">
            oshi.fanからの最新情報をお届けします
          </p>
        </div>

        {isAdmin() ? (
          <>
            <div className="max-w-3xl mx-auto mb-4 text-right">
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                管理者ログアウト
              </button>
            </div>
            <div className="max-w-3xl mx-auto mb-12">
              <form onSubmit={handleSubmit} className="glass-morphism p-6 space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    タイトル
                  </label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="タイトルを入力"
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    内容
                  </label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="内容を入力"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-oshi-purple text-white rounded-md hover:bg-oshi-purple/80 transition-colors"
                >
                  投稿する
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto mb-12 text-center">
            {!showAdminLogin ? (
              <button
                onClick={() => setShowAdminLogin(true)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                管理者ログイン
              </button>
            ) : (
              <form onSubmit={handleAdminLogin} className="glass-morphism p-6 space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    管理者パスワード
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="パスワードを入力"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-oshi-purple text-white rounded-md hover:bg-oshi-purple/80 transition-colors"
                  >
                    ログイン
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    キャンセル
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

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