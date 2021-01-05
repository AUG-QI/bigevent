$('.register').on('click', function () {
    $('.registerFrom').show()
    $('.loginFrom').hide()
})
$('.loginNow').on('click', function () {
    $('.loginFrom').show()
    $('.registerFrom').hide()
})

let form = layui.form;
let pws=$()
form.verify({

    pass: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ] ,
    repwd: function(value, item){ //value：表单的值、item：表单的DOM对象
        if(pws)
          return '密码输入不一致';
        }
  });      
