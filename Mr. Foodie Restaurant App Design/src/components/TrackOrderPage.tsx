import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, CheckCircle, ChefHat, Truck, MapPin } from 'lucide-react';

interface TrackOrderPageProps {
  onNavigate: (page: string) => void;
}

export function TrackOrderPage({ onNavigate }: TrackOrderPageProps) {
  // Mock order data
  const orderStatus = {
    orderId: 'MF2025001',
    status: 'preparing', // confirmed, preparing, out_for_delivery, delivered
    estimatedTime: '25 minutes',
    items: [
      { name: 'Paneer Butter Masala', hindi: 'पनीर बटर मसाला', quantity: 1 },
      { name: 'Butter Naan', hindi: 'बटर नान', quantity: 2 },
      { name: 'Masala Chai', hindi: 'मसाला चाय', quantity: 1 }
    ],
    total: '₹420'
  };

  const trackingSteps = [
    {
      id: 'confirmed',
      title: 'Order Confirmed',
      hindi: 'ऑर्डर कन्फर्म',
      icon: CheckCircle,
      time: '2 mins ago',
      completed: true,
      description: 'Your order has been received and confirmed'
    },
    {
      id: 'preparing',
      title: 'Being Prepared',
      hindi: 'तैयार हो रहा है',
      icon: ChefHat,
      time: 'In progress',
      completed: true,
      active: true,
      description: 'Our chef is preparing your delicious meal'
    },
    {
      id: 'out_for_delivery',
      title: 'Out for Delivery',
      hindi: 'डिलीवरी के लिए निकला',
      icon: Truck,
      time: 'Pending',
      completed: false,
      description: 'Your order is on the way to your location'
    },
    {
      id: 'delivered',
      title: 'Delivered',
      hindi: 'डिलीवर हो गया',
      icon: MapPin,
      time: 'Pending',
      completed: false,
      description: 'Order delivered successfully'
    }
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-[#222222] mb-4">Track Your Order</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full mb-4"></div>
          <p className="text-[#555555]">Follow your order's journey from kitchen to your doorstep</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-1">
            <Card className="rounded-2xl shadow-lg border-0 mb-6">
              <CardHeader>
                <CardTitle className="text-[#222222] flex items-center justify-between">
                  Order Details
                  <Badge className="bg-[#2E7D32] text-white hover:bg-[#2E7D32]">
                    #{orderStatus.orderId}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderStatus.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[#FFD54F]/20 last:border-b-0">
                    <div>
                      <p className="text-[#222222]">{item.name}</p>
                      <p className="text-sm text-[#555555]">{item.hindi}</p>
                    </div>
                    <span className="text-[#2E7D32]">x{item.quantity}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-[#FFD54F]/20">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-[#222222]">Total</span>
                    <span className="text-[#2E7D32]">{orderStatus.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ETA Card */}
            <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] text-white">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl mb-2">Estimated Delivery</h3>
                <p className="text-2xl font-semibold mb-2">{orderStatus.estimatedTime}</p>
                <p className="text-sm opacity-90">Hot and fresh food on the way!</p>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Progress */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#222222]">Order Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex items-start space-x-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                            step.completed 
                              ? 'bg-[#2E7D32] text-white' 
                              : step.active 
                                ? 'bg-[#FF8C00] text-white animate-pulse' 
                                : 'bg-gray-200 text-gray-400'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div className={`w-1 h-16 mt-2 rounded-full ${
                              step.completed ? 'bg-[#2E7D32]' : 'bg-gray-200'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`text-lg ${step.completed || step.active ? 'text-[#222222]' : 'text-gray-400'}`}>
                              {step.title}
                            </h3>
                            <span className={`text-sm ${step.completed || step.active ? 'text-[#555555]' : 'text-gray-400'}`}>
                              {step.time}
                            </span>
                          </div>
                          <p className={`text-sm mb-1 ${step.completed || step.active ? 'text-[#555555]' : 'text-gray-400'}`}>
                            {step.hindi}
                          </p>
                          <p className={`text-sm ${step.completed || step.active ? 'text-[#555555]' : 'text-gray-400'}`}>
                            {step.description}
                          </p>
                          {step.active && (
                            <div className="mt-3 p-3 bg-[#FF8C00]/10 rounded-lg border border-[#FF8C00]/20">
                              <p className="text-sm text-[#FF8C00] flex items-center">
                                <ChefHat className="w-4 h-4 mr-2" />
                                Your chef is currently preparing your order with love and care!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Map Preview Card */}
            <Card className="rounded-2xl shadow-lg border-0 mt-6">
              <CardHeader>
                <CardTitle className="text-[#222222] flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Live Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-lg text-[#222222] mb-2">Track on Map</h3>
                  <p className="text-[#555555] mb-4">
                    Live location tracking will be available once your order is out for delivery
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#2E7D32]">
                    <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-pulse"></div>
                    <span>Preparing at Mr. Foodie Kitchen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}