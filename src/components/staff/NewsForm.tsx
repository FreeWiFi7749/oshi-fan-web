import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

const NewsForm = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

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

    setIsSubmitting(true);

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError) throw userError;

      const { data, error } = await supabase
        .from('news')
        .insert([
          {
            title,
            content,
            author_id: userData.user.id
          }
        ])
        .select();

      if (error) throw error;

      toast({
        title: "投稿完了",
        description: "ニュースを投稿しました",
      });

      // Reset form and refresh news list
      setTitle("");
      setContent("");
      queryClient.invalidateQueries({ queryKey: ['news'] });

    } catch (error) {
      console.error('Error submitting news:', error);
      toast({
        title: "エラー",
        description: "投稿に失敗しました。もう一度お試しください。",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-oshi-purple text-white rounded-md hover:bg-oshi-purple/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "投稿中..." : "投稿する"}
      </button>
    </form>
  );
};

export default NewsForm;