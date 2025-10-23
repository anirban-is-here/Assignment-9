import React from "react";
import { Search, Share2, GraduationCap, UserStar } from 'lucide-react';

const HowItWorks = () => {
  const providers = [
    {
      id: 1,
      name: "Arian Stone",
      skill: "Guitar",
      rating: 4.9,
      image: "https://i.ibb.co.com/Q0gTjBD/provider4.jpg",
    },
    {
      id: 2,
      name: "Michael Ray",
      skill: "Photography",
      rating: 4.8,
      image: "https://i.ibb.co.com/9kZghtkj/provider2.jpg",
    },
    {
      id: 3,
      name: "Sophia Lane",
      skill: "Cooking",
      rating: 4.7,
      image: "https://i.ibb.co.com/WNN96pZT/provider3.jpg",
    },
    {
      id: 4,
      name: "Daniel White",
      skill: "Coding",
      rating: 4.9,
      image: "https://i.ibb.co.com/zhfZ9NW5/provider1.jpg",
    },
  ];

  const steps = [
    {
      icon: Search,
      title: "Browse Skills",
      desc: "Explore skills offered by top providers.",
    },
    {
      icon: Share2,
      title: "Connect",
      desc: "Chat and schedule sessions easily.",
    },
    {
      icon: GraduationCap,
      title: "Learn",
      desc: "Attend sessions and improve your skills.",
    },
    {
      icon: UserStar,
      title: "Rate",
      desc: "Give feedback and help others choose.",
    },
  ];

  return (
    <section className="mt-11 max-w-7xl flex flex-col mx-auto px-6">
      {/* Top Rated Providers */}
      <div>
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-base-content mb-3">
            Top Rated Providers
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Meet some of our best-rated professionals offering high-quality sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-7">
          {providers.map((p) => (
            <div
              key={p.id}
              className="flex justify-around w-63 items-center p-3 bg-base-100 shadow-md hover:shadow-lg transition-all rounded-2xl border-2 border-amber-400"
            >
              <div className="px-6 ">
                <img
                  src={p.image}
                  alt={p.name}
                  className="rounded-full w-25 h-25  object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 items-center text-center my-2 ">
                <h3 className="card-title text-lg font-semibold text-base-content">
                  {p.name}
                </h3>
                <p className="text-sm text-base-content/70">{p.skill}</p>
                <div className="badge badge-warning text-sm font-medium">
                  ⭐ {p.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-secondary/20 mr-3 rounded-xl p-4 mt-1 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-7 text-base-content">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center border-2 text-center bg-base-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-105 duration-300"
            >
              <step.icon className="w-17 h-6 text-primary mb-3 opacity-90" />
              <h3 className="font-semibold text-base-content">
                {step.title}
              </h3>
              <p className="text-sm text-center text-base-content/70 mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
