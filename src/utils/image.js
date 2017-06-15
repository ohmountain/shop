var KEY_PRV = '__shop_image_cache__';

function image2base64(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    var dataURL = canvas.toDataURL("image/png");

    window.localStorage.setItem(`${KEY_PRV}img`, dataURL);

    return dataURL;
}

function getImageBase64(url) {
    var data = window.localStorage.get(`${KEY_PRV}url`);
    if (data) {
        return { cached: true, data, url};
    }

    return { cached: false, data, url};
}
