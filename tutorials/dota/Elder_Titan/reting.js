window.onload = function(){
    if(localStorage.getItem('v_b')!=null){
         v_b=localStorage.getItem('v_b');
           document.getElementById('result_v_b').innerText=v_b;  
       }
       if(localStorage.getItem('b')!=null){
         b=localStorage.getItem('b');
           document.getElementById('result_b').innerText=b; 
       }
       if(localStorage.getItem('s')!=null){
         s=localStorage.getItem('s');
       document.getElementById('result_s').innerText=s; 
       }
       if(localStorage.getItem('g')!=null){
         g=localStorage.getItem('g');
           document.getElementById('result_g').innerText=g; 
       }
       if(localStorage.getItem('v_g')!=null){
         v_g=localStorage.getItem('v_g');
           document.getElementById('result_v_g').innerText=v_g; 
       }
       if(localStorage.getItem('ssd')!=null){
        ssd=localStorage.getItem('ssd')
        document.getElementById("submit").style.display=ssd;
      }
      if(localStorage.getItem('rsd')!=null){
       rsd=localStorage.getItem('rsd')
       document.getElementById("reset").style.display=rsd;
     }

}
function hide(){
    var submit=document.getElementById("submit");
    var reset=document.getElementById("reset");
    if(submit.style.display !='none'){
        submit.style.display ="none";
        reset.style.display ="block";
    }
    else{
        submit.style.display  ="block";
        reset.style.display ="none";
    }
    ssd=submit.style.display;
    rsd=reset.style.display;
    localStorage.setItem('ssd', ssd);
    localStorage.setItem('rsd', rsd);

}
function disabled(){  
document.getElementById("radio-1").disabled = true;
document.getElementById("radio-2").disabled = true;
document.getElementById("radio-3").disabled = true;
document.getElementById("radio-4").disabled = true;
document.getElementById("radio-5").disabled = true;
}  
function abled(){  
    document.getElementById("radio-1").disabled = false;
    document.getElementById("radio-2").disabled = false;
    document.getElementById("radio-3").disabled = false;
    document.getElementById("radio-4").disabled = false;
    document.getElementById("radio-5").disabled = false;
    }   
function check(){
var radio=document.getElementsByName('radio');
   if (radio[0].checked) {
       r_v_b=++document.getElementById('result_v_b').innerText;
       localStorage.setItem('v_b', r_v_b); 
       disabled();
     /*  $.ajax({
           type:"POST",
           url:"grow_v_b.php",
           data:this.serialize()
       })*/
   } 
   if (radio[1].checked) {
       r_b=++document.getElementById('result_b').innerText;
      localStorage.setItem('b', r_b);
      disabled();
    /*  $.ajax({
        type:"POST",
        url:"grow_b.php",
        data:this.serialize()
    })*/
    }
   if (radio[2].checked) {
       r_s=++document.getElementById('result_s').innerText;
       localStorage.setItem('s', r_s); 
       disabled();
     /*  $.ajax({
        type:"POST",
        url:"grow_s_s.php",
        data:this.serialize()
    })*/
    }
   if (radio[3].checked) {
       r_g=++document.getElementById('result_g').innerText;
       localStorage.setItem('g', r_g);
       disabled();
   /*    $.ajax({
        type:"POST",
        url:"grow_g.php",
        data:this.serialize()
    })*/
    }
   if (radio[4].checked) {
       r_v_g=++document.getElementById('result_v_g').innerText;
      localStorage.setItem('v_g', r_v_g);
      disabled();
    /*  $.ajax({
        type:"POST",
        url:"grow_v_g.php",
        data:this.serialize()
    })*/
   }
   hide();
}
function escaped(){
var radio=document.getElementsByName('radio');
   if (radio[0].checked) {
       r_v_b=--document.getElementById('result_v_b').innerText;
       localStorage.setItem('v_b', r_v_b); 
       document.getElementById("radio-1").disabled = false;
   /*    $.ajax({
        type:"POST",
        url:"decrease_v_b.php",
        data:this.serialize()
    })*/
   } 
   if (radio[1].checked) {
       r_b=--document.getElementById('result_b').innerText;
      localStorage.setItem('b', r_b);
      document.getElementById("radio-2").disabled = false;
     /* $.ajax({
        type:"POST",
        url:"decrease_b.php",
        data:this.serialize()
    })*/
    }
   if (radio[2].checked) {
       r_s=--document.getElementById('result_s').innerText;
       localStorage.setItem('s', r_s); 
       document.getElementById("radio-3").disabled = false;
    /*   $.ajax({
        type:"POST",
        url:"decrease_s_s.php",
        data:this.serialize()
    })*/
    }
   if (radio[3].checked) {
       r_g=--document.getElementById('result_g').innerText;
       localStorage.setItem('g', r_g);
       document.getElementById("radio-4").disabled = false;
     /*  $.ajax({
        type:"POST",
        url:"decrease_g.php",
        data:this.serialize()
    })*/
    }
   if (radio[4].checked) {
       r_v_g=--document.getElementById('result_v_g').innerText;
      localStorage.setItem('v_g', r_v_g);
      document.getElementById("radio-5").disabled = false;
    /*  $.ajax({
        type:"POST",
        url:"decrease_v_g.php",
        data:this.serialize()
    })*/
   }
   abled();
   hide();
}
