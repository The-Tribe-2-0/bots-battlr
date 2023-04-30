import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import YourBotArmy from './YourBotArmy';

const BotList = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (id) => {
    if (!army.some((bot) => bot.id === id)) {
      const bot = bots.find((bot) => bot.id === id);
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = async (id) => {
    await fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    });
    setArmy(army.filter((bot) => bot.id !== id));
  };

  return (
    <div className="bot-list">
      <div className="bot-collection">
        <h2>Bot Collection</h2>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={enlistBot} enlisted={false} />
        ))}
      </div>
      <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
    </div>
  );
};

export default BotList;
