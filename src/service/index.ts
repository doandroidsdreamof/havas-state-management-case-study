const blogEndpoint: string = 'https://jsonplaceholder.typicode.com/posts'
const musicsEndpoint: string = `https://api.jamendo.com/v3.0/tracks/?client_id=${import.meta.env.VITE_API_KEY}&format=json&limit=7&tags=stoner%20rock&streaming=1`


export  {blogEndpoint,musicsEndpoint}