import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { PlayListsProvider } from '../components/MusicPlayer';
import getRequest from '../service/getRequest';
import { musicsEndpoint } from '../service';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setData } from '../store/reducers/tracksSlice';

const MusicPage = () => {
  const reduxTracks = useAppSelector((state) => state.tracks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRequest(musicsEndpoint)
      .then((data) => dispatch(setData(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 w-full h-screen bg-white dark:bg-gray-900'>
      <NavigationBar text='true' />
      <PlayListsProvider />
    </main>
  );
};

export default MusicPage;
