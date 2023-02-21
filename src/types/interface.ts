export interface TextProps {
  text?: string;
}

export interface BlogPostsProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export interface BlogPostsState {
  blogPosts: BlogPostsProps[];
  loading: 'null' | 'pending' | 'succeeded' | 'failed';
}

export interface TrackParse {
  title?:string ;
  src: string ;
  img?: string ;
  id?: number;
  mediaMetadata?: {
    title?: string,
    artist: string,
    album?:string,
    artwork?: [
        {src?: string, sizes?: string, type?: string},
    ],
},
}



export interface MusicPlayerProps extends TrackParse {}

