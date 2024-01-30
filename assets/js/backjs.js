var url = "https://No3yTk2Y65xG.org/"; 
  
$( document ).ready(function() {     
	/*------------------------Career Form start----------------------*/
	$("#btnCarrerForm").click(function() { 	
    	 var career_form = $("#career_form").valid(); 
    	 if(career_form) {
			 var formData = new FormData(document.getElementById("career_form")); 
		    $.ajax({
		        type: 'POST',
		        url: url+"Front/careerInsertData",
		        data:formData,
		        contentType: false,
		        processData: false, 
				cache:false,
				async:false,
		        success: function(data){
		           
					if(data=="success")
					{
						//alert("successfully Added");
						$('.alert-success').fadeIn().html("Submitted Successfully.");	
						  setTimeout(function(){  
							location.reload();	
						  }, 3000);
							
					}
					else
					{
						$('.alert-danger').html("Something Wents Wrong").fadeIn('slow');
						  setTimeout(function(){  
							location.reload();	
						  }, 3000);
					}
		        }
		      
		       });
    	 }
    });
	
	
    // $("#btnEnq").click(function() { 	
    	 // var contactus_form = $("#contactus_form").valid(); 
    	 // if(contactus_form) {
			 // var formData = new FormData(document.getElementById("enq_form")); 
		    // $.ajax({
		        // type: 'POST',
		        // url: url+"Front/contactUsInsertData",
		        // data:formData,
		        // contentType: false,
		        // processData: false, 
				// cache:false,
				// async:false,
		        // success: function(data){
		          // alert(data);
					// if(data=="success")
					// {
						// $('.alert-success').fadeIn().html("Submitted Successfully.");	
						  // setTimeout(function(){  
							// location.reload();	
						  // }, 3000);
							
					// }
					// else
					// {
						// $('.alert-danger').html("Something Wents Wrong").fadeIn('slow');
						  // setTimeout(function(){  
							// location.reload();	
						  // }, 3000);
					// }
		        // }
		      
		       // });
    	// }
    // });
});
/*-------------------------------------------------------------------------------------------*/
