$(function(){
    // header点击箭头旋转
    function arrows(objs,bt){
       objs.click(function(){
           $(this).find(bt).toggleClass("current");
        })
    }
    arrows($(".header-left"),"span");
    arrows($(".header-right>a:eq(0)"),"em") 

   $(".header-right b").hover(
   function(){
    $(this).css("text-decoration","underline")
   },
   function(){
    $(this).css("text-decoration","")
   })
  
   $(".header_box a").click(function(){
       $(this).css("color","#fff");
   })
  
   $(".content_web>ul>li h3").hover(
       function(){
           console.log(1)
           $(this).find("span").css("transform","translateX(10px)");
       },
       function(){
           $(this).find("span").css("transform","");
       })
   
    // 点击切换header内容下拉框 
    var flag=true;
    function clickF(obj,index){
        obj.click(function(){
            console.log("嘿哈")
            if(flag){
                $(".header_content").slideDown(300);
                $(".header_content>div").eq(index).show().siblings().hide();
                flag=false;
            }else{
                var display=$(".header_content>div").eq(index).css("display");
                if(display=="none"){
                    $(".header_content>div").eq(index).slideDown(300).siblings().slideUp(300);
                }else{
                    $(".header_content").slideUp(300);
                    flag=true;
                }
            }
             $(".header_box a").hover(
                function(){
                $(this).css("text-decoration","none");
               },
               function(){
               $(this).css("text-decoration","none");
            })  
    })
 }
    clickF($(".header-left"),0);
    clickF($(".header-right>a:eq(0)"),1)
    
    // pc导航栏hover效果
    $(".nav_ul>li").hover(
    function(){
        console.log(3)
      $(this).find("em:not(.ems)").addClass("current");
      $(this).find(".ems").css("color","#f66f6a");//动画效果未做
    },
    function(){
        $(this).find("em:not(.ems)").removeClass("current");
        $(this).find(".ems").css("color","");
    })
   

    $(".nav_details_left_ul li").hover(
        function(){
           $(this).find("p").css("color","#f66f6a");
           $(this).find("p>em").css("opacity","1");
        },
        function(){
            $(this).find("p").css("color","");
            $(this).find("p>em").css("opacity","0");
        })
    
        function aFn(objs){
            objs.hover(
                function(){
                   $(this).parent().find("i").css("opacity","1");
                },
                function(){
                    $(this).parent().find("i").css("opacity","0");
                })
        }
       aFn($(".nav_details_left_2>a"));
       aFn($(".nav_details_right a"));
       aFn($(".service_details_a a"));

       function fnz(res){
           res.hover(
            function(){
               $(this).find("em").css("opacity","1");
            },
            function(){
                $(this).find("em").css("opacity","0");
            })
       }
       fnz($(".nav_details_right ul li"));
       fnz($(".service_details_row div ul li"));
      
    //    hover nav内容切换
 
      $(".nav_ul>li").children("div").hide();
        $(" .nav_ul>li:nth-child(-n+2)").hover(
        function(){
          $(this).children("div").show();
        },
        function(){
            $(this).children("div").hide();
         
        })   
         
        // .nav2_row_content内容切换
        $(".nav2_row_content>ul>li:gt(0)").hide();
        $(".nav2_row_tags>ol>li").click(function(){
            console.log(1)
            var index=$(this).index();
            $(this).addClass("actives").siblings().removeClass("actives")
            $(".nav2_row_content>ul>li").eq(index).show().siblings().hide();
            $(this).children("a").css("text-decoration","none");
            
        })
      
    //    点击放大镜，导航条消失
       $(".search_bar").click(function(){
           $(".nav_ul").hide(300);
           $(".search_box").show(300)
           $(this).hide();
           $(".navbar-right i").show();
           $(".mc").show();
       })
       
       $(".navbar-right i").click(function(){
           $(".nav_ul").show(300);
          $(".search_box").hide(300);
           $(this).hide();
           $(".search_bar").show();
           $(".mc").hide();
           $(".search_box").css("border","1px solid #d4d4d4")
       })

       $(".search_box,.search_box_mobile>input").click(function(){
           $(this).css("border","1px solid #337ab7")
       })
      
    //    mobile导航
     $(".search_mobile").click(function(){
         $(".nav_mobile_left,.nav_mobile_right").hide(300);
         $(".search_mobile_box").show(300);
         $(".mc").show();
     })
     
     $(".close").click(function(){
        $(".nav_mobile_left,.nav_mobile_right").show(300);
        $(".search_mobile_box").hide(300);
        $(".mc").hide();
        $(".search_box_mobile>input").css("border","1px solid #d4d4d4")
     })

    //  导航条下拉内容
    $(".btn_mobile_content>ul>li:lt(2)").children(".list_content").hide();
    $(".btn_mobile_content>ul>li:lt(2)").click(function(){
        $(this).children(".list_content").fadeToggle(300);
        $(this).find("p>i").toggleClass("current");
    })
   
   
    $(".btn_mobile_content").hide();
    $(".btn_mobile>ul").click(function(){
       $(".btn_mobile_content").show();
        $(this).hide();
        $(".close1").show();
        $("header").show();

    })
   
    $(".close1").click(function(){
        console.log(5)
        $(".btn_mobile>ul").show();
        $(".btn_mobile_content").hide();
        $(this).hide();
        $("header").hide();
        $(".header_content").hide();
       
    })
    

    // banner轮播图
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自动播放
           autoplay: {
          delay: 1500, //间隔1.5s
        },  
           
        // 如果需要滚动条
        /* scrollbar: {
          el: '.swiper-scrollbar',
        }, */ 

      })     
   
        $(".swiper-container").each(function(index,ele){
        $(this).hover(function() {
            // console.log("暂停")
            // 鼠标移入轮播，关闭自动滚动
            mySwiper[index].autoplay.stop();
           
        }, function() {
             // console.log("开始")
            // 鼠标移出轮播，开始自动滚动       
            mySwiper[index].autoplay.start();
        });
    });  

      /* $(".swiper-container").hover(
        function(){    
        // 鼠标移入轮播，关闭自动滚动
         //   mySwiper.autoplay.stop();  报错Cannot read property 'stop' of undefined
       },
       function(){
           // 鼠标移出轮播的div，开始自动滚动
            mySwiper.autoplay.start();
       }) 
       */
       

    //   点击圆点切换内容
    var w=$(".swiper-wrapper").width();
    console.log(w)
    $(".swiper_circle>span").click(function(){
        console.log("haha")
        var index=$(this).index();
        var k=w*index+w;
        console.log(k)
        console.log(index)
        $(this).addClass("swiper-pagination-bullet-active").siblings().removeClass("swiper-pagination-bullet-active");
       $(".swiper-wrapper").css("transform","translate3d(-"+k+"px, 0px, 0px)")
    })
  
    // 了解更多
    $(".more").hover(
        function(){
        $(this).find("i").addClass("act");
    },
        function(){
        $(this).find("i").removeClass("act");  
        })

    // banner图下的展示区
    $(".banner_list_right>h3>a").hover(
        function(){
        $(this).next("i").show();
        },function(){
        $(this).next("i").hide();
        })   
    

    // 春风行动  未生效
    $(".spring_left").hover(
        function(){
        $(this).find("em").addClass("act");
        $(this).find("img.img0").addClass("cur");
        },
        function(){
        $(this).find("em").removeClass("act");
        $(this).find("img.img0").removeClass("cur");
    })

    function emF(obt){
      obt.hover(
        function(){
            $(this).find("em").addClass("act");
        },
        function(){
            $(this).find("em").removeClass("act");
        })
    
    }
    emF($(".spring_right_bottom"));

        // 优质教育
        emF($(".teach>p"));

        //展会活动
        emF($(".title>p"));
        emF($(".exhibition_content_left"));

        //成功故事
        emF($(".success_content"));

    // 底部
    emF($(".footer_top_1 h3"));

     $(".footer_top ul>li").hover(
        function(){
        $(this).find("i").show();

        },function(){
        $(this).find("i").hide();
        })

//    nav鼠标向上滚动时出现：
      var p=0,t=0;
     $(window).scroll(function(){
       p=$(this).scrollTop();
       if(t<=p){
           console.log("鼠标下滚");
           $(".navbar").css("position","static").css("top","28px");  
       }else{
             console.log("鼠标上滚");
              $(".navbar").css("position","fixed").css("top",0);
              $(".nav_details,.service_details").css("top","65px");
              if(p==0){
                  console.log("到顶了")
                $(".navbar").css("position","static").css("top","28px");  
                $(".nav_details,.service_details").css("top","93px") 
              }
       }
       t=p;

     }) 




})