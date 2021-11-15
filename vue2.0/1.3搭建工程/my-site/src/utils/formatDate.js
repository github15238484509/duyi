export default function formatDate(time){
    const date = new Date(+time)
    const   year =  date.getFullYear()
    const   month = (+date.getMonth() +1).toString().padStart(2,0)
    const   day =  +date.getDay().toString().padStart(2,0)
    return   `${year}-${month}-${day}`
}