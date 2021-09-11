class CreatePage {
    constructor({ dom, size, totalPage, currentPage, callback }) {
        this.dom = dom;
        this.size = size;
        this.totalPage = totalPage;
        this.currentPage = currentPage;
        this.callback = callback;
        this.create()
    }

    create() {
        this.dom.innerHTML = "";
        const ul = document.createElement("ul");
        ul.className = "pageGroup";
        var str = `<span class="pageItem prev">上一页</span>`

        if (this.currentPage <= 3) {
            for (let i = 0; i <= 3; i++) {
                str += `<li class="pageItem ${(i + 1) == this.currentPage ? "active" : ''}">${i + 1}</li>`
            }
            str += '.....'
        } else if (this.currentPage >= this.totalPage - 3) {
            str += `<li class="pageItem">${1}</li>`
            str += "....."
            for (let i = this.totalPage - 3; i < this.totalPage; i++) {
                str += `<li class="pageItem ${(i) == this.currentPage ? "active" : ''}">${i}</li>`
            }
        } else {
            str += `<li class="pageItem">${1}</li>`
            str += "....."
            for (let i = 0; i <= 4; i++) {
                str += `<li class="pageItem ${(this.currentPage - 2 + i) == this.currentPage ? "active" : ''}">${this.currentPage - 2 + i}</li>`
            }
            str += "....."
        }

        str += `<li class="pageItem ${this.currentPage === this.totalPage ? "active" : ''}">${this.totalPage}</li>`
        str += `<span class="pageItem next">下一页</span>`
        ul.innerHTML = str
        this.dom.appendChild(ul)
        this.bindEvent()
        this.callback(this.currentPage)
    }
    bindEvent() {
        this.dom.onclick = (e) => {
            if (e.target.tagName === "SPAN") {
                this.nextPreEvet(e.target)
            } else if (e.target.tagName === "LI") {
                this.pageEvent(e.target.innerHTML)
            }
        }
    }
    nextPreEvet(target) {
        if (target.innerHTML === "下一页") {
            if (!(this.currentPage === this.totalPage)) {
                this.currentPage++;

            }
        } else {
            if (!(this.currentPage === 1)) {
                this.currentPage--;

            }
        }
        this.create()
    }

    pageEvent(num) {
        this.currentPage = Number(num)
        this.create()
    }
}

function $(mark) {
    return document.querySelector(mark)
}

function meit(currenPage) {
    console.log(currenPage);
}
var info = new CreatePage({
    dom: $(".dome"),
    size: 10,
    totalPage: 100,
    currentPage: 10,
    callback: meit,
})

var info2 = new CreatePage({
    dom: $(".dome1"),
    size: 10,
    totalPage: 100,
    currentPage: 10,
    callback: meit,
})