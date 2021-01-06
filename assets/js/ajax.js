// 全局适配ajax的url
$.ajaxPrefilter(function (params) {
    params.url = "http://api-breakingnews-web.itheima.net" + params.url;
  })