
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  recommended?: boolean;
  bgClass: string;
}

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSubscribe: (plan: SubscriptionPlan) => void;
}

const SubscriptionCard = ({ plan, onSubscribe }: SubscriptionCardProps) => {
  return (
    <div className={`relative rounded-xl shadow-lg overflow-hidden ${plan.bgClass}`}>
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
          POPULAR
        </div>
      )}
      
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold">₹{plan.price}</span>
            <span className="text-sm text-gray-700 dark:text-gray-300 ml-1">/{plan.period}</span>
          </div>
        </div>
        
        <div className="flex-1">
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check size={16} className="mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={() => onSubscribe(plan)}
          variant={plan.recommended ? "default" : "outline"}
          className="w-full"
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
