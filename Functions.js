  function getsponsersf()
{
document.getElementById("footsponsers").style.visibility='visible';
document.getElementById("footouter").style.visibility='visible';
document.getElementById("exitfooter").style.visibility='visible';
document.getElementById("footsponsers").style.overflow='auto';
}

function getaboutf()
{
document.getElementById("footabout").style.visibility='visible';
document.getElementById("footouter").style.visibility='visible';
document.getElementById("exitfooter").style.visibility='visible';
}

function getcontactf()
{
document.getElementById("footcontact").style.visibility='visible';
document.getElementById("footouter").style.visibility='visible';
document.getElementById("exitfooter").style.visibility='visible';
}

function hidefooter()
{
document.getElementById("footcontact").style.visibility='hidden';
document.getElementById("footouter").style.visibility='hidden';
document.getElementById("footsponsers").style.visibility='hidden';
document.getElementById("footabout").style.visibility='hidden';
document.getElementById("exitfooter").style.visibility='hidden';
document.getElementById("footsponsers").style.overflow='hidden';
document.getElementById("footabout").style.overflow='hidden';
}


  $("div").click(function(){document.getElementById("tb").focus();});
  $("a").click(function(){document.getElementById("tb").focus();})
  $("footer").click(function(){document.getElementById("tb").focus();});

  var lctr=0;
  var rctr=0;
  var ctr=0;
  var xcord=105;
  var i=0.8;

  function displayunicode(e)
  {
   var unicode=e.keyCode? e.keyCode : e.charCode
   if(unicode==40)
    scrollR();
   else if(unicode==38)
    scrollL();
  }

  function bubbles()
  {
    document.getElementById("bwrap").style.visibility='visible';
    $('#bubble1').animate({left: '2vw', top:'12vh'}, 1800);
    $('#bubble2').animate({left: '8vw', top:'47vh'}, 1800);
    $('#bubble3').animate({left: '30vw', top:'21vh'}, 1800);
    $('#bubble4').animate({left: '55vw', top:'15vh'}, 1800);   
    $('#bubble5').animate({left: '30vw', top:'62vh'}, 1800);
    $('#bubble6').animate({left: '56vw', top:'54vh'}, 1800);
    $('#bubble7').animate({left: '77vw', top:'64vh'}, 1800);
    $('#bubble8').animate({left: '76vw', top:'20vh'}, 1800);
  }

  function scrollToTech()
  {
    $('#outer').animate({'left': '-75%'}, 900);
    $('#inner').animate({'left': '-300%'}, 900);
    rctr=3;
    lctr=1;
   
    document.getElementById("bwrap").style.visibility='hidden';
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);
  }

  function scrollR()
  {
 
   document.getElementById("e1").style.display= 'none';
   document.getElementById("e2").style.display= 'none';
   document.getElementById("e3").style.display= 'none';
   document.getElementById("e4").style.display= 'none';
   document.getElementById("e5").style.display= 'none';
   document.getElementById("e6").style.display= 'none';
   document.getElementById("e7").style.display= 'none';
   document.getElementById("e8").style.display= 'none';

   if(rctr==0)
   {
    $('#outer').animate({'left': '-25%'}, 900);
    $('#inner').animate({'left': '-100%'}, 900);
    rctr=1;
    lctr=3;   
    setTimeout(bubbles(), 8000);
   }
   else if(rctr==1)
   {
    $('#outer').animate({'left': '-50%'}, 900);
    $('#inner').animate({'left': '-200%'}, 900);
    rctr=2;
    lctr=2;
    
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);

    $('#moveit').animate({ 'marginLeft' : "0px"});
   }
   else if(rctr==2)
   {

    $('#outer').animate({'left': '-75%'}, 900);
    $('#inner').animate({'left': '-300%'}, 900);
    rctr=3;
    lctr=1;
   
    document.getElementById("bwrap").style.visibility='hidden';
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);

   }
   else if(rctr==3)
   {
    $('#outer').animate({'left': '0%'}, 900);
    $('#inner').animate({'left': '0%'}, 900);
    rctr=0;
    lctr=0; 
   
    document.getElementById("bwrap").style.visibility='hidden';
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);
   }
  }

  function scrollL()
  {

   document.getElementById("e1").style.display= 'none';
   document.getElementById("e2").style.display= 'none';
   document.getElementById("e3").style.display= 'none';
   document.getElementById("e4").style.display= 'none';
   document.getElementById("e5").style.display= 'none';
   document.getElementById("e6").style.display= 'none';
   document.getElementById("e7").style.display= 'none';
   document.getElementById("e8").style.display= 'none';


   if(lctr==0)
   {
    document.getElementById("bwrap").style.visibility='hidden';
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);
    
    $('#outer').animate({'left': '-75%'}, 900);
    $('#inner').animate({'left': '-300%'}, 900);
   
    lctr=1;
    rctr=3;
   }
   else if(lctr==1)
   {
    document.getElementById("bwrap").style.visibility='hidden';
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);
    
    $('#outer').animate({'left': '-50%'}, 900);
    $('#inner').animate({'left': '-200%'}, 900);
   
    lctr=2;
    rctr=2;
  
    $('#moveit').animate({ 'marginLeft' : "0px"});

   }
   else if(lctr==2)
   { 
    $('#outer').animate({'left': '-25%'}, 900);
    $('#inner').animate({'left': '-100%'}, 900);
    lctr=3;
    rctr=1;
 
    setTimeout(bubbles(), 8000);
   }
   else if(lctr==3)
   {
    $('#bubble1').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble2').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble3').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble4').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble5').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble6').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble7').animate({left: '50vw', top:'50vh'}, 1500);
    $('#bubble8').animate({left: '50vw', top:'50vh'}, 1500);
    
    $('#outer').animate({'left': '0%'}, 900);
    $('#inner').animate({'left': '0%'}, 900);

    lctr=0;
    rctr=0;
   }
 
  }  

  if(lctr==rctr)
  {
   
   $(document).ready(function() {

    $('.closeit').click(function() {
        $('#moveit').animate({
         'marginLeft' : "0px"
        });
    });
    $('.closeit').click(function() {
     	$(".events").fadeOut();
    });
});
  }
  

  function getform()
  {
   document.getElementById("tb").focus();
  }

  function info()
  {
   this.style.visibility='hidden';
  }

  function showevents()
  {
   document.getElementById("eventout").style.visibility='visible';
  }

  function showvocal()
  {
   $("#bubble4").click(function(){$("#vocal").fadeIn(2000);});
   $("#bubble4").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextv").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  
  function showquiz()
  {
   $("#bubble3").click(function(){$("#quiz").fadeIn(2000);});
   $("#bubble3").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextq").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  
  function showpersonality()
  {
   $("#bubble8").click(function(){$("#personality").fadeIn(2000);});
   $("#bubble8").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextp").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  
  function showmani()
  {
   $("#bubble7").click(function(){$("#facepaint").fadeIn(2000);});
   $("#bubble7").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextf").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  
  function showmadads()
  {
   $("#bubble6").click(function(){$("#madads").fadeIn(2000);});
   $("#bubble6").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextmd").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }
 
  function showmanfood()
  {
   $("#bubble2").click(function(){$("#manfood").fadeIn(2000);});
   $("#bubble2").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextm").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  } 
  
  function showtreasure()
  {
   $("#bubble5").click(function(){$("#treasure").fadeIn(2000);});
   $("#bubble5").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttextt").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  
  function showextempo()
  {
   $("#bubble1").click(function(){$("#extempo").fadeIn(2000);});
   $("#bubble1").click(function(){$("#exitevents").fadeIn(2000);});
   document.getElementById("abouttexte").style.visibility='visible';
   document.getElementById("eventout").style.visibility='visible';
  }

  function hideevents()
  {
   document.getElementById("vocal").style.display='none';
   document.getElementById("personality").style.display='none';
   document.getElementById("madads").style.display='none';
   document.getElementById("facepaint").style.display='none';
   document.getElementById("quiz").style.display='none';
   document.getElementById("treasure").style.display='none';
   document.getElementById("manfood").style.display='none';
   document.getElementById("extempo").style.display='none';
   document.getElementById("eventout").style.visibility='hidden';
   document.getElementById("exitevents").style.display='none';

   document.getElementById("abouttextm").style.visibility='hidden';
   document.getElementById("abouttextmd").style.visibility='hidden';
   document.getElementById("abouttextp").style.visibility='hidden';
   document.getElementById("abouttextq").style.visibility='hidden';
   document.getElementById("abouttexte").style.visibility='hidden';
   document.getElementById("abouttextv").style.visibility='hidden';
   document.getElementById("abouttextt").style.visibility='hidden';
   document.getElementById("abouttextf").style.visibility='hidden';

   document.getElementById("prizestextm").style.visibility='hidden';
   document.getElementById("prizestextmd").style.visibility='hidden';
   document.getElementById("prizestextp").style.visibility='hidden';
   document.getElementById("prizestextq").style.visibility='hidden';
   document.getElementById("prizestexte").style.visibility='hidden';
   document.getElementById("prizestextv").style.visibility='hidden';
   document.getElementById("prizestextt").style.visibility='hidden';
   document.getElementById("prizestextf").style.visibility='hidden';

   document.getElementById("rulestextm").style.visibility='hidden';
   document.getElementById("rulestextmd").style.visibility='hidden';
   document.getElementById("rulestextp").style.visibility='hidden';
   document.getElementById("rulestextq").style.visibility='hidden';
   document.getElementById("rulestexte").style.visibility='hidden';
   document.getElementById("rulestextv").style.visibility='hidden';
   document.getElementById("rulestextt").style.visibility='hidden';
   document.getElementById("rulestextf").style.visibility='hidden';

   document.getElementById("contacttextm").style.visibility='hidden';
   document.getElementById("contacttextmd").style.visibility='hidden';
   document.getElementById("contacttextp").style.visibility='hidden';
   document.getElementById("contacttextq").style.visibility='hidden';
   document.getElementById("contacttexte").style.visibility='hidden';
   document.getElementById("contacttextv").style.visibility='hidden';
   document.getElementById("contacttextt").style.visibility='hidden';
   document.getElementById("contacttextf").style.visibility='hidden';
  }

  function showaboutv()
  {
   document.getElementById("abouttextv").style.visibility='visible';
   document.getElementById("rulestextv").style.visibility='hidden';
   document.getElementById("prizestextv").style.visibility='hidden';
   document.getElementById("contacttextv").style.visibility='hidden';
  }
  
  function showprizesv()
  {
   document.getElementById("abouttextv").style.visibility='hidden';
   document.getElementById("rulestextv").style.visibility='hidden';
   document.getElementById("prizestextv").style.visibility='visible';
   document.getElementById("contacttextv").style.visibility='hidden';
  }
  
  function showrulesv()
  {
   document.getElementById("abouttextv").style.visibility='hidden';
   document.getElementById("rulestextv").style.visibility='visible';
   document.getElementById("prizestextv").style.visibility='hidden';
   document.getElementById("contacttextv").style.visibility='hidden';
  }
  
  function showcontactv()
  {
   document.getElementById("abouttextv").style.visibility='hidden';
   document.getElementById("rulestextv").style.visibility='hidden';
   document.getElementById("prizestextv").style.visibility='hidden';
   document.getElementById("contacttextv").style.visibility='visible';
  }
  

  function showaboute()
  {
   document.getElementById("abouttexte").style.visibility='visible';
   document.getElementById("rulestexte").style.visibility='hidden';
   document.getElementById("prizestexte").style.visibility='hidden';
   document.getElementById("contacttexte").style.visibility='hidden';
  }
  
  function showprizese()
  {
   document.getElementById("abouttexte").style.visibility='hidden';
   document.getElementById("rulestexte").style.visibility='hidden';
   document.getElementById("prizestexte").style.visibility='visible';
   document.getElementById("contacttexte").style.visibility='hidden';
  }
  
  function showrulese()
  {
   document.getElementById("abouttexte").style.visibility='hidden';
   document.getElementById("rulestexte").style.visibility='visible';
   document.getElementById("prizestexte").style.visibility='hidden';
   document.getElementById("contacttexte").style.visibility='hidden';
  }
  
  function showcontacte()
  {
   document.getElementById("abouttexte").style.visibility='hidden';
   document.getElementById("rulestexte").style.visibility='hidden';
   document.getElementById("prizestexte").style.visibility='hidden';
   document.getElementById("contacttexte").style.visibility='visible';
  }

  
  function showaboutmd()
  {
   document.getElementById("abouttextmd").style.visibility='visible';
   document.getElementById("rulestextmd").style.visibility='hidden';
   document.getElementById("prizestextmd").style.visibility='hidden';
   document.getElementById("contacttextmd").style.visibility='hidden';
  }
  
  function showprizesmd()
  {
   document.getElementById("abouttextmd").style.visibility='hidden';
   document.getElementById("rulestextmd").style.visibility='hidden';
   document.getElementById("prizestextmd").style.visibility='visible';
   document.getElementById("contacttextmd").style.visibility='hidden';
  }
  
  function showrulesmd()
  {
   document.getElementById("abouttextmd").style.visibility='hidden';
   document.getElementById("rulestextmd").style.visibility='visible';
   document.getElementById("prizestextmd").style.visibility='hidden';
   document.getElementById("contacttextmd").style.visibility='hidden';
  }
  
  function showcontactmd()
  {
   document.getElementById("abouttextmd").style.visibility='hidden';
   document.getElementById("rulestextmd").style.visibility='hidden';
   document.getElementById("prizestextmd").style.visibility='hidden';
   document.getElementById("contacttextmd").style.visibility='visible';
  }


  function showaboutp()
  {
   document.getElementById("abouttextp").style.visibility='visible';
   document.getElementById("rulestextp").style.visibility='hidden';
   document.getElementById("prizestextp").style.visibility='hidden';
   document.getElementById("contacttextp").style.visibility='hidden';
  }
  
  function showprizesp()
  {
   document.getElementById("abouttextp").style.visibility='hidden';
   document.getElementById("rulestextp").style.visibility='hidden';
   document.getElementById("prizestextp").style.visibility='visible';
   document.getElementById("contacttextp").style.visibility='hidden';
  }
  
  function showrulesp()
  {
   document.getElementById("abouttextp").style.visibility='hidden';
   document.getElementById("rulestextp").style.visibility='visible';
   document.getElementById("prizestextp").style.visibility='hidden';
   document.getElementById("contacttextp").style.visibility='hidden';
  }
  
  function showcontactp()
  {
   document.getElementById("abouttextp").style.visibility='hidden';
   document.getElementById("rulestextp").style.visibility='hidden';
   document.getElementById("prizestextp").style.visibility='hidden';
   document.getElementById("contacttextp").style.visibility='visible';
  }


  function showaboutt()
  {
   document.getElementById("abouttextt").style.visibility='visible';
   document.getElementById("rulestextt").style.visibility='hidden';
   document.getElementById("prizestextt").style.visibility='hidden';
   document.getElementById("contacttextt").style.visibility='hidden';
  }
  
  function showprizest()
  {
   document.getElementById("abouttextt").style.visibility='hidden';
   document.getElementById("rulestextt").style.visibility='hidden';
   document.getElementById("prizestextt").style.visibility='visible';
   document.getElementById("contacttextt").style.visibility='hidden';
  }
  
  function showrulest()
  {
   document.getElementById("abouttextt").style.visibility='hidden';
   document.getElementById("rulestextt").style.visibility='visible';
   document.getElementById("prizestextt").style.visibility='hidden';
   document.getElementById("contacttextt").style.visibility='hidden';
  }
  
  function showcontactt()
  {
   document.getElementById("abouttextt").style.visibility='hidden';
   document.getElementById("rulestextt").style.visibility='hidden';
   document.getElementById("prizestextt").style.visibility='hidden';
   document.getElementById("contacttextt").style.visibility='visible';
  }


  function showaboutf()
  {
   document.getElementById("abouttextf").style.visibility='visible';
   document.getElementById("rulestextf").style.visibility='hidden';
   document.getElementById("prizestextf").style.visibility='hidden';
   document.getElementById("contacttextf").style.visibility='hidden';
  }
  
  function showprizesf()
  {
   document.getElementById("abouttextf").style.visibility='hidden';
   document.getElementById("rulestextf").style.visibility='hidden';
   document.getElementById("prizestextf").style.visibility='visible';
   document.getElementById("contacttextf").style.visibility='hidden';
  }
  
  function showrulesf()
  {
   document.getElementById("abouttextf").style.visibility='hidden';
   document.getElementById("rulestextf").style.visibility='visible';
   document.getElementById("prizestextf").style.visibility='hidden';
   document.getElementById("contacttextf").style.visibility='hidden';
  }
  
  function showcontactf()
  {
   document.getElementById("abouttextf").style.visibility='hidden';
   document.getElementById("rulestextf").style.visibility='hidden';
   document.getElementById("prizestextf").style.visibility='hidden';
   document.getElementById("contacttextf").style.visibility='visible';
  }


  function showaboutm()
  {
   document.getElementById("abouttextm").style.visibility='visible';
   document.getElementById("rulestextm").style.visibility='hidden';
   document.getElementById("prizestextm").style.visibility='hidden';
   document.getElementById("contacttextm").style.visibility='hidden';
  }
  
  function showprizesm()
  {
   document.getElementById("abouttextm").style.visibility='hidden';
   document.getElementById("rulestextm").style.visibility='hidden';
   document.getElementById("prizestextm").style.visibility='visible';
   document.getElementById("contacttextm").style.visibility='hidden';
  }
  
  function showrulesm()
  {
   document.getElementById("abouttextm").style.visibility='hidden';
   document.getElementById("rulestextm").style.visibility='visible';
   document.getElementById("prizestextm").style.visibility='hidden';
   document.getElementById("contacttextm").style.visibility='hidden';
  }
  
  function showcontactm()
  {
   document.getElementById("abouttextm").style.visibility='hidden';
   document.getElementById("rulestextm").style.visibility='hidden';
   document.getElementById("prizestextm").style.visibility='hidden';
   document.getElementById("contacttextm").style.visibility='visible';
  }

  function showaboutq()
  {
   document.getElementById("abouttextq").style.visibility='visible';
   document.getElementById("rulestextq").style.visibility='hidden';
   document.getElementById("prizestextq").style.visibility='hidden';
   document.getElementById("contacttextq").style.visibility='hidden';
  }
  
  function showprizesq()
  {
   document.getElementById("abouttextq").style.visibility='hidden';
   document.getElementById("rulestextq").style.visibility='hidden';
   document.getElementById("prizestextq").style.visibility='visible';
   document.getElementById("contacttextq").style.visibility='hidden';
  }
  
  function showrulesq()
  {
   document.getElementById("abouttextq").style.visibility='hidden';
   document.getElementById("rulestextq").style.visibility='visible';
   document.getElementById("prizestextq").style.visibility='hidden';
   document.getElementById("contacttextq").style.visibility='hidden';
  }
  
  function showcontactq()
  {
   document.getElementById("abouttextq").style.visibility='hidden';
   document.getElementById("rulestextq").style.visibility='hidden';
   document.getElementById("prizestextq").style.visibility='hidden';
   document.getElementById("contacttextq").style.visibility='visible';
  }
