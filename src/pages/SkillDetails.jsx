import React, { useContext } from "react";
import { Clock, Star, User, Mail, BookOpen } from "lucide-react";
import { SkillsContext } from "../contexts/SkillsContext";
import { useParams } from "react-router";

const SkillDetails = () => {
  const { id } = useParams();
  const { skills } = useContext(SkillsContext);

  
  const skill = skills.find((s) => s.skillId === parseInt(id));
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* Skill Information Section */}
      <div className="bg-base-300 shadow-lg rounded-2xl p-8 flex flex-col lg:flex-row gap-8 hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="rounded-xl object-cover w-full h-72"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-base-content">
            {skill.skillName}
          </h2>
          <p className="text-base-content/80 leading-relaxed">
            {skill.description}
          </p>

          <div className="divider my-4"></div>

          <div className="grid grid-cols-2 gap-4 text-base-content/90">
            <div>
              <p className="text-sm text-base-content/60">Category</p>
              <p className="font-medium">{skill.category}</p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Level</p>
              <p className="font-medium capitalize">Beginner</p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Duration</p>
              <p className="font-medium flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" /> 6 weeks
              </p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Rating</p>
              <p className="font-medium flex items-center gap-1">
                <Star className="w-4 h-4 text-warning" /> {skill.rating}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="">
            <span className="badge badge-primary text-sm">{skill.providerName}</span>
          </div>
          <div className="badge badge-primary text-sm">
            {skill.providerEmail}
          </div>
          </div>
        </div>
      </div>

      {/* Book Session Form */}
      <div className="bg-secondary/20 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-base-content mb-4">
          Book a Session
        </h3>
        <p className="text-base-content/70 mb-6 text-sm">
          Fill out your details below and we’ll connect you with the instructor
          to schedule your session.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-2 sm:col-span-1">
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Full Name
              </span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-base-content/60" />
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full pl-10"
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Email
              </span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-base-content/60" />
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full pl-10"
              />
            </div>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="label">
              <span className="label-text font-medium text-base-content">
                Message
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Tell us what you want to learn..."
              rows="4"
            ></textarea>
          </div>

          {/* Button */}
          <div className="col-span-2">
            <button
              type="button"
              className="btn btn-primary w-full hover:scale-105 transition-transform duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
