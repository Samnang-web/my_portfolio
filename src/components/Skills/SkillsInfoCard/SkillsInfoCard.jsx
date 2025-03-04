import React from 'react';

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="min-h-[23rem] rounded-lg border-[1.5px] border-primary backdrop-blur-lg p-6">
      <h6 className="text-lg font-medium bg-gradient-to-b from-primary to-primary bg-clip-text text-transparent border-b-[1.5px] border-[#6751b9] pb-2">
        {heading}
      </h6>
      <div className="pt-6">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">{item.skill}</p>
              <p className="text-primary">{item.percentage}</p>
            </div>
            <div className="w-full h-2 bg-[#382e68] rounded-md overflow-hidden my-4">
              <div
                className="h-2 bg-gradient-to-r from-blue-950 to-primary rounded-md transition-all duration-500"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
