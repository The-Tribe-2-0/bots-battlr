import React from 'react';

const BotCard = ({ bot, onClick, enlisted }) => {
  return (
    <div className={`bot-card ${enlisted ? 'enlisted' : ''}`} onClick={() => onClick(bot.id)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      {/* ... */}
    </div>
  );
};

export default BotCard;
