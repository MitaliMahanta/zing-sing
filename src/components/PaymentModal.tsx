
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubscriptionPlan } from "./SubscriptionCard";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: SubscriptionPlan | null;
  onPaymentComplete: () => void;
}

type PaymentMethod = "upi" | "card" | "phonepe" | "gpay";

const PaymentModal = ({ isOpen, onClose, plan, onPaymentComplete }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    toast.info("Processing payment...");
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful!");
      onPaymentComplete();
    }, 2000);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
          <DialogDescription>
            You're subscribing to {plan.name} plan (₹{plan.price}/{plan.period})
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-4 gap-2">
            <Button
              type="button"
              variant={paymentMethod === "upi" ? "default" : "outline"}
              onClick={() => setPaymentMethod("upi")}
              className="flex flex-col items-center justify-center h-20"
            >
              <span className="text-sm font-semibold">UPI</span>
            </Button>
            
            <Button
              type="button"
              variant={paymentMethod === "gpay" ? "default" : "outline"}
              onClick={() => setPaymentMethod("gpay")}
              className="flex flex-col items-center justify-center h-20"
            >
              <span className="text-sm font-semibold">Google Pay</span>
            </Button>
            
            <Button
              type="button"
              variant={paymentMethod === "phonepe" ? "default" : "outline"}
              onClick={() => setPaymentMethod("phonepe")}
              className="flex flex-col items-center justify-center h-20"
            >
              <span className="text-sm font-semibold">PhonePe</span>
            </Button>
            
            <Button
              type="button"
              variant={paymentMethod === "card" ? "default" : "outline"}
              onClick={() => setPaymentMethod("card")}
              className="flex flex-col items-center justify-center h-20"
            >
              <span className="text-sm font-semibold">Card</span>
            </Button>
          </div>
          
          {paymentMethod === "upi" && (
            <div className="space-y-2">
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input
                id="upi-id"
                placeholder="username@bank"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </div>
          )}
          
          {(paymentMethod === "gpay" || paymentMethod === "phonepe") && (
            <div className="space-y-2">
              <Label htmlFor="phone-number">Mobile Number</Label>
              <Input
                id="phone-number"
                placeholder="Your registered mobile number"
                required
              />
            </div>
          )}
          
          {paymentMethod === "card" && (
            <div className="space-y-3">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="card-name">Cardholder Name</Label>
                <Input
                  id="card-name"
                  placeholder="Name on card"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
              <div className="flex space-x-3">
                <div className="flex-1">
                  <Label htmlFor="card-expiry">Expiry Date</Label>
                  <Input
                    id="card-expiry"
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="card-cvv">CVV</Label>
                  <Input
                    id="card-cvv"
                    type="password"
                    placeholder="***"
                    maxLength={3}
                    value={cardCvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="pt-3">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ₹${plan.price}`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
