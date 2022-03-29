const {
  getAllAdmin,
  addAdmin,
  login
} = require("./services/adminServer")


// getAllAdmin()

// addAdmin({
//   account:'tmdtmd',
//   password:'11231123',
//   name:"tmd",
//   descript:'tmd'
// })
login("tmdtmd", "11231123").then(e => {
  console.log(e);
}).catch(e => {
  console.log(e);
})