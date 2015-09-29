function restrainIllegalOperation(){
   document.onkeydown = keyEventHandle;
   document.oncontextmenu = contextEventHandle; 
}  

function keyEventHandle(e) {
    // The information under keys is registered.
    var shift, ctrl, alt;
	
    // Mozilla(Firefox, NN) and Opera
    if (e != null) {
        keycode = e.which;
        ctrl    = typeof e.modifiers == 'undefined' ? e.ctrlKey : e.modifiers & Event.CONTROL_MASK;
        shift   = typeof e.modifiers == 'undefined' ? e.shiftKey : e.modifiers & Event.SHIFT_MASK;
        alt   = typeof e.modifiers == 'undefined' ? e.altKey : e.modifiers & Event.ALT_MASK;
    // Internet Explorer
    } else {
        keycode = event.keyCode;
        ctrl    = event.ctrlKey;
        shift   = event.shiftKey;
        alt     = event.altKey;
    }

    // Ctrl + R
    if((ctrl && keycode == 82) || (ctrl == 17 && keycode == 82)) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }
    
    // Ctrl + F5
    if((ctrl && keycode == 116) || (ctrl == 17 && keycode == 116)) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }
    
    // F5
    if(keycode == 116) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }

	if(keycode == 13) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }
    
    // Alt 
    if((alt && keycode == 37) || (alt == 18 && keycode == 37)) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        }
        return false;
    }

    // ESC
    if(keycode == 27) {
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }

    // BackSpace
    if(keycode == 8) {
        if ((document.activeElement.type == "text") || 
          (document.activeElement.type == "textarea") ||
          (document.activeElement.type == "password") ||
          (document.activeElement.type == "file")) {
            if(!document.activeElement.readOnly) {
                return true;
            }
        }
        // Mozilla(Firefox, NN) and Opera
        if (e != null) {
            // The higher rank propagation of an event is prevented. 
        	e.which = 0;
            e.preventDefault();
            e.stopPropagation();
        // Internet Explorer
        } else {
            // The higher rank propagation of an event is prevented. 
        	event.keyCode = 0;
            event.returnValue = false;
            event.cancelBubble = true;
        }
        return false;
    }

    // Mozilla(Firefox, NN) and Opera
    if (e != null) {
    	// In MacOS, Cmd+R (renewal of a Web page and cash) deters.
    	if (e.metaKey && keycode == 82) {
    		return false;
    	}
    	
    	// In MacOS, it is Cmd+. Control of [(it moves to a front page) 
    	if (e.metaKey && keycode == 219) {
    		return false;
    	}
    } 
} 
function contextEventHandle() {
    return false;
}  

 

	document.onmousedown=disableclick;
