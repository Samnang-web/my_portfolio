import React from 'react';

const SkillsCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`relative cursor-pointer rounded-lg border-[1.5px] border-primary p-10 text-center bg-blue-950 backdrop-blur-lg transition-all duration-300 hover:bg-gradient-to-b from-primary to-primary ${isActive ? 'bg-gradient-to-b from-primary to-primary' : ''}`}
      onClick={() => onClick()}
    >
      <div className="absolute top-[-1rem] left-[-1rem] flex h-16 w-16 items-center justify-center rounded-lg border-[1.5px] border-primary bg-blue-900">
        <img src={iconUrl} alt={title} className="w-10 object-contain" />
      </div>
      <span className="text-lg font-medium sm:text-sm">{title}</span>
    </div>
  );
};

export default SkillsCard;
