var User = require("./user.js")

//增
// function insert(){
//     var user = new User({
//         username:'e',
//         userpwd:'cf',
//         userage:3,
//         logindate: new Date(),
//     })
//     user.save(function(err,res){
//         if(err){

//         }
//         else{
//             console.log("res:")
//         }
//     })
// }

// insert();
//查
// function getByConditions(){
//     var wherestr = {'username':'d'};

//     User.find(wherestr,function(err,res){
//         if(err){

//         }else{

//         }
//     })
// }
// getByConditions()

//改、更新
// function update(){
//     var wherestr = {'username':'d'}
//     var updatestr = {'userpwd':'2333'}

//     User.updateMany(wherestr,updatestr,function(err,res){
//         if(err){
//             console.log()
//         }else{
//             console.log("res:"+res);
//         }
//     })
// }
// update()

//删
// function del(){
//     var wherestr = {'username':'a'};

//     User.remove(wherestr,function(err,res){
//         if(err){

//         }else{
//             console.log("res" + res);
//         }
//     })
// }

// del();