import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Mail } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', mobile: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 98765 43210',
      subtext: 'Available 24/7 for orders',
      action: 'tel:+919876543210'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      info: '+91 98765 43210',
      subtext: 'Quick support on WhatsApp',
      action: 'https://wa.me/919876543210'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Food Street, Spice Market',
      subtext: 'New Delhi - 110001',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Delivery Hours',
      info: '10:00 AM - 11:00 PM',
      subtext: 'All days of the week',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@mrfoodie_official',
      url: 'https://instagram.com/mrfoodie_official',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Mr. Foodie Restaurant',
      url: 'https://facebook.com/mrfoodie',
      color: 'bg-blue-600'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      handle: '+91 98765 43210',
      url: 'https://wa.me/919876543210',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-[#222222] mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#222222]">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-[#FFFDF5] border border-[#FFD54F]/20 hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2E7D32] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#222222] font-medium">{item.title}</h3>
                        <p className="text-[#2E7D32] font-medium">{item.info}</p>
                        <p className="text-sm text-[#555555]">{item.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* WhatsApp Quick Support */}
            <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl mb-2">Quick WhatsApp Support</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get instant help with your orders, menu queries, or any concerns
                </p>
                <Button 
                  className="bg-white text-green-600 hover:bg-gray-100 w-full"
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-[#222222]">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="rounded-lg border-[#FFD54F]/30 focus:border-[#2E7D32] min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2E7D32] to-[#FF8C00] hover:from-[#1B5E20] hover:to-[#E07600] text-white py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#222222]">Follow Us on Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={index} className="group cursor-pointer" onClick={() => window.open(social.url, '_blank')}>
                        <div className="flex items-center space-x-3 p-4 rounded-xl bg-[#FFFDF5] border border-[#FFD54F]/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                          <div className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-[#222222] font-medium">{social.name}</h3>
                            <p className="text-sm text-[#555555]">{social.handle}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-[#555555] text-sm">
                    Stay updated with our latest dishes, offers, and food stories!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="rounded-2xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-[#222222] flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-12 text-center">
                <div className="text-8xl mb-6">📍</div>
                <h3 className="text-2xl text-[#222222] mb-4">Visit Our Restaurant</h3>
                <p className="text-lg text-[#555555] mb-2">123 Food Street, Spice Market</p>
                <p className="text-lg text-[#555555] mb-6">New Delhi - 110001, India</p>
                <Button 
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-3 rounded-xl"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-[#222222] text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg text-[#222222] mb-3">What are your delivery hours?</h3>
                <p className="text-[#555555]">We deliver from 10:00 AM to 11:00 PM, all days of the week including holidays.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg text-[#222222] mb-3">Do you offer bulk orders?</h3>
                <p className="text-[#555555]">Yes! We cater to parties, events, and office orders. Call us at least 2 hours in advance.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg text-[#222222] mb-3">What payment methods do you accept?</h3>
                <p className="text-[#555555]">We accept UPI, Paytm, Google Pay, Credit/Debit Cards, and Cash on Delivery.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg text-[#222222] mb-3">Is your kitchen completely vegetarian?</h3>
                <p className="text-[#555555]">Absolutely! We are 100% pure vegetarian and maintain strict standards to ensure no cross-contamination.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}