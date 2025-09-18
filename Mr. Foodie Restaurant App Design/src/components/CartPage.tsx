import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

interface CartPageProps {
  cartItems: any[];
  onUpdateCart: (item: any) => void;
  onRemoveFromCart: (itemId: number) => void;
  onNavigate: (page: string) => void;
}

export function CartPage({ cartItems, onUpdateCart, onRemoveFromCart, onNavigate }: CartPageProps) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    mobile: '',
    street: '',
    landmark: '',
    pincode: '',
    city: '',
    paymentMode: 'cod'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.18);
  const deliveryFee = subtotal > 300 ? 0 : 40;
  const total = subtotal + gst + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleQuantityChange = (item: any, change: number) => {
    if (change === -1 && item.quantity === 1) {
      onRemoveFromCart(item.id);
    } else {
      onUpdateCart({ ...item, quantity: change });
    }
  };

  const handleConfirmOrder = () => {
    // Here you would typically send the order to your backend
    alert('Order confirmed! You will receive a confirmation SMS shortly.');
    onNavigate('track');
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-2xl text-[#222222] mb-4">Your cart is empty</h2>
          <p className="text-[#555555] mb-8">
            Add some delicious vegetarian dishes to get started!
          </p>
          <Button 
            onClick={() => onNavigate('menu')}
            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-[#222222] mb-4">Your Cart</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-[#222222]">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#FFD54F]/20">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg text-[#222222]">{item.name}</h3>
                      <p className="text-sm text-[#555555]">{item.hindi}</p>
                      <p className="text-lg text-[#2E7D32]">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-8 h-8 p-0 rounded-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                        onClick={() => handleQuantityChange(item, -1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-lg text-[#2E7D32] min-w-[2ch] text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        className="w-8 h-8 p-0 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white"
                        onClick={() => handleQuantityChange(item, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Checkout */}
          <div className="space-y-6">
            {/* Bill Summary */}
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#222222]">Bill Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Subtotal</span>
                  <span className="text-[#222222]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">GST (18%)</span>
                  <span className="text-[#222222]">₹{gst}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Delivery Fee</span>
                  <span className="text-[#222222]">
                    {deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}
                  </span>
                </div>
                {deliveryFee === 0 && (
                  <p className="text-sm text-[#2E7D32]">🎉 Free delivery on orders above ₹300</p>
                )}
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="text-[#222222]">Total</span>
                  <span className="text-[#2E7D32]">₹{total}</span>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#222222]">Delivery Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile No. *</Label>
                    <Input
                      id="mobile"
                      value={customerInfo.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="street">Street Address *</Label>
                  <Input
                    id="street"
                    value={customerInfo.street}
                    onChange={(e) => handleInputChange('street', e.target.value)}
                    className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="landmark">Landmark</Label>
                    <Input
                      id="landmark"
                      value={customerInfo.landmark}
                      onChange={(e) => handleInputChange('landmark', e.target.value)}
                      className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      value={customerInfo.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="payment">Payment Mode</Label>
                  <Select value={customerInfo.paymentMode} onValueChange={(value) => handleInputChange('paymentMode', value)}>
                    <SelectTrigger className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cod">💰 Cash on Delivery</SelectItem>
                      <SelectItem value="upi">📱 UPI Payment</SelectItem>
                      <SelectItem value="paytm">💳 Paytm</SelectItem>
                      <SelectItem value="card">💳 Credit/Debit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleConfirmOrder}
                  className="w-full bg-gradient-to-r from-[#FF8C00] to-[#2E7D32] hover:from-[#E07600] hover:to-[#1B5E20] text-white py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
                  disabled={!customerInfo.name || !customerInfo.mobile || !customerInfo.street || !customerInfo.pincode || !customerInfo.city}
                >
                  Confirm Order - ₹{total}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}