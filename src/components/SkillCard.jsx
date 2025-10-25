import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
    if (!skill) return null;
  const { image, skillName, rating, price } = skill;


  
  
  

  return (
    <div className="bg-base-100 lg:h-83 border border-base-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-50 p-4 rounded-2xl w-full overflow-hidden">
        <img
          src={image}
          alt={skillName}
          className="object-cover rounded-lg w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Skill Name */}
        <h2 className="text-base font-semibold text-base-content line-clamp-2">
          {skillName}
        </h2>

        {/* Rating and Price */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-warning text-sm">
            <Star size={14} fill="currentColor" />
            <span className="font-medium text-base-content/80">{rating}</span>
          </div>
          <p className="text-sm font-semibold text-primary">
            ${price.toFixed(2)}
          </p>
        </div>

        {/* Button */}
        <div className="mt-3">
          <Link to={`/skilldetail/${skill.skillId}`}>
          <button  className="btn btn-xs w-full h-10 bg-primary/80 text-accent-content text-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
