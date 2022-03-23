const mysql2 = require('mysql2')
const connect = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'class'
})

// 查询数据
connect.execute(`select * from employee limit 0,2`,
    (er, data) => {
        console.log(er);
        console.log(data);
    })

// 添加一条是数据在公司里面
connect.execute(`insert into company (name,location,buildDate)
                    values('tmd','nijia',CURRENT_DATE())`,
    (er, data) => {
        console.log(er);
        console.log(data);
    })

// 删除一条数据
connect.execute(`
delete from company name where (name='tmd')
`, (er, data) => {
    console.log(er);
    console.log(data);
})





