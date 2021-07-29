var personArray = [{
        name: '小王',
        age: 18,
        src: 'https://img0.baidu.com/it/u=2846839356,2979116833&fm=26&fmt=auto&gp=0.jpg',
        sex: '男',
        dse: '213'
    },
    {
        name: '张王',
        age: 20,
        src: 'https://img1.baidu.com/it/u=2322801127,3568516255&fm=26&fmt=auto&gp=0.jpg',
        sex: '男',
        dse: '213'
    },
    {
        name: '刘王',
        age: 10,
        src: 'https://img1.baidu.com/it/u=868855991,3879879972&fm=26&fmt=auto&gp=0.jpg',
        sex: '女',
        dse: '213'
    },
    {
        name: '爱情',
        age: 36,
        src: 'https://img2.baidu.com/it/u=312024523,3083014258&fm=26&fmt=auto&gp=0.jpg',
        sex: '女',
        dse: '213'
    },
    {
        name: '鹏飞',
        age: 25,
        src: 'https://img1.baidu.com/it/u=1982542237,1518170931&fm=26&fmt=auto&gp=0.jpg',
        sex: '男',
        dse: '213'
    },
    {
        name: '老大王',
        age: 40,
        src: 'https://img1.baidu.com/it/u=2742310760,4052608782&fm=26&fmt=auto&gp=0.jpg',
        sex: '男',
        dse: '213'
    },
]



var oUl = document.getElementById('ul')
var oSpan = document.querySelectorAll('.title span')
var oInput = document.querySelector('input')

var state = {
    search: '',
    sex: 'all'
}

Array.from(oSpan).forEach((item) => {
    item.onclick = function() {
        Span = document.querySelector('.title span.action')
        Span.className = ''
        this.className = "action"
        state.sex = this.dataset.type
        renderUl(overFilter(personArray))
    }
})
oInput.oninput = function() {
    state.search = this.value
    renderUl(overFilter(personArray))
}

function renderUl(data) {
    var str = ''
    data.forEach((item) => {
        str += `
            <li>
              <img src="${item.src}" alt="">
              <p class="name">${item.name}</p>
              <p class="des">${item.dse}</p>
            </li>
           `
    })
    oUl.innerHTML = str
}
renderUl(personArray)