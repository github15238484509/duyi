// 该文件专门用于表单验证

// 验证学生姓名
$('#stuName').addEventListener('blur', function (e) {
    if (e.target.value) {
        $('#validateName').innerHTML = "";
    } else {
        $('#validateName').innerHTML = "请填写姓名";
    }
})

// 验证邮箱
$('#stuEmail').addEventListener('blur', function (e) {
    var value = e.target.value;
    if (value) {
        // 进入此 if，说明非空
        // 下面的 /^[\w\.-_]+@[\w-_]+\.com$/ 是一个正则表达式
        // 所谓正则表达式，就是验证某一个字符串是否符合某一个要求
        if (/^[\w\.-_]+@[\w-_]+\.com$/.test(value)) {
            $('#validateEmail').innerHTML = "";
        } else {
            $('#validateEmail').innerHTML = "邮箱的格式不正确";
        }
    } else {
        $('#validateEmail').innerHTML = "请填写邮箱";
    }
})

// 验证年龄
$("#stuAge").addEventListener('blur', function (e) {
    var value = e.target.value;
    if(value){
        if(isNaN(value)){
            // isNaN 返回 true，说明传入的参数不是数字
            $('#validateAge').innerHTML = "请填写正确的数字";
        } else {
            if(value < 20 || value > 30){
                $('#validateAge').innerHTML = "年龄不符合范围要求";
            } else {
                $('#validateAge').innerHTML = "";
            }
        }
    } else {
        $('#validateAge').innerHTML = "请填写年龄";
    }
})

// 这里可以继续添加手机号的验证（1）非空 （2）手机号是否符合要求（正则表达式）