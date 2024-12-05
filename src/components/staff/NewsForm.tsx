import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface NewsFormProps {
  onSuccess?: () => void;
  authorId: string;
}

const NewsForm = ({ onSuccess, authorId }: NewsFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("news")
        .insert([{ title, content, author_id: authorId }]);

      if (error) throw error;

      toast({
        title: "投稿完了",
        description: "ニュースを投稿しました",
      });

      setTitle("");
      setContent("");
      onSuccess?.();
    } catch (error) {
      console.error("Error posting news:", error);
      toast({
        title: "エラー",
        description: "投稿に失敗しました",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "投稿中..." : "投稿"}
      </Button>
    </form>
  );
};

export default NewsForm;