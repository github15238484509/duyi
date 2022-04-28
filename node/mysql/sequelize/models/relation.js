const Class = require("./Class");
const Student = require("./Student");
Student.belongsTo(Class);
Class.hasMany(Student);