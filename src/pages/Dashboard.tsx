
import { useState } from "react";
import ProfileCard, { ProfileData } from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

// Sample profile data
const sampleProfiles: ProfileData[] = [
  {
    id: "1",
    name: "Priya",
    age: 28,
    location: "Mumbai",
    bio: "Adventure seeker and coffee enthusiast. Let's go hiking!",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    interests: ["Hiking", "Coffee", "Photography", "Travel"]
  },
  {
    id: "2",
    name: "Rahul",
    age: 30,
    location: "Delhi",
    bio: "Foodie and fitness enthusiast. Looking for someone to share meals and workouts with.",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    interests: ["Fitness", "Cooking", "Movies", "Dogs"]
  },
  {
    id: "3",
    name: "Sneha",
    age: 26,
    location: "Bangalore",
    bio: "Tech nerd by day, painter by night. Looking for someone who appreciates art.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    interests: ["Art", "Technology", "Reading", "Music"]
  },
  {
    id: "4",
    name: "Arjun",
    age: 32,
    location: "Hyderabad",
    bio: "Music lover and guitarist. Let's go to a concert together!",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    interests: ["Music", "Concerts", "Guitar", "Travel"]
  },
  {
    id: "5",
    name: "Neha",
    age: 27,
    location: "Chennai",
    bio: "Yoga instructor who loves the beach. Looking for a mindful connection.",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    interests: ["Yoga", "Beach", "Meditation", "Vegan food"]
  }
];

const Dashboard = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>(sampleProfiles);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  
  const currentProfile = profiles[currentProfileIndex];
  
  const handleLike = (id: string) => {
    toast.success("It's a match! 💕");
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prevIndex => prevIndex + 1);
    } else {
      // No more profiles to show
      setProfiles([]);
    }
  };
  
  const handleDislike = (id: string) => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prevIndex => prevIndex + 1);
    } else {
      // No more profiles to show
      setProfiles([]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-6 pb-20">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
          Cupid Cash Connect
        </h1>
      </header>
      
      <main className="container mx-auto px-4">
        {currentProfile ? (
          <ProfileCard
            profile={currentProfile}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4">
            <h2 className="text-2xl font-semibold mb-4">No more profiles to show</h2>
            <p className="text-gray-500 mb-6">Check back later or update your preferences</p>
            <button 
              onClick={() => {
                // Reset profiles (in a real app, this would fetch new profiles)
                setProfiles(sampleProfiles);
                setCurrentProfileIndex(0);
              }}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              Refresh Profiles
            </button>
          </div>
        )}
      </main>
      
      <Navbar />
    </div>
  );
};

export default Dashboard;
