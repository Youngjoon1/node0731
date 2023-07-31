/*
const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;
*/

const service = require("../../service/member/member_service");

const list = async (req,res) => { //async : 비동기된 함수가 있다 , await 중요
    const list = await service.getList();
    
    /*
    let con = await oracledb.getConnection(dbConfig);
    oracledb.outFormat = oracledb.OBJECT; // key/value 정리
    let result = await con.execute("select * from members02");
    console.log("result : ",result);
    
    res.send("list 페이지 연동: "+ result);*/

    res.render("member/member_index",{list});
}

const registerForm = (req,res) =>{
    
    res.render("member/register_form")
}

const register = async (req,res) => {
    console.log("register : ", req.body);
    let msg = await service.insert(req.body);
    res.send(msg);
}

const memberView = async (req,res) => {
    console.log("memberView ctrl : " , req.params);
    const member = await service.getMember(req.params);
    res.render("member/member_view",{member});
}
const modifyForm = async (req,res) => {
    console.log( "crtl modify", req.query);
    const member = await service.getMember(req.query);
    res.render("member/modify_form",{member});
}

const modify = async (req,res) => {
    console.log("body : " , req.body);
    const msg = await service.modify(req.body);
    res.send(msg);

}

const deleteMember = async (req,res) => {
    const msg = await service.deleteMember(req.params);
    res.send(msg);
}


module.exports = {list, registerForm, register, memberView,modifyForm, modify, deleteMember};