function request({
    url,
    method = "post",
    data,
    headers = {},
    onProgress = e => e,
    requestList
}) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.upload.onprogress = onProgress;
        xhr.onload = function (e) {
            resolve({
                data: e.target.response
            })
        }
        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
    })
}

const SIZE = 10 * 1024 * 1024

function createFileFragment(file) {
    var fragment = []
    var current = 0
    while (current < file.size) {
        var end = current + SIZE
        if (end >= file.size) {
            end = file.size
        }
        fragment.push(file.slice(current, end))
        current = end
    }
    return fragment
}
var fragmentlist = []
var filename = ""
var uploadInput = document.querySelector(".file")
var submit = document.querySelector(".submit")
uploadInput.onchange = function (e) {
    filename = e.target.files[0].name
    fragmentlist = createFileFragment(e.target.files[0])
}
submit.onclick = function () {
    var chunklist = fragmentlist.map((item, index) => {
        return {
            chunk: item,
            hash: filename + '-' + index
        }
    })
    uoloadchunklist(chunklist)
}

async function uoloadchunklist(chunklist) {
    var requestList = chunklist.map(({
        chunk,
        hash
    }) => {
        const formData = new FormData();
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        formData.append("filename", filename);
        return {
            formData
        };
    }).map(async ({
            formData
        }) =>
        request({
            url: "/upload",
            data: formData
        }));
    console.log(requestList);
    await Promise.all(requestList)

}