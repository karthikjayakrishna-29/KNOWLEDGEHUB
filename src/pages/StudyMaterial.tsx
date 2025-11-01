import DashboardLayout from "@/components/DashboardLayout";
import { BookOpen, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudyMaterial = () => {
  const materials = [
    { title: "Data Structures - Complete Notes", subject: "Computer Science", downloads: 234 },
    { title: "Quantum Physics Lecture Series", subject: "Physics", downloads: 156 },
    { title: "Web Development Guide 2025", subject: "Information Technology", downloads: 389 },
    { title: "Machine Learning Fundamentals", subject: "AI & ML", downloads: 512 },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Study Material</h1>
        
        <div className="space-y-4">
          {materials.map((material, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{material.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{material.subject}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {material.downloads} downloads
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudyMaterial;
