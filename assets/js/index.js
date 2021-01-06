// function getData(){
//     $.ajax({
//         headers:{
//             Authorization:localStorage.getItem('res')
//         },
//         url:'/my/userinfo',
//         success:function(res){
//             console.log(res);
//         }
//     })
// }
// getData();

function getRes(){
    $.ajax({
        url:'/my/userinfo',
        // 请求头
        headers:{Authorization: localStorage.getItem("res")},
        success:function(res){
            // console.log(res.data);
            // $('.name-pic').text(res.data.username[0].toUpperCase())
            // $('.name-in').text("欢迎 "+res.data.username)
            // 获取头像
            if (res.status===1) {
                return
            }
            // getPic(res.data)
            // // 获取名字
            // getName(res.data)

        },
        // complete:function(xhr){
        //     console.log(xhr);
        //     if (xhr.responseJSON.status===1&&xhr.responseJSON.message==="获取用户基本信息成功！") {
        //         location.href='/home/login.html'
        //     }

        // }
    })
} //疑问？？？是不是上传了之后就不能改了
getRes();