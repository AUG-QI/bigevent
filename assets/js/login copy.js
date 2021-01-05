//点击注册页面跳转
// 去登陆
$(function () {
    $('#login').on('click', function () {
        $('#inForm').show()
        $('#outForm').hide()
    })
    // 去注册
    $('#gotoRegi').on('click', function () {
        $('#outForm').show()
        $('#inForm').hide()
    })


    let layer = layui.layer;
    // 表单验证
    let form = layui.form;
    form.verify({
        // 密码长度
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        // 重复密码核验
        repass: function (value, item) {
            console.log(value);
            // console.log($('.regpwd [name=password]'));
            // console.log($('.regpwd [name=password]').val());
           
            if ($('.regpwd [name=password]').val() !== value) {
                //   return  layer.msg('密码输入不一致');
                layer.msg('密码输入不一致');
                return ;


            }
        }



    });

    //注册页面
    $('#outForm').on('submit', function (e) {
        // 阻止默认行为
        e.preventDefault();
        // 获取表单所有元素
        let data = $(this).serialize();
        // 发送ajax请求
        $.ajax({
            type: 'POST',
            url: 'http://ajax.frontend.itheima.net/api/reguser',
            data: data,
            success: function (res) {
              
                if(res.status===0){
                    // layer.msg(res.message,function (){ $('#login').click()});
                    layer.msg(res.message,{time: 3},function (){ $('#login').click()});
                    
                }
             


            }
        })
    })
})
//登陆页面
//阻止默认行为
$('#inForm').on('submit', function (e) {
    e.preventDefault();
    let data = $(this).serialize()
    $.ajax({
        type: 'POST',
        url: 'http://ajax.frontend.itheima.net/api/login',
        data: data,
        success: function (res) {
            layer.msg(res.message);
            if(res.status===0){
                // 成功跳转
              location.href='/home/index.html'          
            }

        }
    })
})