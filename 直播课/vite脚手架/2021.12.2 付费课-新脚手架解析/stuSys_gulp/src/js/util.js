// 工具库，相关工具函数都放在这里

// 封装 DOM 查询函数

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * 创建中间 li 标题的函数
 * @param {要拼接的字符串} center 
 * @param {从多少页开始} liStartNum 
 * @param {到多少页结束} liEndNum 
 * @param {当前页是多少页} currentPage 
 */
function createLi(center, liStartNum, liEndNum, currentPage) {
    for (var i = liStartNum; i <= liEndNum; i++) {
        if(currentPage === i){
            center += `<li class="pageNum currentPage">${i}</li>`;
        } else {
            center += `<li class="pageNum">${i}</li>`;
        }
    }
    return center;
}