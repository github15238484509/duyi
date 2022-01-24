var max = 10000000;
var pointSet = [];
var distance = [
    [max, 5, 7, max, max, max, 2],
    [5, max, max, 9, max, max, 3],
    [7, max, max, max, 8, max, max],
    [max, 9, max, max, max, 4, max],
    [max, max, 8, max, max, 5, 4],
    [max, max, max, 4, 5, max, 6],
    [2, 3, max, max, 4, 6, max]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
var g = new Node("G");

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);
pointSet.push(f);
pointSet.push(g);


function getpointindex(point, pointSet) {
    for (let i = 0; i < pointSet.length; i++) {
        if (pointSet[i].value === point.value) {
            return i
        }
    }
}

function getMinDisNode(newpointlist, pointSet, distance) {
    var frompoint = null
    var topoint = null
    var dis = max

    for (let i = 0; i < newpointlist.length; i++) {
        var currentponint = newpointlist[i];
        var index = getpointindex(currentponint, pointSet)
        for (let j = 0; j < distance[index].length; j++) {
            var currentdisacne = distance[index][j]
            if (currentdisacne < dis && newpointlist.indexOf(pointSet[j]) < 0) {
                frompoint = currentponint
                dis = currentdisacne
                topoint = pointSet[j]
            }
        }
    }
    frompoint.neighbor.push(topoint)
    topoint.neighbor.push(frompoint)
    return topoint
}

function setminlist(pointSet, distance) {
    var currentponint = pointSet[0]
    var newpointlist = []
    newpointlist.push(currentponint)
    while (true) {
        var minponit = getMinDisNode(newpointlist, pointSet, distance)
        newpointlist.push(minponit)
        if (newpointlist.length === pointSet.length) {
            break
        }
    }
    return newpointlist
}
console.log(setminlist(pointSet, distance));