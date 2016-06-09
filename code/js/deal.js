// JavaScript Document

$(document).ready(function() {



/*$("#clickme" ).on("click",function() {

	//

	$( "#div1" ).slideToggle("slow");

	

});*///end of login toogle function

$("#clickme" ).mouseenter(function() {

	//
$("#popup").slideUp();
	$( "#div1" ).slideToggle("slow");

	

});
$("#div1" ).mouseleave(function() {
	//
	$( "#div1" ).slideToggle("slow");
	
});
/*$("#clickme" ).mouseleave(function() {

	//

	$( "#div1" ).slideToggle("slow");

	

});*/
$("#popup" ).mouseleave(function() {
$( "#popup" ).slideToggle(700);
});
$("#clcksignup" ).mouseenter(function() {

	//alert(123);
$( "#div1" ).slideUp();
	$( "#popup" ).slideToggle(700);

	

});

$(".cross" ).click(function() {

	//alert(123);

	$( "#popup" ).slideToggle(700);

	

});



//end of sign up toogle function

$("#profdisplay" ).click(function() {

	//alert(123);

	$( ".user_login_div" ).slideToggle(300);

	

});//end of Profile toogle function

$(".all" ).click(function() {

	//alert(123);

	$( ".all_menu" ).slideToggle(300);

	

});/////end of all menu function list





/*/////////////////Error Message Clear Function//////////*/

$("#nam" ).keyup(function() {

	$('.nm').removeClass('error');

});

$("#user_name" ).keyup(function() {

	$('.unam').removeClass('error');

});

$("#pass" ).keyup(function() {

	$('.pas').removeClass('error');

});

$("#email" ).keyup(function() {

	$('.eid').removeClass('error');

	$('.txt').html();

});

$("#sex" ).click(function() {

	$('.gender').removeClass('error');

	

});

$("#terms" ).click(function() {

	$('.trm').removeClass('error');

	

});



/*/////////////////Error Message Clear Function//////////*/

$("#signup" ).submit(function(e) {

	e.preventDefault();

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	var err='';	

	if( $('#nam').val()== "")

		{

			$('.nm').addClass('error');

			$('#nam').focus();

			return false;

		}

		if( $('#user_name').val()== "")

		{

			$('.unam').addClass('error');

			$('#user_name').focus();

			return false;

		}

			if( $('#pass').val()== "")

		{

			$('.pas').addClass('error');

			$('#pass').focus();

			return false;

		}

			if( $('#email').val()== "")

		{

			$('.eid').addClass('error');

			$('.txttt').html('This field is require');

			$('#email').focus();

			return false;

		}

			if(reg.test($('#email').val())==false)

		{

			$('.eid').addClass('error');

			$('.txttt').html('This is not a valid Email');

			$('#email').focus();

			return false;

		}

	/*	if($('input[name=sex]:checked').length<=0)

 		 {

			 $('.gender').addClass('error');

			 $("#sex").focus();

			   return false;

		 }*/

		if($('input[name=terms]:checked').length<=0)

		{

			$('.trm').addClass('error');

			 $("#terms").focus();

			 return false;

		}

		$('#respon').html('<img src="images/loder.png" alt="Loding..." />');

			  $.ajax({

				   type: 'POST',

           		   cache: false,

				   url: 'ajax.php?action=SignUp',

				   data: $("#signup").serialize(), 

				   success: function(htm)

				   {

					 $('#respon').html(htm); 

					 $( "#popup" ).delay(2000).slideToggle(700);

					 $("#signup")[0].reset();

					 $('#respon').fadeOut(3000);

				   }

				});

				return false;

				

});//end of sign up function

/*////////Remove error Message from share deal page/////*/

$("#deal_url" ).keyup(function() {

	$('.dealurl').removeClass('error');

	$('.del_text').html();

});

$("#deal_price" ).keyup(function() {

	$('.dealprice').removeClass('error');

	$('.del_price').html();

});

/*$("#deal_title" ).keyup(function() {

	$('.dealdealtitle').removeClass('error');

});*/

$("#deal_topic" ).change(function() {

	$('.del_topic').removeClass('error');

});

/*////////Generate error Message from share deal page/////*/

$("#share_frm" ).submit(function(e) {

	

	 var url = $("#deal_url").val();



    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

	

	 var topic=$('#deal_topic option:selected').val();

	 

		var tal = $("#deal_price").val();

		

		var num = $("#deal_price").data('boks');

		

		if( $('#deal_url').val()== "")

		{

			$('.dealurl').addClass('error');

			$(".del_text").html('This field is require');

			$('#deal_url').focus();

			return false;

		}

		if (!pattern.test(url))

		{

			$('.dealurl').addClass('error');

			$(".del_text").html('Please type a valid url');

			$('#deal_url').focus();

			return false;

		}

		if( $('#deal_title').val()== "")

		{

			$('.dealdealtitle').addClass('error');

			$('#deal_title').focus();

			return false;

		}

			if( $('#deal_price').val()== "")

		{

			$('.dealprice').addClass('error');

			$(".del_price").html('This field is require');

			$('#deal_price').focus();

			return false;

		}

		if(isNaN(tal)) {

		var tal = 0;

		$('.dealprice').addClass('error');

		$(".del_price").html('Not a Number');

			$('#deal_price').focus();

			return false;

		}

		if(topic=="")

		{

			$('.del_topic').addClass('error');

			$('#deal_topic').focus();

			return false;

		}

		

});









$("#clikcoment" ).click(function(e) {

	//alert(123);

	$(body).scrollTo('#ccc');

});

  $("#datepicker").datepicker({	

    numberOfMonths: 1,

        onSelect: function(selected) {

          $("#datepicker1").datepicker("option","minDate", selected)

        }

    });

    $("#datepicker1").datepicker({

        numberOfMonths: 1,

	        onSelect: function(selected) {

	           $("#datepicker").datepicker("option","maxDate", selected)

        }



	    }); 

$(".success,.info,.warning,.s-error").html($(".success,.info,.warning,.s-error").html()+"<a style=\"float:right;color:#000; cursor:pointer\" id=\"close\">X</a>");

	

$("#close" ).click(function(e) {

	$(".success,.info,.warning,.s-error").fadeOut();

});

$(".success,.info,.warning,.s-error" ).click(function(e) {

	$(".success,.info,.warning,.s-error").fadeOut();

});

////////////////vote for hot or cold

$(".hot" ).click(function(e) {

	 $deal_id=this.id;

	 

	 $.ajax({

	 type: 'GET',

     cache: false,

	 url: 'ajax.php',

	 dataType : 'html',

	 data: {deal_id :$deal_id,action:"vote-for-hot"},

	 success: function(htm){

		// alert(htm);

		$(".h_"+$deal_id).css("cursor","not-allowed"); 

		 $("#gethot_"+$deal_id).html(htm);

		$(".v_"+$deal_id).delay(1000).addClass("voting-controls-opacity");

	 }

	 });

});



$(".cold" ).click(function(e) {

	 $deal_id=this.id;

	 

	 $.ajax({

	 type: 'GET',

     cache: false,

	 url: 'ajax.php',

	 dataType : 'html',

	 data: {deal_id :$deal_id,action:"vote-for-cold"},

	 success: function(htm){

		 

		 $(".h_"+$deal_id).css("cursor","not-allowed"); 

	    $("#gethot_"+$deal_id).html(htm);

		$(".v_"+$deal_id).delay(1000).addClass("voting-controls-opacity");

	 }

	 });

});



$("#news_letter" ).submit(function(e) {

	 e.preventDefault();

	 $('#res').html('<img src="images/loder.png" alt="Loding..." />');//alert(123);

	 $.ajax({

	 type: 'POST',

     cache: false,

	 url: 'ajax.php?action=newsletter',

	 dataType : 'html',

	 data: $("#news_letter").serialize(),

	 success: function(data){//alert(data);

		 if(data==0)

		 {

			$('#res').addClass("s-error").html("Already Subscribed"); 

		 }

		 if(data==1)

		 {

			$('#res').removeClass('s-error').addClass("success").html("Subscribed Successfully");  

		 }

     //$('#res').html(htm);

	 }

	 });

	 /*return false;*/

	});

	$("#clickimg" ).click(function() {

 //alert(123);

 $( ".description" ).slideToggle(500);

});

$("#clickimg_1" ).click(function() {

 //alert(123);

 $( ".location" ).slideToggle(500);

});



$("#prof_pic" ).change(function(e) { 

	 e.preventDefault();

	 // create a FormData Object using your form dom element

   var form = new FormData(document.getElementById('prof_pic'));

   //append files

   var file = document.getElementById('profile_picture').files[0];

    if (file) {   

        form.append('profile_picture', file);

    }

	$("#prof_img").addClass("pic_loder").attr("src","images/loder.GIF");

	$(".ed_pic").hide();

	$("#prof_pic").hide();

	  $.ajax({

	 type: 'POST',

     cache: false,

	 url: 'ajax.php?action=profileicon',

	 data: form,

	 dataType:"json",

	 contentType: false, //must, tell jQuery not to process the data

     processData: false, //must, tell jQuery not to set contentType

	 success: function(data){

		 

		 //alert(data['im']);

	

		$("#prof_img").removeClass("pic_loder").attr("src",data['im_url']);

		$("#himg").val(data['im']);

		$("#prof_pic").show().mouseenter(function(){$(".ed_pic").show()}).mouseleave(function(){$(".ed_pic").hide()}); $("#prof_pic")[0].reset();

	 }

	 });

	 return false;

});

$("#d_save").click(function(){

	$desc=$("#desc").val();

$.ajax({

	 type: 'GET',

	 url: 'ajax.php',

	 dataType : 'html',

	 data: {descr:$desc,action:"description"},

	 success: function(data){//alert(data);

	 $(".title_tag").html(data);

	  $( ".description" ).slideToggle(500);

	 }

  });

  

  

});





$("#l_save").click(function(){

	$loc=$("#loc").val();

$.ajax({

	 type: 'GET',

	 url: 'ajax.php',

	 dataType : 'html',

	 data: {loc:$loc,action:"location"},

	 success: function(data){//alert(data);

	 $("#ltext").html(data);

	 $( ".location" ).slideToggle(500);

	 }

  });

  

  

});



$(".contact_form" ).submit(function(e) {

	e.preventDefault();

	$('#resn').html('<img src="images/loder.png" alt="Loding..." />');

			  $.ajax({

				   type: 'POST',

           		   cache: false,

				   url: 'ajax.php?action=contact',

				   data: $(".contact_form").serialize(), 

				   success: function(data)

				   {

					  // alert(data);

					 $('#resn').addClass('success').html(data); 

					 $(".contact_form")[0].reset();

					$('#respon').fadeOut(3000);

				   }

				});

				return false;

	

});



});//end document ready function 