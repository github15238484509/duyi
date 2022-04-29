const jwt = require("jsonwebtoken")
const secret = "xiaoliu"
let token = jwt.sign({
  id: 1,
  name: '我自己'
}, secret, {
  expiresIn: 3600
})
console.log(token);

try {
  let newToken = jwt.verify(token, secret)
  console.log(newToken);
} catch (error) {
  console.log("jwt过期无效");
}