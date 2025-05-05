
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thank you for subscribing to our premium service! Your account has been upgraded.
          </p>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
            <h2 className="font-semibold mb-2">Next Steps</h2>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Explore your new premium features</li>
              <li>• Update your profile to attract better matches</li>
              <li>• Check out your new matches with advanced filters</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={() => navigate("/dashboard")}
            className="w-full"
          >
            Continue to Dashboard
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate("/profile")}
            className="w-full"
          >
            Update Your Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
