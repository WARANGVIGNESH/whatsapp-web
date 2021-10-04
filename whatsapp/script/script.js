$(document).ready(function(){

    $("#click").click(function(event){
        if($("#menu1").is(":visible")){  
           $("#menu1").hide();
        }
        else {
         $("#menu1").show();
         }
        event.stopPropagation();
        if($("#menu2").is(":visible")){
         $("#menu2").hide();
        }
     });

     $("body").click(function(){
        if($("#menu1").is(":visible")){
            $("#menu1").hide();
         }
        
     });
     $("#change").click(function(){
         //location.reload(true);
        //var content = $("#whats1");
        $("#whats1").css({"display": "block"});
       $("#pro1").hide();
       //$("#pro1").replaceWith('<section class="whatsapp-container-contact">' + content + '</section>');
    });

     $("#profileclick").click(function(){
        $("#pro1").show();
        $("#whats1").css({"display": "none"});
        //var content = $("#pro1").html();   
       // $(".whatsapp-container-contact").replaceWith('<section class="profile-click">' + content + '</section>');
    });

   

     $("#chat-boxop").bind('contextmenu ', function(e){
        var x= e.clientX + "px";
        var y= e.clientY + "px";
        console.log(x);
        console.log(y);
        $("#menu2").css(
            {
            
        top: y , 
        left: x
    }
        );
      //   if($("#menu2").is(":visible")){
      //       $("#menu2").hide();
      //    }
      //    else {
      //     $("#menu2").show();
      //     }
      $("#menu2").show("slow");
         e.preventDefault();
         e.stopPropagation();  
         if($("#menu1").is(":visible")){
            $("#menu1").hide();
           }
     });
 
     $(document).bind('contextmenu click',function(){
        $("#menu2").hide("slow");
        $("#menu1").hide();
       });

    /* $(".chatbox").bind('contextmenu', function(a){
        var x= a.offsetX + "px";
        var y= a.offsetY + "px";
        console.log(x);
        $("#menu2").css({'top': x , 'left': y});
     });*/
     $(".chat-box").mouseover(function(x){
      $(this).css({"cursor": "pointer","background-color": "#F5F5F5"}).children(".chatname").children(".down-arrow").children(".h4").show();
      x.stopPropagation();
      x.preventDefault();
     });
     $(".chat-box").mouseout(function(m){
      $(this).css({"cursor": "pointer","background-color": "#fff"}).children(".chatname").children(".down-arrow").children(".h4").hide();
      m.stopPropagation();
      m.preventDefault();
     });
     
   //   $(".chat-box").click(function(){
   //    $(this).css({"background-color":"#F5F5F5"});
   //         $(".wallpaper").css({"display": 'block'});
   //         $(".whatsapp-container-chat").hide();

   //   });
     $("#close1").click(function(){
      $(".tempnotification").hide();
      $(".chatbox").css({"height": "82.5vh"});
  });
     
    $("#prochange").click(function(){
      $("#pro1").show();
      $("#whats1").css({"display": "none"});
    });
    
    $(".wallpaper-container-top-content-left").click(function(){
      $(".profileshow").show().css({"width":"672px"});
      $("#inputbar").css({"width": "425px"});
      $(".whatsapp-container-contact").css({"width": "350px"});
      $(".chat-box").css({"padding-left":"10px", "gap":"10px"});
      $(".gap1").css({"padding-right":"50px"});
      $(".h4").css({"padding-right":"50px"});
      $("#menu1").css({"left":"320px"});
      $("#searchName").css({"width":"auto"});
    });
    
     var me=["hi...","enga da iruka","seri kelambi veetuku va","summa thaaan","seri vaa"];
     var mukilan=["solra","home da","iru varen","edhuku da","ok da"];
    $("#chat-boxop .chat-box").click(function(){
      $(".wallpaper").css({"display": 'block'});
      $(".whatsapp-container-chat").hide();
      var pic = $(this).find(".image-box").children().attr("src");
      var names= $(this).find(".chatname-div").children("span").text();
      for(var m=0;m<me.length;m++){
       
         $(".wallpaper-container-middle").append( "<div class='msg-div'>" + '<span class="msg-span">' + me[m] + '</span>'+ "</div>" );
         $(".wallpaper-container-middle").append( "<div class='msg-div1'>" + '<span class="msg-span1">' + mukilan[m] + '</span>'+ "</div>" );
        
      }
      
      // console.log(pic);
      // console.log(names);
      $("#vic1").attr("src",pic);
      $("#named").text(names);
      $("#kumar").attr("src",pic);
      $(".profileshow-container-div2-profile-name").children("span").text(names);
   
   });
   $("#close11").click(function(){
      $(".profileshow").hide();
      $(".whatsapp").show();
      $(".whatsapp-container-chat").css({"width":"936px"});
      $(".whatsapp-container-contact").css({"width":"413px"});
      $("#inputbar").css({"width": "759px"});
      $(".gap1").css({"padding-right":"10px"});
      $(".h4").css({"padding-right":"10px"});
      $("#menu1").css({"left":"380px"});
   });



  $("#searchName").keyup(function(){
   var gopi = [];
      
   var value = $("#searchName").val().toLowerCase();
    console.log(value);  

$(".chatname-div span").filter(function() {
   var a = $(this).text().toLowerCase().indexOf(value) > -1;

   var viewColor;
   var index;
   var index1;   
   var viewColor1;
   var viewMore=[];
if(a){  
   
   $(this).each(function(){
      gopi.push($(this).text());
   });
    
   for(var k = 0;k<gopi.length;k++){
      var indexName=gopi[k].toLowerCase();
      index = indexName.indexOf(value);
      viewColor=gopi[k].substring(0,index)+'<span style="color:#009688 ; font-weight:bolder;">'+gopi[k].substring(index,index+value.length)+'</span>'+gopi[k].slice(index+value.length);
      // viewMore=gopi[k].toLowerCase().slice(index+value.length);
      // index1=viewMore.indexOf(value);
      // viewColor1=viewMore[k].substring(0,index1)+'<span style="color:#009688 ; font-weight:bolder;">'+viewMore[k].substring(index1,index1+value.length)+'</span>'+viewMore[k].slice(index1+value.length);
       $(this).parents(".chat-box").show();
      // console.log(viewColor1);
   }
   
   $(this).html(viewColor); 

}
else{
   $(this).parents(".chat-box").hide();
}
 // split
});
 
  });
 
   $("#click-pro").click(function(){
        $("#whats1").hide();
        $(".new").show();
   }) ;
   $("#change111").css({"cursor":"pointer"}).click(function(){
      $("#whats1").show();
      $(".new").hide();
 }) ;

   $("#inputbar").keypress(function(e){
       var textmsg= $("#inputbar").val();
       console.log(textmsg);
      if(e.keyCode==13){
         
         $(".wallpaper-container-middle").append( "<div class='msg-div'>" + '<span class="msg-span">' + textmsg + '</span>'+ "</div>" );
         $("#inputbar").val("");
      }
   });

});

// function split(view,value){
//       var viewColor;
//       var index=view.indexOf(value);
//       viewColor=view.substring(0,index)+'<span style="color:red">'+view.substring(index,index+value.length)+'</span>'+view.slice(index+value.length);
//       // var thiss= a.html(viewColor);
//       $("body").html(viewColor);
// }
// function pyramid(){
//    var nammm="vicky";
//     for(var i=0;i<nammm.length;i++){
//          for(var j=0;j<=i;j++){
//            console.log(nammm[i]);
//          }
         
         
//     }
   // for (var i = 0; i < 5; i++) {
   //    for (var j = 0; j < i; j++) {
   //      document.write("&nbsp;&nbsp;&nbsp;");
   //    }
   //    for (var j = 5; j > i; j--) {
   //      document.write("#");
   //      if (j > i + 1) document.write("&nbsp;");
   //    }
   //    document.write('<br/>')
   //  }
