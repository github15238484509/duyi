module.exports = function(source) {
    console.log("loader执行了");
    console.log('把匹配的文件中的index该为tmd');
    console.log(source.replace(/index/g, 'tmd'));
    return source.replace(/index/g, 'tmd')
}