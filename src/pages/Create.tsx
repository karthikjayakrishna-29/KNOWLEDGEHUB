import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImagePlus } from "lucide-react";
import { toast } from "sonner";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content) {
      toast.success("Post created successfully!");
      setTitle("");
      setContent("");
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Create Post</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-sm font-medium">What's on your mind?</Label>
              <Input
                id="title"
                placeholder="Add a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 bg-muted border-0"
              />
            </div>

            <div>
              <Textarea
                placeholder="Share your thoughts, questions, or resources..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px] bg-muted border-0 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button variant="outline" className="gap-2">
                <ImagePlus className="w-4 h-4" />
                Add Image
              </Button>
              
              <Button 
                onClick={handlePost}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Create;
