'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_786384';

    // add your config here
    config.middleware = [];


    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '45.32.84.250',
            // 端口号
            port: '3306',
            // 用户名
            user: 'tone',
            // 密码
            password: '786384149aa',
            // 数据库名
            database: 'tone',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    return config;
};

