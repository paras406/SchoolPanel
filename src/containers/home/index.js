import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ZoomMtg } from '@zoomus/websdk';

import '../../assets/fonts/fonts.css';

import styles from './index.module.css';

ZoomMtg.setZoomJSLib('http://localhost:3000/node_modules/@zoomus/websdk/dist/lib/', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const Home = () => {
  const history = useHistory();

  const Card = ({teacher, className, time}) => {
      return (
         <div className={styles.cardContainer} onClick={() => {
           history.push('/zoomClass');
         }}>
             <div className={styles.className}>{className}</div>
             <div className={styles.teacherName}>By {teacher}</div>
             <div className={styles.time}>{time}</div>
         </div>     
      )
  }

  useEffect(() => {
    const zoomMeeting = document.getElementById("zmmtg-root");
    zoomMeeting.style.position = 'unset';
  }, [])

  const renderData = () => {
      return(
          <div className={styles.container}>
              <div className={styles.heading}>Prateek Gupta</div>
              <div className={styles.content}>
                  <Card
                     teacher = 'Rohan Chopra'
                     className = 'English'
                     time = '5pm - 6pm'
                  />
                  <Card
                     teacher = 'Paras Taneja'
                     className = 'Maths'
                     time = '6pm - 7pm'
                  />
              </div>
          </div>
      )
  }

  return(
      renderData()
  )
       
}

export default Home;

