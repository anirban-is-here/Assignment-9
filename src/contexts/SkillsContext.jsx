import { createContext, useEffect, useState } from "react";

export const SkillsContext = createContext();

const SkillsProvider = ( {children} ) => {
    const [skills, setSkills] = useState([]);

    const[loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);



    return (<SkillsContext.Provider value= {{skills}}>
        {children} </SkillsContext.Provider>
        );
};

export default SkillsProvider;



