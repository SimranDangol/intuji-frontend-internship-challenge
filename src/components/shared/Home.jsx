import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-sky-100 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-8 right-8">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4L8 8M12 12L16 16M4 16L8 12M12 8L16 4"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute bottom-16 left-16">
        <svg
          width="48"
          height="24"
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="2" fill="black" />
          <circle cx="12" cy="4" r="2" fill="black" />
          <circle cx="4" cy="12" r="2" fill="black" />
          <circle cx="12" cy="12" r="2" fill="black" />
          <circle cx="20" cy="4" r="2" fill="black" />
          <circle cx="20" cy="12" r="2" fill="black" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Managing freelance payments has never been easier
            </h1>
            <p className="text-gray-600 mb-8">
              Secure, fast, and reliable payment processing for freelancers and
              independent professionals.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button className="bg-indigo-700 text-white hover:bg-indigo-800">
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-700"
              >
                <div className="bg-green-400 rounded-full p-1">
                  <Play size={16} className="text-white" />
                </div>
                <span>See How it Works</span>
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Free Register</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Great Service</span>
              </div>
            </div>
          </div>

          {/* Right content - Credit card visuals */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central circular logo */}
              <div className="relative">
                <svg viewBox="0 0 120 120" width="120" height="120">
                  {/* Outer text */}
                  <path
                    id="curve"
                    fill="transparent"
                    d="M60,20 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                  />
                  <text fill="#e67e22" fontSize="10">
                    <textPath xlinkHref="#curve" startOffset="0%">
                      One Stop Banking Solution
                    </textPath>
                  </text>

                  {/* Inner circle with star */}
                  <circle cx="60" cy="60" r="30" fill="#333" />
                  <path d="M60 45 L70 60 L60 75 L50 60 Z" fill="#ff5722" />
                </svg>
              </div>
            </div>

            {/* Top hand with credit card */}
            <div className="absolute top-8 left-8 transform -rotate-12">
              <div className="relative">
                <Card className="w-48 h-28 bg-blue-800 text-white p-4 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="text-xs font-bold mb-1">PREMAUDIA Credit</div>
                  <div className="text-[8px] mb-2">1234 5678 9012 3456</div>
                  <div className="text-[8px]">Motorola 6070</div>
                  <div className="absolute top-2 right-2 w-8 h-6 border border-gray-300 rounded bg-gray-200"></div>
                </Card>
                {/* Stylized hand holding the card */}
                <div className="absolute -bottom-10 -right-6 w-20 h-20 rounded-full bg-amber-700 opacity-25 transform rotate-45"></div>
              </div>
            </div>

            {/* Bottom hand with credit card */}
            <div className="absolute bottom-8 right-8 transform rotate-12">
              <div className="relative">
                <Card className="w-48 h-28 bg-blue-900 text-white p-4 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="text-xs font-bold mb-1">PREMAUDIA Credit</div>
                  <div className="text-[8px] mb-2">1234 5678 9012 3456</div>
                  <div className="text-[8px]">Motorola 6070</div>
                  <div className="absolute top-2 right-2 w-8 h-6 border border-gray-300 rounded bg-gray-200"></div>
                </Card>
                {/* Stylized hand holding the card */}
                <div className="absolute -top-8 -left-6 w-20 h-20 rounded-full bg-amber-700 opacity-25 transform -rotate-45"></div>
              </div>
            </div>

            {/* Visual motion indicators */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20">
              <svg width="60" height="30" viewBox="0 0 60 30">
                <line
                  x1="10"
                  y1="5"
                  x2="20"
                  y2="5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="15"
                  x2="25"
                  y2="15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="25"
                  x2="30"
                  y2="25"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Placeholder for hands and cards */}
            <div className="h-96"></div>
          </div>
        </div>
      </div>

      {/* Bottom sleeve/accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-100 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-700 rounded-tl-full"></div>
    </div>
  );
}
