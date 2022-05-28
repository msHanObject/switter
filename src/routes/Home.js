import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import Swit from 'components/Swit';

const Home = ({ userObj }) => {
  const [swit, setSwit] = useState('');
  const [swits, setSwits] = useState([]);
  useEffect(() => {
    dbService.collection('swits').onSnapshot((snapshot) => {
      const switArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSwits(switArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('swits').add({
      text: swit,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setSwit('');
  };
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === 'swit') {
      setSwit(value);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="swit" value={swit} onChange={onChange} placeholder="What's on your day?" maxLength={120}/>
        <input type="submit" value="Sweet" />
      </form>
      <ul id='swits'>
        {swits.map((swit) => (
          <Swit key={swit.id} switObj={swit} isOwner={swit.creatorId === userObj.uid} />
        ))}
      </ul>
    </div>
  );
};
export default Home;