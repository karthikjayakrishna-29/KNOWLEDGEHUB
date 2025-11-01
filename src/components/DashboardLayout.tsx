import { ReactNode } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BookOpen, Home, Compass, PlusSquare, BookMarked, Calendar, Briefcase, Settings, Search, Bell, User, LogOut, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: TrendingUp, label: "Trending", path: "/trending" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: PlusSquare, label: "Create", path: "/create" },
    { icon: BookMarked, label: "Study Material", path: "/study-material" },
    { icon: Calendar, label: "College Events", path: "/events" },
    { icon: Briefcase, label: "Internships", path: "/internships" },
    { icon: Briefcase, label: "Workshops", path: "/workshops" },
    { icon: BookOpen, label: "Other Content", path: "/other" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile/Desktop Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-6 h-6 text-accent" />
            <span className="font-bold text-lg">KnowledgeHub</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for knowledge..."
                className="w-full pl-10 bg-primary-foreground/10 border-0 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            {/* User Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for knowledge..."
              className="w-full pl-10 bg-primary-foreground/10 border-0 text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 border-r border-border bg-card min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-border">
              <Link
                to="/settings"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/settings")
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span className="text-sm">Settings</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground w-full mt-1"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
              isActive("/dashboard")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/trending"
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
              isActive("/trending")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Trending</span>
          </Link>
          <Link
            to="/create"
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
              isActive("/create")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <PlusSquare className="w-5 h-5" />
            <span className="text-xs">Create</span>
          </Link>
          <Link
            to="/explore"
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
              isActive("/explore")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link
            to="/profile"
            className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
              isActive("/profile")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardLayout;