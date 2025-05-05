
import { useState } from 'react';
import { Heart, X } from 'lucide-react';

export interface ProfileData {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  images: string[];
  interests: string[];
}

interface ProfileCardProps {
  profile: ProfileData;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
}

const ProfileCard = ({ profile, onLike, onDislike }: ProfileCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const handleNextImage = () => {
    if (currentImageIndex < profile.images.length - 1) {
      setCurrentImageIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleLike = () => {
    setExitDirection('right');
    setTimeout(() => {
      onLike(profile.id);
      setExitDirection(null);
    }, 300);
  };

  const handleDislike = () => {
    setExitDirection('left');
    setTimeout(() => {
      onDislike(profile.id);
      setExitDirection(null);
    }, 300);
  };

  return (
    <div 
      className={`relative w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-[70vh] 
        ${exitDirection === 'left' ? 'card-swipe-left' : exitDirection === 'right' ? 'card-swipe-right' : 'card-appear'}`}
    >
      {/* Image gallery */}
      <div className="relative w-full h-4/5">
        <img
          src={profile.images[currentImageIndex]}
          alt={`${profile.name}'s photo`}
          className="w-full h-full object-cover"
        />
        
        {/* Image navigation dots */}
        <div className="absolute top-2 left-0 right-0 flex justify-center gap-1">
          {profile.images.map((_, index) => (
            <div 
              key={index} 
              className={`h-1 rounded-full ${index === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
        
        {/* Touch areas for navigation */}
        <div className="absolute top-0 left-0 w-1/2 h-full" onClick={handlePrevImage} />
        <div className="absolute top-0 right-0 w-1/2 h-full" onClick={handleNextImage} />
      </div>
      
      {/* Profile info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
          <p className="text-gray-500">{profile.location}</p>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-3">{profile.bio}</p>
        
        {/* Interests */}
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8">
        <button
          onClick={handleDislike}
          className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <X size={32} className="text-gray-500" />
        </button>
        
        <button
          onClick={handleLike}
          className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <Heart size={32} className="text-primary animate-pulse-heart" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
