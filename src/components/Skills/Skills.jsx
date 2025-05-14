import React, { useState } from 'react';
import { SKILLS } from '../../utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <div className='max-w-screen-xl px-6 mx-auto py-10 md:py-24'>
      <section id='skills'>
        <h5 className='text-primary text-2xl md:text-4xl uppercase font-semibold text-center md:text-left pb-10 md:pb-14'>
          My Skill
        </h5>

        <div className='flex flex-col md:flex-row items-start gap-12'>
          {/* Skills Cards */}
          <div className='grid grid-cols-2 gap-12 flex-1'>
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => handleSelectSkill(item)}
              />
            ))}
          </div>

          {/* Skills Info */}
          <div className='flex-1'>
            <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
