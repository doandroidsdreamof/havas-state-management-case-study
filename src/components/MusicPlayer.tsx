import React, { useEffect, useState } from 'react';
import {
  AudioPlayerControlSprite,
  PlayListPanel,
  PlayListProvider,
  AudioPlayer,
  TrackType,
} from 'react-audio-player-pro';
import 'react-audio-player-pro/dist/style.css';
import getRequest from '../service/getRequest';
import { TrackParse } from '../types/interface';
import { musicsEndpoint } from '../service';
import { useAppSelector,useAppDispatch } from '../store/hooks';


export function PlayListsProvider() {
  const reduxTracks = useAppSelector((state) => state.tracks.audio)



  return (
    <>
      <AudioPlayerControlSprite />
      <PlayListProvider>
        <AudioPlayer className='shadow-lg rounded-md' trackList={reduxTracks ? reduxTracks : []} />
      </PlayListProvider>
    </>
  );
}
