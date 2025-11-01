import DashboardLayout from "@/components/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, MessageCircle, Bookmark, User } from "lucide-react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-accent/10 text-accent text-2xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            
            <h2 className="text-xl font-bold text-foreground mb-1">Your Profile</h2>
            <p className="text-muted-foreground mb-4">Computer Science Student</p>

            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">342</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">189</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>

            <Button className="w-full max-w-xs bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* My Posts */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">My Posts</h3>
          
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <div className="flex items-start gap-3 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-accent/10 text-accent text-xs">You</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Yesterday</p>
                  <p className="text-foreground mb-3">My Study Notes: Sharing my comprehensive notes on Data Structures. Hope it helps!</p>
                  <div className="flex gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1 text-sm">
                      <Heart className="w-4 h-4" /> 45
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <MessageCircle className="w-4 h-4" /> 12
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Bookmark className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Events */}
        <div className="bg-card rounded-xl shadow-sm border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">My Events</h3>
          
          <div className="flex items-start gap-3">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Tech Workshop Organizer</p>
              <p className="text-sm text-muted-foreground">Nov 4, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
