import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/DashboardLayout";
import { 
  MapPin, 
  Link2, 
  Calendar, 
  BookOpen, 
  Award,
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
  MoreHorizontal
} from "lucide-react";
import { toast } from "sonner";

interface UserData {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  department: string;
  year: string;
  college: string;
  location: string;
  website: string;
  joinedDate: string;
  followers: number;
  following: number;
  posts: number;
  interests: string[];
}

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Mock user data - in real app, fetch based on userId
  const getUserData = (id: string | undefined): UserData => {
    const users: Record<string, UserData> = {
      "1": {
        id: 1,
        name: "Raj Sharma",
        avatar: "R",
        bio: "Computer Science student passionate about AI & ML. Love to share knowledge and learn from others!",
        department: "B.Tech - Computer Science and Engineering",
        year: "3rd Year",
        college: "Indian Institute of Technology, Delhi",
        location: "New Delhi, India",
        website: "https://rajsharma.dev",
        joinedDate: "January 2023",
        followers: 1234,
        following: 456,
        posts: 89,
        interests: ["Machine Learning", "Web Development", "Data Science", "Algorithms"]
      },
      "2": {
        id: 2,
        name: "Priya Singh",
        avatar: "P",
        bio: "Physics enthusiast exploring quantum mechanics and astrophysics. Always ready to help with physics doubts!",
        department: "B.Sc. - Physics",
        year: "2nd Year",
        college: "Miranda House, Delhi University",
        location: "Delhi, India",
        website: "https://priyasingh.me",
        joinedDate: "March 2023",
        followers: 982,
        following: 234,
        posts: 67,
        interests: ["Quantum Physics", "Astrophysics", "Research", "Teaching"]
      },
      "3": {
        id: 3,
        name: "Amit Verma",
        avatar: "A",
        bio: "History buff and aspiring civil servant. Sharing notes and insights on Indian history and current affairs.",
        department: "BA - History",
        year: "4th Year",
        college: "St. Stephen's College, Delhi",
        location: "Delhi, India",
        website: "",
        joinedDate: "August 2022",
        followers: 1128,
        following: 345,
        posts: 124,
        interests: ["Indian History", "Current Affairs", "UPSC Preparation", "Political Science"]
      }
    };
    
    return users[id || "1"] || users["1"];
  };

  const userData = getUserData(userId);

  const userPosts = [
    {
      id: 1,
      content: `Just finished implementing a neural network from scratch! The journey of understanding backpropagation is fascinating. ${userData.id === 1 ? '#MachineLearning' : userData.id === 2 ? '#QuantumPhysics' : '#History'}`,
      time: "2 hours ago",
      likes: 45,
      comments: 12,
      image: null
    },
    {
      id: 2,
      content: userData.id === 1 ? "Check out my latest blog post on understanding transformers architecture. Link in bio!" : userData.id === 2 ? "Explaining the double-slit experiment in simple terms. Quantum mechanics is mind-blowing!" : "Important dates in Indian Freedom Struggle - comprehensive thread coming soon!",
      time: "1 day ago",
      likes: 89,
      comments: 23,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      content: userData.id === 1 ? "Looking for study partners for the upcoming Data Structures exam. DM me if interested!" : userData.id === 2 ? "Physics lab was amazing today! Verified Planck's constant experimentally." : "Just completed my research paper on the Partition of India. Happy to share insights!",
      time: "3 days ago",
      likes: 34,
      comments: 18,
      image: null
    }
  ];

  const studyMaterials = [
    {
      id: 1,
      title: userData.id === 1 ? "Machine Learning Notes - Week 1 to 5" : userData.id === 2 ? "Quantum Mechanics - Complete Notes" : "Modern Indian History - 1857 to 1947",
      subject: userData.id === 1 ? "ML" : userData.id === 2 ? "Physics" : "History",
      downloads: 234,
      date: "2 weeks ago"
    },
    {
      id: 2,
      title: userData.id === 1 ? "Data Structures Cheat Sheet" : userData.id === 2 ? "Electromagnetic Theory - Solved Problems" : "UPSC History Optional - Previous Year Papers",
      subject: userData.id === 1 ? "DSA" : userData.id === 2 ? "Physics" : "History",
      downloads: 456,
      date: "1 month ago"
    }
  ];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? "Unfollowed successfully" : "Following " + userData.name);
  };

  const handleMessage = () => {
    toast.info("Messaging feature coming soon!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Profile link copied to clipboard!");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background pb-20 lg:pb-6">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 relative">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </div>
        
        <div className="container mx-auto px-4 -mt-20">
          <div className="max-w-5xl mx-auto">
            {/* Profile Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <Avatar className="w-32 h-32 border-4 border-background -mt-16 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                      {userData.avatar}
                    </AvatarFallback>
                  </Avatar>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground">{userData.name}</h1>
                        <p className="text-muted-foreground">{userData.department}</p>
                        <p className="text-sm text-muted-foreground">{userData.year} • {userData.college}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          onClick={handleFollow}
                          variant={isFollowing ? "outline" : "default"}
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </Button>
                        <Button variant="outline" onClick={handleMessage}>
                          Message
                        </Button>
                        <Button variant="outline" size="icon" onClick={handleShare}>
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="mt-4 text-foreground">{userData.bio}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {userData.location}
                      </div>
                      {userData.website && (
                        <div className="flex items-center gap-1">
                          <Link2 className="w-4 h-4" />
                          <a 
                            href={userData.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {userData.website.replace('https://', '')}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined {userData.joinedDate}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 mt-4">
                      <div className="text-center">
                        <div className="font-bold text-xl text-foreground">{userData.posts}</div>
                        <div className="text-xs text-muted-foreground">Posts</div>
                      </div>
                      <button className="text-center hover:underline">
                        <div className="font-bold text-xl text-foreground">{userData.followers}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </button>
                      <button className="text-center hover:underline">
                        <div className="font-bold text-xl text-foreground">{userData.following}</div>
                        <div className="text-xs text-muted-foreground">Following</div>
                      </button>
                    </div>

                    {/* Interests */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {userData.interests.map((interest: string) => (
                        <Badge key={interest} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="materials">Study Materials</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>

              {/* Posts Tab */}
              <TabsContent value="posts" className="space-y-4 mt-6">
                {userPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {userData.avatar}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{userData.name}</h3>
                            <span className="text-sm text-muted-foreground">• {post.time}</span>
                          </div>

                          <p className="mt-2 text-foreground whitespace-pre-wrap">{post.content}</p>

                          {post.image && (
                            <img 
                              src={post.image} 
                              alt="Post" 
                              className="mt-4 rounded-lg w-full max-h-96 object-cover"
                            />
                          )}

                          <div className="flex gap-6 mt-4 text-muted-foreground">
                            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                              <Heart className="w-5 h-5" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                              <MessageCircle className="w-5 h-5" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Study Materials Tab */}
              <TabsContent value="materials" className="space-y-4 mt-6">
                {studyMaterials.map((material) => (
                  <Card key={material.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{material.title}</h3>
                            <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                              <span>{material.subject}</span>
                              <span>•</span>
                              <span>{material.downloads} downloads</span>
                              <span>•</span>
                              <span>{material.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline">Download</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* About Tab */}
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Education</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">{userData.department}</p>
                            <p className="text-sm text-muted-foreground">{userData.college}</p>
                            <p className="text-sm text-muted-foreground">{userData.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {userData.interests.map((interest: string) => (
                          <Badge key={interest} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-3">Contact</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{userData.location}</span>
                        </div>
                        {userData.website && (
                          <div className="flex items-center gap-2">
                            <Link2 className="w-4 h-4 text-muted-foreground" />
                            <a 
                              href={userData.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {userData.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;