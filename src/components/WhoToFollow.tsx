import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const WhoToFollow = () => {
  const navigate = useNavigate();

  const suggestions = [
    {
      id: 1,
      name: "Raj Sharma",
      info: "1,234 followers • AI & ML",
      avatar: "R",
    },
    {
      id: 2,
      name: "Priya Singh",
      info: "982 followers • Physics",
      avatar: "P",
    },
    {
      id: 3,
      name: "Amit Verma",
      info: "1,128 followers • History",
      avatar: "A",
    },
  ];

  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());

  const toggleFollow = (userId: number) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const handleProfileClick = (userId: number) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-4">
      <h3 className="font-semibold text-foreground mb-4">Who to Follow</h3>
      <div className="space-y-4">
        {suggestions.map((user) => {
          const isFollowing = followedUsers.has(user.id);
          return (
            <div key={user.id} className="flex items-center justify-between">
              <div
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleProfileClick(user.id)}
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-accent/10 text-accent">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm text-foreground hover:underline">
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.info}</p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFollow(user.id);
                }}
                className={`rounded-full px-4 h-8 transition-all ${
                  isFollowing
                    ? "bg-secondary/20 hover:bg-secondary/30 text-foreground border border-border"
                    : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhoToFollow;
