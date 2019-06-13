// 生产环境配置
const path = require("path");
exports.model = {
    mysql: {
        database: "blog",
        host: "172.16.125.21",
        port: "",
        user: "root",
        password: "mx102005"
    }
};

exports.view = {
    common: {
        viewPath: path.join(think.ROOT_PATH, "/view")
    }
};
