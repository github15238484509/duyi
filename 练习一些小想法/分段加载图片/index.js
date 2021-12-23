var imgs = [
    "https://img1.baidu.com/it/u=2789374754,1256772558&fm=26&fmt=auto",
    "https://img2.baidu.com/it/u=4257627594,2235374326&fm=26&fmt=auto",
    "https://img0.baidu.com/it/u=1489081426,2808695431&fm=26&fmt=auto",
    "https://img0.baidu.com/it/u=1453995885,776158606&fm=26&fmt=auto",
    "https://img2.baidu.com/it/u=2382948921,2225093221&fm=26&fmt=auto"
]


function start() {
    if (imgs.length == 0) {
        return
    }
    var a = new Image();
    var ssss = imgs.pop()
    a.src = ssss
    a.onload = function () {
        console.log(ssss);
        start()
    }
}
// start()



