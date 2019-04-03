const Mock = require('mockjs');

Mock.mock('/user/login', 'post', function () {
    let res = {
        code: 200,
        msg: 'success',
        token: '8dj9jj23j2ghg7df79dhjfnmx867'
    };
    return res;
});


Mock.mock('/user/logout', 'post', function () {
    let res = {
        code: 200,
        msg: 'success'
    };
    return res;
});

Mock.mock('/user/info', 'get', function () {
    let res = {
        code: 200,
        msg: 'success',
        user: {
            username: Mock.Random.cname(),
            avatar: 'http://img4.nga.178.com/ngabbs/nga_classic/f/187.png',
            email: Mock.mock('@email'),
            mobile: '18588781024',
            status: 1
        }
    };
    return res;
});
