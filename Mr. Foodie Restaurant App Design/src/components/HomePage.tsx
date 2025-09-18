import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const specials = [
    {
      name: 'Paneer Butter Masala',
      hindi: 'पनीर बटर मसाला',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGElMjBjdXJyeXxlbnwxfHx8fDE3NTgxNzA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Masala Dosa',
      hindi: 'मसाला डोसा',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1743615467204-8fdaa85ff2db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBkb3NhJTIwc291dGglMjBpbmRpYW58ZW58MXx8fHwxNzU4MTEwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Chole Bhature',
      hindi: 'छोले भटूरे',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1676138937651-b6f7751b2a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGJoYXR1cmUlMjBpbmRpYW4lMjBicmVhZHxlbnwxfHx8fDE3NTgxMjE2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Gulab Jamun',
      hindi: 'गुलाब जामुन',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1617013451942-441bbba35a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwaW5kaWFuJTIwc3dlZXRzfGVufDF8fHx8MTc1ODE5MjY0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1672477179695-7276b0602fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwdGhhbGklMjB0cmFkaXRpb25hbCUyMGZvb2R8ZW58MXx8fHwxNzU4MTkyNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
            Pure Vegetarian, Pure Happiness 🌱
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#FFD54F]">
            Delivered Hot to Your Home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('menu')}
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              Order Now 🍽️
            </Button>
            <Button 
              onClick={() => onNavigate('menu')}
              variant="outline"
              className="border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Menu 📋
            </Button>
          </div>
        </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#222222] mb-4">
              Chef's Specials of the Day
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full"></div>
            <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
              Handpicked authentic vegetarian dishes made with fresh ingredients and traditional spices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specials.map((dish, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#2E7D32] text-white px-2 py-1 rounded-full text-xs flex items-center">
                      🟢 Pure Veg
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-[#222222] mb-1">{dish.name}</h3>
                  <p className="text-sm text-[#555555] mb-3">{dish.hindi}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#2E7D32]">{dish.price}</span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] hover:from-[#1B5E20] hover:to-[#E07600] text-white rounded-xl px-4 py-2 transition-all duration-300"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl text-[#222222] mb-2">100% Pure Vegetarian</h3>
              <p className="text-[#555555]">All our dishes are prepared with fresh vegetables and authentic spices</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl text-[#222222] mb-2">Fast Delivery</h3>
              <p className="text-[#555555]">Hot and fresh food delivered to your doorstep in 30-45 minutes</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl text-[#222222] mb-2">Easy Payment</h3>
              <p className="text-[#555555]">UPI, Paytm, Cards, or Cash on Delivery - pay however you like</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Order? 🍽️
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the authentic taste of India with our carefully crafted vegetarian dishes
          </p>
          <Button 
            onClick={() => onNavigate('menu')}
            className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Menu 🌟
          </Button>
        </div>
      </section>
    </div>
  );
}