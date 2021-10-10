class My_plugin {
    apply(compiler) {
        console.log('compiler.hooks');
        console.log('插件执行了');
        console.log('插件会在compiler初始话完成后执行');
    }
}
module.exports = My_plugin