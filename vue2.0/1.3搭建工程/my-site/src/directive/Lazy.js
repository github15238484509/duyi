//第一种方式
// const preloadImg = "https://img1.baidu.com/it/u=2951389098,2147014562&fm=26&fmt=auto"
// export default {
//     inserted(el, preload) {
//         el.src = preloadImg
//         const img = new Image()
//         img.onload = function () {
//             el.src = preload.value
//         }
//         img.onerror = function () {
//             el.src = preloadImg
//         }
//         img.src = preload.value
//     }
// }


// import Events from "@/Event"
// Events.$on("commentScroll", function () {
//     checkImgShow()
// })


// const preloadImg = "https://img1.baidu.com/it/u=2951389098,2147014562&fm=26&fmt=auto"
// let imgDoms = []
// let clientHeight = document.documentElement.clientHeight;
// function getImgTop(dom) {
//     return dom.getBoundingClientRect().top
// }

// function setRightImg(dom, url) {
//     const img = new Image()
//     img.onload = function () {
//         dom.src = url
//     }
//     img.onerror = function () {
//         dom.src = preloadImg
//     }
//     img.src = url
// }
// function checkImgShow() {
//     console.log(imgDoms);
//     for (const item of imgDoms) {
//         if (getImgTop(item.dom) < clientHeight && getImgTop(item.dom) > -150) {
//             setRightImg(item.dom, item.url)
//             imgDoms = imgDoms.filter((it) => item.dom !== it.dom)
//         }
//     }
// }
// export default {
//     inserted(el, preload) {
//         const info = {
//             dom: el,
//             url: preload.value
//         }
//         imgDoms.push(info)
//         el.src = preloadImg
//         checkImgShow()
//     }
// }




import Events from "@/Event"
const preloadImg = "https://img1.baidu.com/it/u=2951389098,2147014562&fm=26&fmt=auto"
let imgs = [];

function setImage(img) {
    img.dom.src = preloadImg; // 先暂时使用着默认图片
    // 处理图片
    // 该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }
}

// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
    for (const img of imgs) {
        // 处理该图片
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

Events.$on("commentScroll", function () {
    handleScroll()
})

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        imgs.push(img);
        el.src = preloadImg;
        // 立即处理它
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    },
};