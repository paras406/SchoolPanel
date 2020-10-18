import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

import '../../assets/fonts/fonts.css';
import useBackend from '../../hooks/useBackend';
import CategoriesErrorModel from '../../modals/categoriesErrorModel';
import styles from './index.module.css';
import { SUCCESS } from '../../actions/types';
import {
  OverlayLoading,
} from '../../components';


const initZoom = ({
    meetingNumber,
    signature,
    userName,
    apiKey,
    userEmail,
    passWord,
    leaveUrl,
}) => {
    ZoomMtg.init({
        leaveUrl: leaveUrl,
        isSupportAV: true,
        success: (success) => {
          console.log(success)
       
          ZoomMtg.join({
            signature: signature,
            meetingNumber: meetingNumber,
            userName: userName,
            apiKey: apiKey,
            userEmail: userEmail,
            passWord: passWord,
            success: (success) => {
              console.log(success)
            },
            error: (error) => {
              console.log(error)
            }
          })
       
        },
        error: (error) => {
          console.log(error)
        }
    })
}

const Home = (props) => {
  const {
      meetingNumber = '6529344020',
      userEmail = 'paras.taneja.409@gmail.com',
      userName  = 'Paras Taneja',
      role = 0,
      passWord = 'K5krv2',
  } = props;


  const [state, makeRequest] = useBackend({
      method: 'post',
      errorModel: CategoriesErrorModel,
  })

  const getSignature = () => {
    makeRequest('https://skool406.herokuapp.com/',{
        data: {
            meetingNumber,
            role,
        }
    });
  }

  useEffect(() => {    
    getSignature();
  }, [])

  const { status, payload } = state;

  useEffect(() => {
    if(status === SUCCESS){
        const signature = payload?.data?.signature;
        initZoom({
            signature,
            meetingNumber,
            userEmail,
            userName,
            passWord,
            apiKey: 'NQTaV0_zQYKizKMda59-gw',
            leaveUrl: 'http://localhost:3000/home'
        })
    }
  }, [state])

  const renderLoading = () => {
      if(status === SUCCESS){
        return <OverlayLoading />
      }
  }


  const renderData = () => {
      return(
          <div className={styles.container}>
          </div>
      )
  }

  return(
      <div>
        { renderData() }
        {renderLoading()}
      </div>
  )
       
}

export default Home;

