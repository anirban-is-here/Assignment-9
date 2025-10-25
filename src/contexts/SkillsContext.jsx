import { createContext, useContext, useEffect, useState } from "react";

const SkillsContext = createContext();
export const useSkills = () => useContext(SkillsContext);

const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SkillsContext.Provider value={{ skills, loading }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;
