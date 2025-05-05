
import { Link, useLocation } from "react-router-dom";
import { Heart, MessageCircle, User, Users, CreditCard } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 pb-safe z-50">
      <div className="flex justify-around items-center py-2">
        <Link 
          to="/dashboard"
          className={`flex flex-col items-center p-2 ${isActive('/dashboard') ? 'text-primary' : 'text-gray-500'}`}
        >
          <Users size={24} />
          <span className="text-xs mt-1">Discover</span>
        </Link>
        
        <Link 
          to="/matches"
          className={`flex flex-col items-center p-2 ${isActive('/matches') ? 'text-primary' : 'text-gray-500'}`}
        >
          <Heart size={24} />
          <span className="text-xs mt-1">Matches</span>
        </Link>
        
        <Link 
          to="/messages"
          className={`flex flex-col items-center p-2 ${isActive('/messages') ? 'text-primary' : 'text-gray-500'}`}
        >
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Messages</span>
        </Link>

        <Link 
          to="/premium"
          className={`flex flex-col items-center p-2 ${isActive('/premium') ? 'text-accent' : 'text-gray-500'}`}
        >
          <CreditCard size={24} />
          <span className="text-xs mt-1">Premium</span>
        </Link>
        
        <Link 
          to="/profile"
          className={`flex flex-col items-center p-2 ${isActive('/profile') ? 'text-primary' : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
