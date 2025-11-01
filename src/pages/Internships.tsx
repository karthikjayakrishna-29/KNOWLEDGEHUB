import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "3 months",
      stipend: "₹15,000/month",
      type: "Part-time",
    },
    {
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      type: "Full-time",
    },
    {
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹12,000/month",
      type: "Part-time",
    },
    {
      title: "Marketing Intern",
      company: "Brand Builders",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹10,000/month",
      type: "Part-time",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Internship Opportunities</h1>
        
        <div className="space-y-4">
          {internships.map((internship, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{internship.title}</h3>
                    <div className="space-y-1 mb-3">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {internship.company}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {internship.duration} • {internship.type}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-secondary">
                        {internship.stipend}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Internships;
