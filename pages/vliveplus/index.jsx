import React, {PureComponent} from 'react';
import Head from 'next/head';
import Index from '@components/vliveplus';
import './index.css';

class Start extends PureComponent {
    static async getInitialProps({ctx}) {
        return {};
    }

    render() {
        return (
            <div>
                <Head>
                    <title>VLIVEPLUS</title>
                    <meta charSet="utf-8"/>
                    <meta property="og:title" content="[V] 팬들과 함께 만드는 VLIVE의 진화"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:url" content="https://campaign.naver.com/vliveplus/ko/"/>
                    <meta property="og:image" content="https://campaign.naver.com/vliveplus/img/sns_1200x638_01.jpg"/>
                    <meta property="og:description" content="덕후를 이롭게 하는 V LIVE+를 만나보세요."/>
                    <link rel="stylesheet" href="/static/vliveplus/css/v_live.css"/>
                </Head>
                <Index/>
            </div>);
    }
}

export default Start;