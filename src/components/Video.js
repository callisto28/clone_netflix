// import React from 'react';
// import { useState } from 'react';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

// const video = () => {

//     // const [trailerUrl, setTrailerUrl] = useState("");

//     const opts = {
//         height: "390",
//         width: "100%",
//         playerVars: {
//           // https://developers.google.com/youtube/player_parameters
//           autoplay: 1,
//         },
//       };
    
     
//       const handleClick = (movie) => {
//         // console.table(movie?.title)
//         if (trailerUrl) {
//           setTrailerUrl('')
//         } else {
//           movieTrailer(movie?.title || movie?.name || movie?.original_title)
//             .then(url => {
//               const urlParams = new URLSearchParams(new URL(url).search);
//               setTrailerUrl(urlParams.get('v'));
//             }).catch((error) => console.log(error));
//         }
//       }

//     return (
//         <div>
//             toto

//             <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//         </div>

//     );
// };

// export default video;