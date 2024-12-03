import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const NewsForm = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) {
      toast({
        title: "エラー",
        description: "タイトルと内容を入力してください",
        variant: "destructive"
      });
      return;
    }

    // ここで実際のAPI呼び出しを行う
    toast({
      title: "投稿完了",
      description: "ニュースを投稿しました",
    });

    setTitle("");
    setContent("");
  };

  return (
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
  );
};

export default NewsForm;