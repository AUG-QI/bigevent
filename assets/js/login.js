// 点击切换注册登陆页面
$('.register').on('click', function () {
  $('.registerFrom').show()
  $('.loginFrom').hide()
})
$('.loginNow').on('click', function () {
  $('.loginFrom').show()
  $('.registerFrom').hide()
})
// 全局适配ajax的url
$.ajaxPrefilter(function (params) {
  params.url = "http://api-breakingnews-web.itheima.net" + params.url;
})
// 注册页面验证 
let form = layui.form;
form.verify({
  pass: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
  ],
  // 判断两次的密码是否一样
  repassword: function (value, item) {
      let password = $('#psd').val()
      if (value != password) {
          return '两次输入密码不一致'
      }
  }
});
//   阻止注册页面默认跳转 
let layer = layui.layer;
$('.registerFrom').on('submit', function (e) {
  e.preventDefault()
  let data = $(this).serialize();
  $.ajax({
      url: '/api/reguser',
      data,
      type: 'POST',
      success: function (res) {
          // 还要有延迟

          layer.msg(res.message);
          if (res.status === 0) {
              $('.loginNow').click()
          }
      }
  })
})

//   登陆页面跳转
$('.loginFrom').on('submit', function (e) {
  e.preventDefault()
  let data = $(this).serialize();
  $.ajax({
      url: '/api/login',
      type: 'POST',
      data,
      success: function (res) {
          // layer.msg(res); 
          console.log(res);
          // if(res.status===0){
          //  layer.msg(res.message,function(){
          //     //  console.log("hhhhh");
          //      location.href='/home/index.html'

          //  })

          // }else{
          //     layer.msg(res.message)
          // }
          // if (res.status !== 0) {
          // layer.msg('res.message', {
          //     icon: 1,
          //     time: 2000 //2秒关闭（如果不配置，默认是3秒）
          //   }, function(){
          //     return alert(11)
          //     // layer.msg(res.message)
          //   });  
         
              
          // }
          // 打印令牌
         console.log(res.token);
         localStorage.setItem('res',res.token)
          layer.msg(res.message,function(){
              if (res.status === 0) {
                  location.href = '/home/index.html'
              }
          })
         

      }
  })
})

