import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, BookMarked } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/20 p-6 rounded-3xl">
              <BookOpen className="w-20 h-20 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            KnowledgeHub
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the ultimate learning community for students. Share knowledge, connect with peers, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/signup")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-xl"
            >
              Get Started
            </Button>
            <Button 
              onClick={() => navigate("/login")}
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20 text-lg px-8 py-6 rounded-xl"
            >
              Login
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card/95 backdrop-blur rounded-2xl p-6 text-center">
            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Connect & Collaborate</h3>
            <p className="text-sm text-muted-foreground">
              Network with students across departments
            </p>
          </div>

          <div className="bg-card/95 backdrop-blur rounded-2xl p-6 text-center">
            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookMarked className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Share Resources</h3>
            <p className="text-sm text-muted-foreground">
              Access and share study materials
            </p>
          </div>

          <div className="bg-card/95 backdrop-blur rounded-2xl p-6 text-center">
            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Never miss college events and workshops
            </p>
          </div>

          <div className="bg-card/95 backdrop-blur rounded-2xl p-6 text-center">
            <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Learn Together</h3>
            <p className="text-sm text-muted-foreground">
              Discuss topics and solve problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
