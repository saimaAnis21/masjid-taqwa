'use client';

import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Carousel from '../components/carousel';

export default function Home() {
  const FriprayerTimes = [
    {
      name: "English Bayan",
      time: "1:00 pm",
    },
    {
      name: "Sunnah salah",
      time: "1:15 pm",
    },
    {
      name: "Arabic khutba",
      time: "1:20 pm",
    },
    {
      name: "Friday Salah",
      time: "1:25 pm",
    },
  ];

  const announcements = [
    {
      title: 'Ramadan Schedule',
      date: '2024-03-10',
      content: 'Special Taraweeh prayers starting after Isha prayer throughout Ramadan.'
    },
    {
      title: 'Community Iftar',
      date: '2024-03-15',
      content: 'Join us for daily community iftars during Ramadan. Please bring a dish to share.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.postimg.cc/sgHC2Cyp/edit2.jpg")',
          }}>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 bg-black/30 rounded-lg p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Masjid Taqwa
            </h1>
            <p className="text-xl text-white/90">A place of worship, learning, and community</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programs */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Programs at the Masjid</h2>
            <div className="text-center w-full">
              <Carousel />
            </div>
          </Card>

          {/* Friday Prayer Times Bald Hills */}
          <Card className="p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-emerald-600" />
              <h2 className="text-2xl font-semibold text-green-700">Friday Prayers</h2>
            </div>
            <div className="space-y-2">
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="https://maps.app.goo.gl/are9pjiGkR3yPGbU6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-green-600 ">
                    117 Telegraph Road, Bald Hills, Qld 4036
                  </a>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="https://maps.app.goo.gl/HT3eotDqK1VQrNqSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-green-600 ">
                    North Lakes Community Hall at 10 The Corso
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-5 pt-2">
                {FriprayerTimes.map((item) => (
                  <div className="flex text-lg justify-between">
                    <span>{item.time}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Announcements */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Latest Announcements</h2>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-medium">{announcement.title}</h3>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                  <p className="mt-2">{announcement.content}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Whatsapp */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Join the Masjid Whatsapp</h2>
            <p>
              Scan the QR code below or click {""}
              <a
                href="https://chat.whatsapp.com/HMlBMvPPkEO3kv8Mz43GH7"
                target="_blank"
                className="text-green-600 hover:underline">
                here
              </a>
            </p>
            <div className="text-center w-full">
              <Image
                src="https://i.postimg.cc/T1VNJ7Ms/whatsapp-QRcode.png"
                alt="whatsapp"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}