import React, { Component } from 'react';

import Crousel from './concentration/crousel';

class Concentration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carousel: [{
                src: "http://upload-images.jianshu.io/upload_images/2541263-0f5e6044449875e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                link: '/user',
                id: 6,
                url: "http://localhost:8080/#/button",
                legend: '绝色大美女'
            }, {
                src: "http://upload-images.jianshu.io/upload_images/2541263-5569e888aadf127a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                link: '/backet',
                id: 5,
                url: "https://www.baidu.com",
                legend: '绝色女杀手'
            }, {
                src: "http://upload-images.jianshu.io/upload_images/2541263-8679200d007b79c9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                link: '/',
                id: 4,
                url: "http://localhost:8080/#/button",
                legend: '高冷女神'
            }]
        };
    }

    render() {
        return <Crousel data={ this.state.carousel } />;
    }
}

export default Concentration;
