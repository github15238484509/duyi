import Mock from "mockjs";
Mock.setup({
    timeout: '2000-5000'
})
Mock.mock("/mock", "get", {
    code: 200,
    data: {
        name: "mock"
    },
    msg: "ok"
})