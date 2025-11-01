import DashboardLayout from "@/components/DashboardLayout";
import TrendingTopics from "@/components/TrendingTopics";
import WhoToFollow from "@/components/WhoToFollow";

const Explore = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Explore</h1>
        
        <div className="grid gap-6">
          <TrendingTopics />
          <WhoToFollow />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Explore;
