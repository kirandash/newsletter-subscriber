jQuery(document).ready(function($) {

	$('#subscriber-form').submit(function(e){
		e.preventDefault();
		
		// Serialize form
		var subscriberData = $('#subscriber-form').serialize();
		
		// Submit Form
		$.ajax({
			type: 'post',
			url: $('#subscriber-form').attr('action'),
			data: subscriberData
		}).done(function(response){
			// If success
			$('#form-msg').removeClass('error');
			$('#form-msg').addClass('success');
			
			// Set Message text
			$('#form-msg').text(response);
			
			// Clear Fields
			$('#name').val('');
			$('#email').val('');
		}).fail(function(){
			// If Error
			$('#form-msg').removeClass('success');
			$('#form-msg').addClass('error');
			
			if(data.responseText != ''){
				// Set Message text
				$('#form-msg').text(response);	
			} else {
				$('#form-msg').text('Message was not sent');
			}
						
		});
		
	});
});