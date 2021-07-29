function filterArraySex(data, value) {
    if (value == "all") {
        return data
    }
    return data.filter((item) => {
        return item.sex == value
    })
}