// import React, { useEffect } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

// import '../../assets/fonts/fonts.css';
// import useBackend from '../../hooks/useBackend';
// import CategoriesErrorModel from '../../modals/categoriesErrorModel';
// import styles from './index.module.css';
// import { FETCHING, SUCCESS } from '../../actions/types';
// import {
//   OverlayLoading,
// } from '../../components';

// ZoomMtg.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib/', '/av');
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

// console.log('paras', JSON.stringify(ZoomMtg.checkSystemRequirements()));


// const initZoom = ({
//     meetingNumber,
//     signature,
//     userName,
//     apiKey,
//     userEmail,
//     passWord,
//     leaveUrl,
// }) => {
//     ZoomMtg.init({
//         leaveUrl: leaveUrl,
//         success: (success) => {
//           ZoomMtg.join({
//             signature: signature,
//             meetingNumber: meetingNumber,
//             userName: userName,
//             apiKey: apiKey,
//             userEmail: userEmail,
//             passWord: passWord,
//             success: (success) => {
//               console.log('gello', success)
//             },
//             error: (error) => {
//               console.log(error)
//             }
//           })
//         },
//         error: (error) => {
//           console.log('paras2');
//           console.log(error)
//         }
//     })
// }

// const Home = (props) => {
//   const {
//       meetingNumber = '5778898100',
//       userEmail = 'paras.taneja.409@gmail.com',
//       userName  = 'Paras Taneja',
//       role = 0,
//       passWord = '4FKc6X',
//   } = props;


//   const [state, makeRequest] = useBackend({
//       method: 'post',
//       errorModel: CategoriesErrorModel,
//   })

//   const getSignature = () => {
//     makeRequest('https://skool406.herokuapp.com/',{
//         data: {
//             meetingNumber,
//             role,
//         }
//     });
//   }

//   useEffect(() => {    
//     getSignature();
//     const zoomMeeting = document.getElementById("zmmtg-root");
//     zoomMeeting.style.position = 'fixed';
//   }, [])

//   const { status, payload } = state;

//   useEffect(() => {
//     if(status === SUCCESS){
//         const signature = payload?.data?.signature;
//         initZoom({
//             signature,
//             meetingNumber,
//             userEmail,
//             userName,
//             passWord,
//             apiKey: 'NQTaV0_zQYKizKMda59-gw',
//             leaveUrl: 'http://localhost:3000/home'
//         })
//     }
//   }, [state])

//   const renderLoading = () => {
//       if(status === FETCHING){
//         return <OverlayLoading />
//       }
//   }


//   const renderData = () => {
//       return(
//           <div className={styles.container}>
//           </div>
//       )
//   }

//   return(
//       <div>
//         { renderData() }
//         {renderLoading()}
//       </div>
//   )
       
// }

// export default Home;

