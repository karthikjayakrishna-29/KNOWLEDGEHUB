import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal } from "lucide-react";

interface PostCardProps {
  author: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  avatarUrl?: string;
}

const PostCard = ({ author, time, content, image, likes, comments, avatarUrl }: PostCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-accent/10 text-accent">{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{time}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <p className="text-foreground mb-3">{content}</p>

      {image && (
        <img
          src={image}
          alt="Post content"
          className="w-full rounded-lg mb-3 object-cover"
        />
      )}

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-red-500">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-secondary">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-secondary">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-secondary">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
