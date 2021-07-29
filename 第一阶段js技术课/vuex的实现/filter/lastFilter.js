function lastFilter(func) {
    return function(data) {
        var newData = data
        for (const key in func) {
            newData = func[key](newData, state[key])
        }
        return newData
    }
}
var overFilter = lastFilter({ search: filterArraySearch, sex: filterArraySex })