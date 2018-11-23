module.exports = {
    //渲染所有数据
    RENDER_ALLDATA: "select * from message",
    //增加数据,
    ADD_USER: "insert into message (uid,name,sex,age,phone,address) values (?,?,?,?,?,?)",
    //重名用户不可再次添加
    NO_ADDSAMEUSER: "select * from message where name=?",
    //删除数据
    DELETE_USER: "delete from message where uid=?",
    //查询每一条数据
    SELECT_USER: "select * from message where uid=?",
    //修改数据
    UPDATE_USER: "update message set name=?,sex=?,age=?,phone=?,address=? where uid=?"
}