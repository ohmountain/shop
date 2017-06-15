import React, { Component } from 'react';

import Crousel from './concentration/crousel';

class Concentration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carousel: [{
                src: "http://upload-images.jianshu.io/upload_images/2541263-0f5e6044449875e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                id: 6,
                url: "http://localhost:8080/#/button",
                legend: '哎哟为'
            }, {
                src: "http://upload-images.jianshu.io/upload_images/2541263-5569e888aadf127a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                id: 5,
                url: "https://www.baidu.com",
                legend: '哎哟为'
            }, {
                src: "http://upload-images.jianshu.io/upload_images/2541263-8679200d007b79c9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                id: 4,
                url: "http://localhost:8080/#/button",
                legend: '哎哟为'
            }]
        };
    }

    render() {
        return <Crousel data={ this.state.carousel } />;
    }
}

export default Concentration;
