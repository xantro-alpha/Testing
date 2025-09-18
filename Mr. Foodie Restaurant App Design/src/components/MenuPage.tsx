import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search, Plus, Minus } from 'lucide-react';

interface MenuPageProps {
  onAddToCart: (item: any) => void;
  cartItems: any[];
}

export function MenuPage({ onAddToCart, cartItems }: MenuPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', hindi: 'सभी व्यंजन' },
    { id: 'starters', name: 'Starters', hindi: 'स्टार्टर्स' },
    { id: 'south', name: 'South Indian', hindi: 'दक्षिण भारतीय' },
    { id: 'north', name: 'North Indian', hindi: 'उत्तर भारतीय' },
    { id: 'breads', name: 'Breads', hindi: 'रोटी' },
    { id: 'rice', name: 'Rice & Biryani', hindi: 'चावल' },
    { id: 'sweets', name: 'Sweets', hindi: 'मिठाई' },
    { id: 'beverages', name: 'Beverages', hindi: 'पेय' },
  ];

  const menuItems = [
    // Starters
    { id: 1, name: 'Paneer Tikka', hindi: 'पनीर टिक्का', price: 220, category: 'starters', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop' },
    { id: 2, name: 'Samosa', hindi: 'समोसा', price: 60, category: 'starters', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop' },
    { id: 3, name: 'Aloo Tikki', hindi: 'आलू टिक्की', price: 80, category: 'starters', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop' },
    
    // South Indian
    { id: 4, name: 'Masala Dosa', hindi: 'मसाला डोसा', price: 180, category: 'south', image: 'https://images.unsplash.com/photo-1743615467204-8fdaa85ff2db?w=300&h=200&fit=crop' },
    { id: 5, name: 'Idli Sambhar', hindi: 'इडली सांभर', price: 120, category: 'south', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop' },
    { id: 6, name: 'Uttapam', hindi: 'उत्तपम', price: 160, category: 'south', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop' },
    
    // North Indian
    { id: 7, name: 'Paneer Butter Masala', hindi: 'पनीर बटर मसाला', price: 280, category: 'north', image: 'https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=300&h=200&fit=crop' },
    { id: 8, name: 'Dal Makhani', hindi: 'दाल मखनी', price: 240, category: 'north', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop' },
    { id: 9, name: 'Chole Bhature', hindi: 'छोले भटूरे', price: 220, category: 'north', image: 'https://images.unsplash.com/photo-1676138937651-b6f7751b2a91?w=300&h=200&fit=crop' },
    
    // Breads
    { id: 10, name: 'Butter Naan', hindi: 'बटर नान', price: 60, category: 'breads', image: 'https://images.unsplash.com/photo-1628700715463-9bf9a71c691a?w=300&h=200&fit=crop' },
    { id: 11, name: 'Garlic Naan', hindi: 'लहसुन नान', price: 80, category: 'breads', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300&h=200&fit=crop' },
    { id: 12, name: 'Tandoori Roti', hindi: 'तंदूरी रोटी', price: 40, category: 'breads', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop' },
    
    // Rice & Biryani
    { id: 13, name: 'Veg Biryani', hindi: 'वेज बिरयानी', price: 320, category: 'rice', image: 'https://images.unsplash.com/photo-1563379091339-03246963d396?w=300&h=200&fit=crop' },
    { id: 14, name: 'Jeera Rice', hindi: 'जीरा चावल', price: 160, category: 'rice', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' },
    { id: 15, name: 'Paneer Pulao', hindi: 'पनीर पुलाव', price: 280, category: 'rice', image: 'https://images.unsplash.com/photo-1602926345374-4b5ab1734b1a?w=300&h=200&fit=crop' },
    
    // Sweets
    { id: 16, name: 'Gulab Jamun', hindi: 'गुलाब जामुन', price: 120, category: 'sweets', image: 'https://images.unsplash.com/photo-1617013451942-441bbba35a5e?w=300&h=200&fit=crop' },
    { id: 17, name: 'Rasgulla', hindi: 'रसगुल्ला', price: 100, category: 'sweets', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop' },
    { id: 18, name: 'Kheer', hindi: 'खीर', price: 140, category: 'sweets', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
    
    // Beverages
    { id: 19, name: 'Masala Chai', hindi: 'मसाला चाय', price: 40, category: 'beverages', image: 'https://images.unsplash.com/photo-1571934661159-65651ba2cccd?w=300&h=200&fit=crop' },
    { id: 20, name: 'Lassi', hindi: 'लस्सी', price: 80, category: 'beverages', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop' },
    { id: 21, name: 'Fresh Lime Water', hindi: 'नींबू पानी', price: 60, category: 'beverages', image: 'https://images.unsplash.com/photo-1594631661960-869a83c8ea1c?w=300&h=200&fit=crop' },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.hindi.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getItemQuantity = (itemId: number) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item: any) => {
    onAddToCart({ ...item, quantity: 1 });
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-[#222222] mb-4">Our Menu</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full mb-4"></div>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Authentic vegetarian Indian cuisine made with fresh ingredients and traditional recipes
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#555555] w-5 h-5" />
          <Input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 rounded-xl border-2 border-[#FFD54F]/30 focus:border-[#2E7D32] transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`rounded-xl px-4 py-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#2E7D32] text-white hover:bg-[#1B5E20]'
                  : 'border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white'
              }`}
            >
              {category.name}
              <span className="hidden sm:inline ml-1 text-xs opacity-75">
                ({category.hindi})
              </span>
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden border-0 shadow-lg">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-[#2E7D32] text-white hover:bg-[#2E7D32]">
                      🟢 Pure Veg
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-[#222222] mb-1">{item.name}</h3>
                  <p className="text-sm text-[#555555] mb-3">{item.hindi}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#2E7D32]">₹{item.price}</span>
                    {quantity > 0 ? (
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0 rounded-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                          onClick={() => onAddToCart({ ...item, quantity: -1 })}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg text-[#2E7D32] min-w-[2ch] text-center">{quantity}</span>
                        <Button
                          size="sm"
                          className="w-8 h-8 p-0 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white"
                          onClick={() => handleAddToCart(item)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] hover:from-[#1B5E20] hover:to-[#E07600] text-white rounded-xl px-4 py-2 transition-all duration-300"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-[#222222] mb-2">No dishes found</h3>
            <p className="text-[#555555]">Try searching with different keywords or browse all categories</p>
          </div>
        )}
      </div>
    </div>
  );
}