import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  const handleDischarge = (id) => {
    onDischarge(id);
    onRelease(id);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-army-item">
          <BotCard bot={bot} onClick={onRelease} enlisted={true} />
          <button onClick={() => handleDischarge(bot.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
