import DashboardLayout from "@/components/DashboardLayout";
import PostCard from "@/components/PostCard";
import TrendingTopics from "@/components/TrendingTopics";
import WhoToFollow from "@/components/WhoToFollow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, Calendar } from "lucide-react";

const Dashboard = () => {
  const posts = [
    {
      author: "Raj Sharma",
      time: "Just now",
      content: "Just completed my Machine Learning project on image classification! Achieved 94% accuracy using CNN. Happy to share my approach if anyone's interested. #MachineLearning #AI",
      likes: 45,
      comments: 12,
    },
    {
      author: "Priya Singh",
      time: "2 hours ago",
      content: "Chemistry doubt: Can someone explain why the pH of a buffer solution remains relatively constant when small amounts of acid or base are added? Need help for tomorrow's exam! 📚",
      likes: 38,
      comments: 8,
    },
    {
      author: "Ankit Patel",
      time: "5 hours ago",
      content: "Computer Networks lab was amazing today! We implemented TCP socket programming and created a simple chat application. Networking is fascinating! 💻",
      image: "/placeholder.svg",
      likes: 67,
      comments: 24,
    },
    {
      author: "Amit Verma",
      time: "Yesterday",
      content: "History question: Looking for concise notes on the Indian Independence Movement (1920-1947). Anyone has good resources to share? Exams next week! 🙏",
      likes: 52,
      comments: 15,
    },
  ];

  const studyMaterials = [
    {
      title: "Data Structures & Algorithms - Complete Notes",
      subject: "CSE",
      author: "Raj Sharma",
      downloads: 234,
      date: "2 days ago",
    },
    {
      title: "Quantum Physics - Chapter 1 to 5",
      subject: "Physics",
      author: "Priya Singh",
      downloads: 156,
      date: "1 week ago",
    },
    {
      title: "DBMS Previous Year Questions (2020-2024)",
      subject: "CSE",
      author: "Ankit Patel",
      downloads: 412,
      date: "3 days ago",
    },
  ];

  const collegeEvents = [
    {
      title: "Tech Symposium 2024",
      date: "March 15-17, 2024",
      type: "Technical Event",
      description: "Annual technical fest featuring coding competitions, hackathons, and tech talks.",
    },
    {
      title: "Placement Drive - TCS",
      date: "March 20, 2024",
      type: "Placement",
      description: "On-campus placement drive for final year students. Register by March 15.",
    },
    {
      title: "Guest Lecture: AI in Healthcare",
      date: "March 12, 2024",
      type: "Seminar",
      description: "Dr. Sharma from AIIMS will discuss applications of AI in modern healthcare.",
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
                <TabsTrigger value="events">College Events</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                {/* Create Post Button */}
                <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                  <Button className="w-full justify-start gap-2 h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Plus className="w-5 h-5" />
                    Create a new post
                  </Button>
                </div>

                {/* Posts */}
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </TabsContent>

              <TabsContent value="material" className="space-y-4">
                {/* Upload Material Button */}
                <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                  <Button className="w-full justify-start gap-2 h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Plus className="w-5 h-5" />
                    Upload Study Material
                  </Button>
                </div>

                {/* Study Materials List */}
                {studyMaterials.map((material, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {material.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                          <span className="bg-secondary px-2 py-0.5 rounded">
                            {material.subject}
                          </span>
                          <span>•</span>
                          <span>by {material.author}</span>
                          <span>•</span>
                          <span>{material.downloads} downloads</span>
                          <span>•</span>
                          <span>{material.date}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                {collegeEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                                {event.type}
                              </span>
                              <span>•</span>
                              <span>{event.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {event.description}
                        </p>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
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