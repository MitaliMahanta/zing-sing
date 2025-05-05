
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SubscriptionCard, { SubscriptionPlan } from "@/components/SubscriptionCard";
import PaymentModal from "@/components/PaymentModal";

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    period: "month",
    features: [
      "5 Super Likes per day",
      "Unlimited Likes",
      "See who likes you",
      "Basic filters"
    ],
    bgClass: "bg-basic-card text-gray-800"
  },
  {
    id: "medium",
    name: "Medium",
    price: 699,
    period: "month",
    features: [
      "10 Super Likes per day",
      "Unlimited Likes",
      "See who likes you",
      "Advanced filters",
      "1 Boost per month",
      "No ads"
    ],
    recommended: true,
    bgClass: "bg-medium-card text-gray-800"
  },
  {
    id: "premium",
    name: "Premium",
    price: 1299,
    period: "month",
    features: [
      "20 Super Likes per day",
      "Unlimited Likes",
      "See who likes you",
      "Advanced filters",
      "4 Boosts per month",
      "No ads",
      "Priority in matches",
      "See who viewed your profile"
    ],
    bgClass: "bg-premium-card text-gray-800"
  }
];

const Premium = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const handleSubscribe = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };
  
  const handlePaymentComplete = () => {
    setIsPaymentModalOpen(false);
    navigate("/payment-success");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="pt-8 pb-6 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Upgrade Your Dating Experience</h1>
          <p className="text-center mt-2 max-w-md mx-auto">
            Unlock premium features and increase your chances of finding the perfect match
          </p>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard 
              key={plan.id} 
              plan={plan}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Why Upgrade?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-medium mb-2">More Matches</h3>
              <p className="text-sm text-gray-500">
                Premium members get up to 10x more matches than free users
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-medium mb-2">Advanced Filters</h3>
              <p className="text-sm text-gray-500">
                Find exactly what you're looking for with our advanced search filters
              </p>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-medium mb-2">See Who Likes You</h3>
              <p className="text-sm text-gray-500">
                Don't waste time guessing - see who's already interested in you
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        plan={selectedPlan}
        onPaymentComplete={handlePaymentComplete}
      />
      
      <Navbar />
    </div>
  );
};

export default Premium;
