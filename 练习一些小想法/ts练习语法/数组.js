var arr = [1, 3, 3, 4];
var arr_names = new Array(4);
for (var i_1 = 0; i_1 < arr_names.length; i_1++) {
    arr_names[i_1] = i_1;
}
console.log(arr_names);
var sites = new Array("Google", "Runoob", "Taobao", "Facebook");
for (var i = 0; i < sites.length; i++) {
    console.log(sites[i]);
}
console.group(sites, arr_names);
var myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
console.log(myMap);
