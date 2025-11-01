import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, Users, Clock } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Web Development Bootcamp",
      instructor: "Prof. Sharma",
      date: "Nov 5-7, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 2",
      seats: "25/50 filled",
      level: "Beginner",
    },
    {
      title: "Machine Learning Workshop",
      instructor: "Dr. Patel",
      date: "Nov 12-13, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "AI Research Center",
      seats: "18/30 filled",
      level: "Intermediate",
    },
    {
      title: "Mobile App Development",
      instructor: "Ms. Gupta",
      date: "Nov 18-20, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Tech Hub",
      seats: "12/40 filled",
      level: "Beginner",
    },
    {
      title: "Cloud Computing Fundamentals",
      instructor: "Mr. Kumar",
      date: "Nov 25, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Auditorium",
      seats: "32/60 filled",
      level: "Beginner",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Workshops & Training</h1>
        
        <div className="space-y-4">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{workshop.title}</h3>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        {workshop.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">By {workshop.instructor}</p>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {workshop.date}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {workshop.time}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {workshop.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {workshop.seats}
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Workshops;
