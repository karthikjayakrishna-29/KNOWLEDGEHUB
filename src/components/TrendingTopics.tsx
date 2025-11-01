import { Badge } from "@/components/ui/badge";

const TrendingTopics = () => {
  const topics = [
    "#MachineLearning",
    "#WebDev",
    "#QuantumPhysics",
    "#PodcastPortion",
    "#HistoryRevision",
  ];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-4 mb-4">
      <h3 className="font-semibold text-foreground mb-4">Trending Topics</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer px-3 py-1.5 rounded-full"
          >
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
