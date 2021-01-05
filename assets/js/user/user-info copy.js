// 全局适配ajax的url
$.ajaxPrefilter(function (params) {
    params.url = "http://api-breakingnews-web.itheima.net" + params.url;
  })
let form = layui.form;

// 获取ajax请求
// $.ajax({
 
//     url:'/my/userinfo',
//     headers:{Authorization: localStorage.getItem("res")},
//     success:function(res){
//         // /给表单赋值
//         $('.only-name').val(res.data.username)
//         console.log(res.data);
//         form.val("fa", res.data);
//     }
    
// })
// 修改数据
// $.ajax({
//     type:'POST',
//     url:'/my/userinfo',
//     headers:{Authorization: localStorage.getItem("res")},
//     success:function(res){
//         // /给表单赋值
//     console.log(res);
//     }
    
// })
// $('form').on('submit',function(){
//     // let data = form.val("layui-form")
//     let data=new FormData(this);
//     console.log(data.get("nickname"));
//     console.log(data.get("email"));
//     $.ajax({
//         type:'POST',
//         url:"/my/userinfo",
//         data,
//         success:function(){

//         }
//     })


// })