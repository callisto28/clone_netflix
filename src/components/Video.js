// import React from 'react';
// // import {Link} from "react-router-dom";
// // import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// // import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
// import YouTube from 'react-youtube';




// const Video = ({play, trailerUrl, opts}) => {

//    console.log(play)

//     return (
    
    
//             <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         {console.log("trailer2", trailerUrl)}
//       </div>
       


//     );
// };


// import React from "react";
// import "./Video.scss";
// import { useParams } from "react-router-dom";


// function Video(trailerUrl) {

// //   Nz5CnNHnpO8
// //   ?rel=0&showinfo=0&vq=720;autoplay=1
//  let { id } = useParams();
// //   let id = "vM-Bja2Gy04";
// console.log({trailerUrl},"useparam");


//   return (
//     <div className="video">
//       <iframe
//         src={`https://www.youtube.com/embed/${id}`}
//         title="video"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }


// import React from 'react';
// import './Quickview.scss';
// // import CancelIcon from '@material-ui/icons/Cancel';

// const Video = ( {movies, trailerUrl, opts, popup}) => {
//     return (
//         <div className={`quickView ${trailerUrl && "open"}`}>
//           <div className={`quickView__banner ${trailerUrl && "open"}`}>
//             <div className="quickView__content">
             
//             </div>
            
//           </div>
//           {/* <button className="quickView__close" onClick={popup}>
//             <CancelIcon fontSize="large" />
//           </button> */}
//         </div>
//       )
// };

//  export default Video;
