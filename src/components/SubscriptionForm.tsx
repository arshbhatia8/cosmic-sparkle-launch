
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // This would typically connect to an API for email collection
    // For now we'll simulate a successful submission
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "You're in! ✨",
        description: "We'll notify you when we launch. Thank you for joining!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        className="border-2 h-12 bg-white/90 placeholder:text-gray-500 backdrop-blur-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <Button 
        type="submit" 
        className="h-12 px-6 bg-gradient-to-r from-magical-purple to-magical-blue hover:opacity-90 transition-opacity duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : (
          <span className="flex items-center gap-2">
            Notify Me <Sparkles size={16} />
          </span>
        )}
      </Button>
    </form>
  );
};

export default SubscriptionForm;
