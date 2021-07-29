function filterArraySearch(data, value) {
    if (value == "") {
        return data
    }
    return data.filter((item) => {
        return item.name.indexOf(value) !== -1
    })
}