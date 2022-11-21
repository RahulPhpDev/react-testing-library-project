import {useEffect, useId, useState} from 'react';
type SkillsProps = {
    skills: string[];
}
const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect( () => {
        setTimeout( () => {
            setIsLoggedIn(true);
        }, 500)
    }, []);
    return (
        <>
        <ul>
        { 
            skills.map(skill => (
                <li key={skill}>skill</li>
            ))
        }
        </ul>


        {
        isLoggedIn ? 
            (<button>Start Learning</button>) : 
            ( <button onClick ={() => setIsLoggedIn(true)}>Login</button> )
        }
        </>
    )
}

export default Skills;