import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ZoomMtg } from "@zoomus/websdk";

import '../../assets/fonts/fonts.css';

import styles from './index.module.css';



const Home = () => {

    const navigateToZoom = (meetingConfig) => {
        var testTool = window.testTool;
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        var signature = ZoomMtg.generateSignature({
            meetingNumber: meetingConfig.mn,
            apiKey: 'NQTaV0_zQYKizKMda59-gw',
            apiSecret: 'BM237piqDovTKFwkTtMG0i2QvtQcorNSNPeK',
            role: meetingConfig.role,
            success: function (res) {
                console.log(res.result);
                meetingConfig.signature = res.result;
                meetingConfig.apiKey = 'NQTaV0_zQYKizKMda59-gw';
                var joinUrl = "/meeting.html?" + testTool.serialize(meetingConfig);
                window.open(joinUrl, "_blank");
            },
        });
    }

    const Card = ({ teacher, className, time, meetingNumber = '5778898100', name = 'Prateek Gupta', password = '4FKc6X', role = 0, email = 'Paras.Taneja.409@gmail.com' }) => {
        return (
            <div className={styles.cardContainer} onClick={() => navigateToZoom({
                mn: parseInt(meetingNumber),
                name: testTool.b64EncodeUnicode(
                   name
                ),
                pwd: password,
                role: parseInt(role, 10),
                email: testTool.b64EncodeUnicode(
                    email
                ),
                lang: 'en_US',
                signature: "",
                china: 0,
            })}>
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
        return (
            <div className={styles.container}>
                <div className={styles.heading}>Prateek Gupta</div>
                <div className={styles.content}>
                    <Card
                        teacher='Rohan Chopra'
                        className='English'
                        time='5pm - 6pm'
                    />
                    <Card
                        teacher='Paras Taneja'
                        className='Maths'
                        time='6pm - 7pm'
                    />
                </div>
            </div>
        )
    }

    return (
        renderData()
    )

}

export default Home;

