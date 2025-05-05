
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  lastActive: string;
  matched: string;
}

const matchesData: Match[] = [
  {
    id: "1",
    name: "Priya",
    age: 28,
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastActive: "Just now",
    matched: "2 days ago"
  },
  {
    id: "2",
    name: "Sneha",
    age: 26,
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastActive: "5 mins ago",
    matched: "1 week ago"
  },
  {
    id: "3",
    name: "Neha",
    age: 27,
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastActive: "3 hours ago",
    matched: "Today"
  }
];

const Matches = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-bold text-center">Your Matches</h1>
      </div>
      
      <main className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchesData.map((match) => (
            <div 
              key={match.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <img 
                  src={match.image} 
                  alt={match.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="font-bold text-white">{match.name}, {match.age}</h3>
                  <p className="text-sm text-gray-200">{match.location}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Matched {match.matched}</span>
                  <span>
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    {match.lastActive}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => window.location.href = "/messages"}
                  >
                    Message
                  </Button>
                  
                  <Button variant="outline" className="flex-1">View Profile</Button>
                </div>
              </div>
            </div>
          ))}
          
          {matchesData.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">No matches yet</h2>
              <p className="text-gray-500 mb-4">Keep swiping to find your perfect match!</p>
              <Button onClick={() => window.location.href = "/dashboard"}>
                Discover People
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Premium Matches</h2>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
            <p className="mb-3">Upgrade to Premium to see who already likes you!</p>
            <Button onClick={() => window.location.href = "/premium"}>
              Upgrade Now
            </Button>
          </div>
        </div>
      </main>
      
      <Navbar />
    </div>
  );
};

export default Matches;
