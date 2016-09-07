$(function(){
  $('#fullpage').fullpage({
    navigation:true,      
    navigationPosition:'right',
    navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆论分析逻辑与构架','专业：专业数据可视化'],
    scrollingSpeed: 1440,
    afterLoad:function(){
         $('#section-1 .chuan').addClass('active')
         $('#section-2 .title').addClass('active')
         $('#section-2 .shu').addClass('active')
         $('#section-3 .title').addClass('active')
         $('#section-3 .cube8').addClass('active')
         $('#section-4 .title').addClass('active')
         $('#section-4 .cube1').addClass('active')
         $('#section-4 .cube2').addClass('active')
         $('#section-4 .copyright').addClass('active')
    },
    onLeave:function(){
          $('#section-1 .chuan').removeClass('active')
          $('#section-2 .title').removeClass('active')
          $('#section-2 .shu').removeClass('active')
          $('#section-3 .title').removeClass('active')
          $('#section-3 .cube8').removeClass('active')
          $('#section-4 .title').removeClass('active')
          $('#section-4 .cube1').removeClass('active')
          $('#section-4 .cube2').removeClass('active')
          $('#section-4 .copyright').removeClass('active')

          
    }

  });
  $('.fixed .conter .nav-help .phone-show').on('mouseover',function(){
    $('.fixed .conter .show1').addClass('active')
  })
  $('.fixed .conter .nav-help .phone-show').on('mouseout',function(){
    $('.fixed .conter .show1').removeClass('active')
  })
  $('#section-1 .login .login-bottom .submit').on('mousedown',function(){
  	$('#section-1 .login .login-bottom .submit').addClass('active')
  })
   $('#section-1 .login .login-bottom .submit').on('mouseup',function(){
  	$('#section-1 .login .login-bottom .submit').removeClass('active')
  })
})