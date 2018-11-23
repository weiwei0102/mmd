var express = require('express');
var router = express.Router();
var getQuery = require("../config/configMysql");
var sqls = require("../config/mysql");
var uuid = require("node-uuid");
//渲染所有数据
router.get('/api/allData', function(req, res, next) {
    getQuery(sqls.RENDER_ALLDATA, function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: "server error" });
        } else {
            return res.json({ code: 1, result });
        }
    })
});
//增加用户
router.post('/api/addUser', function(req, res, next) {
    var params = req.body;
    var user = params.user,
        sex = params.sex,
        age = params.age,
        phone = params.phone,
        address = params.address,
        uid = uuid.v1();
    if (!user || !phone) {
        return res.json({ code: 2, msg: "请输入用户名和手机号" });
    } else {
        getQuery(sqls.NO_ADDSAMEUSER, [user], function(err, result) {
            if (err) {
                return res.json({ code: 0, msg: "server error" });
            }
            if (result.length) {
                return res.json({ code: 3, msg: "不可重复添加用户" });
            } else {
                getQuery(sqls.ADD_USER, [uid, user, sex, age, phone, address], function(err, result) {
                    if (err) {
                        return res.json({ code: 0, msg: "server error" });
                    } else {
                        return res.json({ code: 1, msg: "添加成功" });
                    }
                })
            }
        })
    }
});
//删除数据
router.get('/api/deleteData', function(req, res, next) {
    var uid = req.query.uid;
    getQuery(sqls.DELETE_USER, [uid], function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: "server error" });
        } else {
            return res.json({ code: 1, msg: "删除成功！" });
        }
    })
});
//查询每一条数据
router.get('/api/selectUser', function(req, res, next) {
    var uid = req.query.uid;
    getQuery(sqls.SELECT_USER, [uid], function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: "server error" });
        } else {
            return res.json({ code: 1, result });
        }
    })
});
//保存修改数据
router.post('/api/upData', function(req, res, next) {
    var params = req.body;
    var user = params.user,
        sex = params.sex,
        age = params.age,
        phone = params.phone,
        address = params.address,
        uid = params.uid;
    getQuery(sqls.UPDATE_USER, [user, sex, age, phone, address, uid], function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: "server error" });
        } else {
            return res.json({ code: 1, msg: "修改成功" });
        }
    })
});
module.exports = router;