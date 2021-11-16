const Vue = require("Vue")
const Event = {}


module.exports = new Vue()



// module.exports = {
//     $on: function (name, fn) {
//         if (!Event[name]) {
//             Event[name] = new Set()
//             Event[name].add(fn)
//         } else {
//             Event[name].add(fn)
//         }
//     },
//     $off: function (name, fn) {
//         if (Event[name]) {
//             Event[name].delete(fn)
//         }
//     },
//     $emit: function (name) {
//         if (Event[name]) {
//             for (const i of Event[name]) {
//                 i()
//             }
//         }
//     }
// }

