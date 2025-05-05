
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Conversation {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
  time: string;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Priya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "Hey, how's it going?",
    time: "Just now",
    unread: true
  },
  {
    id: "2",
    name: "Sneha",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "Looking forward to our coffee date!",
    time: "Yesterday",
    unread: false
  },
  {
    id: "3",
    name: "Neha",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastMessage: "That movie was amazing!",
    time: "2 days ago",
    unread: false
  }
];

const messageHistory: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      sender: "them",
      text: "Hey there! I noticed we have a lot in common. How's your day going?",
      time: "10:30 AM"
    },
    {
      id: "m2",
      sender: "me",
      text: "Hi! Yes, I noticed that too. My day is going pretty well, just finished work. How about yours?",
      time: "10:45 AM"
    },
    {
      id: "m3",
      sender: "them",
      text: "It's been busy but good! I'm actually heading to that new café downtown tomorrow. Would you like to join?",
      time: "11:00 AM"
    },
    {
      id: "m4",
      sender: "me",
      text: "That sounds great! I've been wanting to check it out. What time were you thinking?",
      time: "11:15 AM"
    },
    {
      id: "m5",
      sender: "them",
      text: "How about 3 PM? They have amazing pastries in the afternoon.",
      time: "11:20 AM"
    },
    {
      id: "m6",
      sender: "them",
      text: "Hey, how's it going?",
      time: "Just now"
    }
  ],
  "2": [
    {
      id: "m1",
      sender: "them",
      text: "I'm excited for our coffee date tomorrow!",
      time: "5:30 PM"
    },
    {
      id: "m2",
      sender: "me",
      text: "Me too! The café you suggested looks amazing.",
      time: "5:45 PM"
    },
    {
      id: "m3",
      sender: "them",
      text: "Looking forward to our coffee date!",
      time: "Yesterday"
    }
  ],
  "3": [
    {
      id: "m1",
      sender: "me",
      text: "That movie was great! We should watch another one soon.",
      time: "Monday"
    },
    {
      id: "m2",
      sender: "them",
      text: "Definitely! I have a few recommendations.",
      time: "Monday"
    },
    {
      id: "m3",
      sender: "me",
      text: "Great! Send them over when you have time.",
      time: "Tuesday"
    },
    {
      id: "m4",
      sender: "them",
      text: "That movie was amazing!",
      time: "2 days ago"
    }
  ]
};

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [message, setMessage] = useState("");
  
  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };
  
  const handleSendMessage = () => {
    if (!message.trim() || !selectedConversation) return;
    
    // In a real app, this would send the message to the server
    toast.success("Message sent!");
    setMessage("");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-bold text-center">Messages</h1>
      </div>
      
      <main className="container mx-auto px-4 py-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-3">
            {/* Conversations List */}
            <div className="border-r border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <Input
                  placeholder="Search conversations..."
                  className="mb-4"
                />
                
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center 
                        ${selectedConversation?.id === conversation.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                      onClick={() => handleSelectConversation(conversation)}
                    >
                      <div className="relative">
                        <img 
                          src={conversation.image} 
                          alt={conversation.name} 
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        {conversation.unread && (
                          <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-gray-800"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="md:col-span-2 flex flex-col h-[70vh]">
              {selectedConversation ? (
                <>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                    <img 
                      src={selectedConversation.image} 
                      alt={selectedConversation.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{selectedConversation.name}</h3>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messageHistory[selectedConversation.id].map((msg) => (
                      <div 
                        key={msg.id} 
                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[70%] rounded-lg px-3 py-2 ${
                            msg.sender === 'me' 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <span className="text-xs opacity-70 block text-right mt-1">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex">
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mr-2"
                      />
                      <Button onClick={handleSendMessage}>Send</Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">No conversation selected</h2>
                  <p className="text-gray-500">Select a conversation to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Navbar />
    </div>
  );
};

export default Messages;
