import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Tag } from "lucide-react";

const OtherContent = () => {
  const content = [
    {
      title: "Campus Placement Guide 2025",
      type: "PDF Guide",
      category: "Career",
      size: "2.4 MB",
      downloads: 412,
    },
    {
      title: "Research Paper Templates",
      type: "Document Pack",
      category: "Academic",
      size: "1.8 MB",
      downloads: 289,
    },
    {
      title: "Coding Interview Prep",
      type: "Resource Bundle",
      category: "Career",
      size: "5.6 MB",
      downloads: 567,
    },
    {
      title: "Project Ideas Database",
      type: "Spreadsheet",
      category: "Academic",
      size: "892 KB",
      downloads: 334,
    },
    {
      title: "Scholarship Opportunities",
      type: "PDF List",
      category: "Finance",
      size: "1.2 MB",
      downloads: 445,
    },
    {
      title: "Resume Templates Collection",
      type: "Document Pack",
      category: "Career",
      size: "3.1 MB",
      downloads: 521,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Other Resources</h1>
        
        <div className="space-y-4">
          {content.map((item, index) => (
            <div key={index} className="bg-card rounded-xl shadow-sm border border-border p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.size}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {item.downloads} downloads
                      </span>
                    </div>
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

export default OtherContent;
