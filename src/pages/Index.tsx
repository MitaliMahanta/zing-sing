
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication process
    toast.success(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Heart size={48} className="text-primary animate-pulse-heart" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Cupid Cash Connect</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Where love meets opportunity
          </p>
        </div>
        
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            className={`flex-1 py-2 ${isLogin ? 'border-b-2 border-primary font-semibold' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 ${!isLogin ? 'border-b-2 border-primary font-semibold' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            className="text-primary hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center text-white">
        <p className="font-bold text-xl mb-2">Find Your Perfect Match Today</p>
        <p className="max-w-md mx-auto">
          Join thousands of users who have found their perfect match on Cupid Cash Connect
        </p>
      </div>
    </div>
  );
};

export default Index;
