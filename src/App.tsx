import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    try {
      const allGoods = await goodsAPI.getAll();

      setGoods(allGoods);
    } catch (error) {
      alert('Failed to load goods. Please try again later.');
    }
  };

  const handleLoadFirstFive = async () => {
    try {
      const firstFive = await goodsAPI.get5First();

      setGoods(firstFive);
    } catch (error) {
      alert('Failed to load goods. Please try again later.');
    }
  };

  const handleLoadRed = async () => {
    try {
      const redGoods = await goodsAPI.getRedGoods();

      setGoods(redGoods);
    } catch (error) {
      alert('Failed to load goods. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
