import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Leaf, Clock, Star } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      hindi: 'ताजी सामग्री',
      description: 'We source the freshest vegetables and spices daily from local farmers and trusted suppliers.'
    },
    {
      icon: Heart,
      title: 'Hygienic Kitchen',
      hindi: 'स्वच्छ रसोई',
      description: 'Our kitchen maintains the highest standards of cleanliness and food safety for your well-being.'
    },
    {
      icon: Clock,
      title: 'Authentic Taste',
      hindi: 'असली स्वाद',
      description: 'Traditional recipes passed down through generations, prepared with love and authentic spices.'
    },
    {
      icon: Star,
      title: 'Affordable Prices',
      hindi: 'सस्ती कीमतें',
      description: 'Quality vegetarian food at prices that everyone can afford, without compromising on taste.'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Customers', hindi: 'खुश ग्राहक' },
    { number: '50+', label: 'Dishes Available', hindi: 'उपलब्ध व्यंजन' },
    { number: '5', label: 'Years of Service', hindi: 'सेवा के वर्ष' },
    { number: '4.8', label: 'Average Rating', hindi: 'औसत रेटिंग' }
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-[#222222] mb-4">About Mr. Foodie</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed">
            Serving 100% Pure Vegetarian Food with Love, Tradition, and Authenticity since 2020
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl text-[#222222] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#555555] leading-relaxed">
              <p>
                Mr. Foodie was born from a simple dream - to bring authentic, homestyle vegetarian Indian cuisine 
                to every doorstep. Founded in 2020 by passionate food lovers, we started with just 5 traditional 
                recipes and a commitment to pure vegetarian cooking.
              </p>
              <p>
                What began as a small kitchen operation has grown into a beloved restaurant that serves thousands 
                of satisfied customers every month. Our success comes from never compromising on quality, 
                maintaining traditional cooking methods, and treating every meal as if it were prepared for our own family.
              </p>
              <p>
                Today, we're proud to offer over 50 authentic vegetarian dishes, from classic North Indian curries 
                to South Indian specialties, all prepared with the same love and dedication that started our journey.
              </p>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
              alt="Our Kitchen"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-medium">Our Hygienic Kitchen</p>
              <p className="text-sm opacity-90">Where magic happens daily</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-[#222222] mb-4">Our Values</h2>
            <p className="text-[#555555] max-w-2xl mx-auto">
              The principles that guide us in serving the best vegetarian food experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg text-[#222222] mb-2">{value.title}</h3>
                    <p className="text-sm text-[#FF8C00] mb-3">{value.hindi}</p>
                    <p className="text-sm text-[#555555] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl mb-4">Our Journey in Numbers</h2>
            <p className="opacity-90">Milestones that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg mb-1">{achievement.label}</div>
                <div className="text-sm opacity-80">{achievement.hindi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop"
              alt="Our Head Chef"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div>
            <h2 className="text-2xl text-[#222222] mb-6">Meet Our Head Chef</h2>
            <div className="space-y-4 text-[#555555] leading-relaxed">
              <p>
                <strong className="text-[#2E7D32]">Chef Rajesh Kumar</strong> brings over 15 years of culinary expertise 
                to Mr. Foodie. Trained in traditional Indian cooking techniques, he has mastered the art of creating 
                authentic vegetarian dishes that capture the essence of Indian home cooking.
              </p>
              <p>
                His philosophy is simple: "Every dish should tell a story of tradition, love, and nourishment." 
                Under his guidance, our kitchen team ensures that every meal meets the highest standards of taste, 
                quality, and authenticity.
              </p>
              <div className="flex items-center space-x-2 pt-4">
                <div className="flex text-[#FFD54F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-[#2E7D32]">"Excellence in every dish"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium">FSSAI</div>
              <span className="text-[#555555]">Licensed Food Business</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#2E7D32] text-white px-3 py-2 rounded-lg text-sm font-medium">100% VEG</div>
              <span className="text-[#555555]">Pure Vegetarian Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#FF8C00] text-white px-3 py-2 rounded-lg text-sm font-medium">ISO</div>
              <span className="text-[#555555]">Quality Management</span>
            </div>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="mt-12 text-center">
          <div className="text-[#FFD54F] text-2xl mb-4">
            ◆ ❋ ◆ ❋ ◆ ❋ ◆
          </div>
          <p className="text-[#555555] italic">
            "Food is not just about eating. It's about experience, culture, and bringing people together."
          </p>
        </div>
      </div>
    </div>
  );
}