status="Right Click is not allowed";
function disableclick(e)
{
if(event.button==2)
{
alert(status);
return false;	
}
}

   var today = new Date();
   var secs = today.getSeconds();
   var secsf = secs + 3600;

   var d = secsf-secs;

   var less=0;
    
   var t=setInterval(timer,1000);  

   function timer()
   {
    /* today = new Date();
     d = secsf-secs;
    secs = today.getSeconds();*/
    d=d-1;
    document.getElementById("timer").innerHTML = "<center>"+d+"</center>";
    if(d<=0)
     {document.getElementById("timer").innerHTML = "<center>Time Up</center>"; document.getElementById("answer").style.visibility="hidden";}
   }



    var i=0;
    var score=0;
    var thisscore=10;

    var sav = new Array();

    sav[0] = "Question 1";
    sav[1] = "Question 2";
    sav[2] = "Quesiton 3";
    sav[3] = "Quesiton 4";
    sav[4] = "Quesiton 5";
    sav[5] = "Quesiton 6";
    sav[6] = "Quesiton 7 : What is the size of the rectangle?";
    sav[7] = "Quesiton 8";
    sav[8] = "Quesiton 9";
    sav[9] = "Quesiton 10";
    sav[10] = "Quesiton 11";
    sav[11] = "Quesiton 12";
    sav[12] = "Quesiton 13";
    sav[13] = "Quesiton 14";
    sav[14] = "Quesiton 15";
    sav[15] = "Quesiton 16";
    sav[16] = "Quesiton 17";
    sav[17] = "Quesiton 18";
    sav[18] = "Quesiton 19";
    sav[19] = "Quesiton 20";
    sav[20] = "Quesiton 21";
    sav[21] = "Quesiton 22";
    sav[22] = "Quesiton 23";
    sav[23] = "Quesiton 24";
    sav[24] = "Quesiton 25";


    var jaw = new Array();

    jaw[0] = "google";
    jaw[1] = "1";
    jaw[2] = "seven";
    jaw[3] = "mississippi";
    jaw[4] = "keyboard";
    jaw[5] = "bitcoins";
    jaw[6] = "300x200";
    jaw[7] = "ramanujam";
    jaw[8] = "toblerone";
    jaw[9] = "googledoodle";
    jaw[10] = "stickykey";
    jaw[11] = "catull";
    jaw[12] = "Answer 13:";
    jaw[13] = "Answer 14:";
    jaw[14] = "Answer 15:";
    jaw[15] = "Answer 16:";
    jaw[16] = "Answer 17:";
    jaw[17] = "Answer 18:";
    jaw[18] = "Answer 19:";
    jaw[19] = "Answer 20:";
    jaw[20] = "Answer 21:";
    jaw[21] = "Answer 22:";
    jaw[22] = "Answer 23:";
    jaw[23] = "Answer 24:";
    jaw[24] = "Answer 25:";

    document.write(sav[0]);

    
    var chit = new Array();

    chit[0] = "image.jpg";
    chit[1] = "image2.jpg";
    chit[2] = "image3.jpg";
    chit[3] = "image4.jpg";
    chit[4] = "image5.jpg";
    chit[5] = "image6.jpg";
    chit[6] = "image7.jpg";
    chit[7] = "image8.jpg";
    chit[8] = "image9.jpg";
    chit[9] = "image10.jpg";
    chit[10] = "image11.jpg";
    chit[11] = "Image12.jpg";
    chit[12] = "image13.jpg";
    chit[13] = "image14.jpg";
    chit[14] = "image15.jpg";
    chit[15] = "image16.jpg";
    chit[16] = "image17.jpg";
    chit[17] = "image18.jpg";
    chit[18] = "image19.jpg";
    chit[19] = "image20.jpg";
    chit[20] = "image21.jpg";
    chit[21] = "image22.jpg";
    chit[22] = "image23.jpg";
    chit[23] = "image24.jpg";
    chit[24] = "image25.jpg";
    var saathi = new Array();

    saathi[0] = "Shift words !!";
    saathi[1] = "It's a binary number !!";
    saathi[2] = "No hint is there";
    saathi[3] = "It's a name of a river";
    saathi[4] = "No hint is there";
    saathi[5] = "No hint is there";
    saathi[6] = "Answer it in pixels";
    saathi[7] = "No hint is there";
    saathi[8] = "Matter horn";
    saathi[9] = "No hint is there";
    saathi[10] = "No hint is there";
    saathi[11] = "No hint is there";
    saathi[12] = "No hint is there";
    saathi[13] = "No hint is there";
    saathi[14] = "No hint is there";
    saathi[15] = "Predecessor of the company logo";
    saathi[16] = "No hint is there";
    saathi[17] = "No hint is there";
    saathi[18] = "No hint is there";
    saathi[19] = "Name of the effect";
    saathi[20] = "His Full Name";
    saathi[21] = "Google";
    saathi[22] = "Allows Users to run Programs with the security privileges of another user";
    saathi[23] = "Motto";
    saathi[24] = "Best Of Luck!!!";    
   
    function showh()
    {
     document.getElementById("hbutton").style.visibility = 'hidden';
     document.getElementById("htext").style.visibility = 'visible';
     document.getElementById("htext").innerHTML=saathi[i];
     thisscore=5;
    }

    function incque(form)
    {
     var ip = form.ip.value;
     if(ip == jaw[i])
      {
       i++;
       thisscore=10;
	   document.getElementById("questions").innerHTML = sav[i];
       document.getElementById("imm").src = chit[i];
       score = score+thisscore;
       document.getElementById("sdisplay").innerHTML = "<center> SCORE <br />"+score+"</center>";
       
       document.getElementById("hbutton").style.visibility = 'visible';
       document.getElementById("htext").style.visibility = 'hidden';
       document.getElementById("ip").value="";
      }
 
      if(i==12)
       {
        document.getElementById("answer").style.visibility="hidden";
        document.getElementById("questions").style.visibility="hidden";
        document.getElementById("image").style.visibility="hidden";
        document.getElementById("hint").style.visibility="hidden";
        document.getElementById("outer").innerHTML='<span style="position: absolute; top: 180px; left: 200px; height:0%; width:0%; background-color:rgba(0,0,0,0.4); font:340pt arial; color:white;">'+score +'</span>';
        document.getElementById("outer").innerHTML='<span style="position: absolute; top: 70px; left: 100px; height:0%; width:0%; background-color:rgba(0,0,0,0.4); font:120pt arial; color:white;">'+'Your Score'+'<br />'+score+'</span>';
       }
    }
