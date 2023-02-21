import axios from 'axios';
import { TrackParse } from '../types/interface';
import {AudioPlayerControlSprite, PlayListPanel, PlayListProvider, AudioPlayer, TrackType} from 'react-audio-player-pro';

const apiKey = import.meta.env.VITE_API_KEY;


const getRequest = async (url: string) => {
try{
  const response = await axios.get(url);
  const tracks = response.data.results;
  const playlist: Array<TrackType> = [];
  for (let track of tracks) {
    playlist.push({
      src: track.audio,
      mediaMetadata: {
        title: track.name,
        artist: track.artist_name,
        album: track.album_name,
        artwork: [
            {src: track.album_image, sizes: '64x64', type: 'image/png'},
        ],
    },
    });
  }
  return playlist;
}
catch (error) {
  console.error(error);
}
};

export default getRequest;
