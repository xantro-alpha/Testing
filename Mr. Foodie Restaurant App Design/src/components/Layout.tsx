import React from 'react';
import { Home, Menu, ShoppingCart, MapPin, Info, Phone, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemsCount?: number;
}

export function Layout({ children, currentPage, onNavigate, cartItemsCount = 0 }: LayoutProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Menu },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cartItemsCount },
    { id: 'track', label: 'Track', icon: MapPin },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#FFD54F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌱</span>
              </div>
              <div>
                <h1 className="text-2xl text-[#222222] font-bold">Mr. Foodie</h1>
                <p className="text-xs text-[#555555]">100% Pure Vegetarian</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors relative ${
                      currentPage === item.id
                        ? 'text-[#2E7D32] bg-[#2E7D32]/10 border-b-2 border-[#FF8C00]'
                        : 'text-[#555555] hover:text-[#2E7D32] hover:bg-[#2E7D32]/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.badge && item.badge > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#FF8C00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-128px)]">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#FFD54F]/20 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-1 relative ${
                  currentPage === item.id
                    ? 'text-[#2E7D32]'
                    : 'text-[#555555]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF8C00] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-[#222222] text-white py-8 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🌱</span>
              </div>
              <span className="text-xl">Mr. Foodie</span>
            </div>
            <p className="text-[#FFD54F] mb-4">Pure Vegetarian, Pure Happiness 🌱</p>
            <p className="text-sm text-gray-400 mb-4">
              © 2025 Mr. Foodie – 100% Vegetarian Restaurant
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-green-600 text-white px-2 py-1 rounded text-xs">FSSAI</div>
              <span className="text-xs text-gray-400">Licensed Food Business</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Indian border pattern */}
        <div className="mt-6 border-t border-[#FFD54F]/20 pt-4">
          <div className="text-center text-[#FFD54F] text-lg">
            ◆ ❋ ◆ ❋ ◆ ❋ ◆
          </div>
        </div>
      </footer>
    </div>
  );
}