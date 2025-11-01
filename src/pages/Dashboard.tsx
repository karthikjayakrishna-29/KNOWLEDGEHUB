import DashboardLayout from "@/components/DashboardLayout";
import PostCard from "@/components/PostCard";
import TrendingTopics from "@/components/TrendingTopics";
import WhoToFollow from "@/components/WhoToFollow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const posts = [
    {
      author: "Raj Sharma",
      time: "Just now",
      content: "Chem Question: Why is cis1-Lonigo pH matter is temperature?",
      likes: 45,
      comments: 12,
    },
    {
      author: "Priya Singh",
      time: "15:30AM",
      content: "Chem Question: Why is cis1-Lonigo pH matter is temperature?",
      likes: 38,
      comments: 8,
    },
    {
      author: "Ankit Patel",
      time: "11:39 AM",
      content:
        "Camp Sci: Getting pH. Together! Rugs. Getting an effect, is an effect?",
      image: "/placeholder.svg",
      likes: 67,
      comments: 24,
    },
    {
      author: "Amit Verma",
      time: "Yesterday",
      content:
        "History Query: Need brief review on idea widely Commune Untone!",
      likes: 52,
      comments: 15,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-card">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="material">Study Material</TabsTrigger>
                <TabsTrigger value="events">
                  College Events & Updates
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </TabsContent>

              <TabsContent value="material">
                <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
                  <p className="text-muted-foreground">
                    Study materials will appear here
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
                  <p className="text-muted-foreground">
                    College events will appear here
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="updates">
                <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
                  <p className="text-muted-foreground">
                    Updates will appear here
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <TrendingTopics />
              <WhoToFollow />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
