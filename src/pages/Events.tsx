import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Tech Talk: AI in Education",
      date: "Oct 25, 2025 • 3:00 PM",
      location: "Auditorium Hall",
      attendees: 186,
    },
    {
      title: "Hackathon 2025",
      date: "Nov 2-3, 2025 • 9:00 AM",
      location: "Computer Lab",
      attendees: 89,
    },
    {
      title: "Physics Workshop",
      date: "Oct 28, 2025 • 2:00 PM",
      location: "Science Block",
      attendees: 97,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">College Events & Updates</h1>
        
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.attendees} interested
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
                  RSVP
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Events;
