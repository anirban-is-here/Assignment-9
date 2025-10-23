import React, { useContext } from "react";
import HeroSlider from "../components/HeroSlider";
import HowItWorks from "../components/HowItWorks";
import SkillsProvider, { SkillsContext } from "../contexts/SkillsContext";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const { skills, loading } = useContext(SkillsContext);
  const topSkills = skills.slice(0, 6);

  return (
    <>
      <div className="">
        {/* slider */}

        <HeroSlider></HeroSlider>
        {/* top skills and how it works section */}
        <div
          className="flex mt-5 
        "
        >
          {/* top skills */}
          <div className="p-10 h-full w-3/5">
            <h2 className="text-4xl text-center mb-3 font-bold">
              Popular Skills
            </h2>
            <p className="text-center text-base-content/70 mb-5">
              Level up your talent — choose from our most popular skill
              categories.
            </p>
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-7  ">
                {topSkills.map((s) => (
                  <SkillCard key={s.skillId} skill={s}></SkillCard>
                ))}
              </div>
            </div>
          </div>
          {/* how it works */}

          <div className="w-2/5 ">
            <HowItWorks></HowItWorks>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
