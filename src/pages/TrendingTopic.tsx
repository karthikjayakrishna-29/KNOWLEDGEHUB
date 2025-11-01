import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const TrendingTopics = () => {
  const navigate = useNavigate();
  
  const topics = [
    "#MachineLearning",
    "#WebDev",
    "#QuantumPhysics",
    "#PlacementPrep",
    "#HistoryRevision",
  ];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Trending Topics</h3>
        <button 
          onClick={() => navigate("/trending")}
          className="text-sm text-primary hover:underline"
        >
          See all
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer px-3 py-1.5 rounded-full"
            onClick={() => navigate("/trending")}
          >
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;