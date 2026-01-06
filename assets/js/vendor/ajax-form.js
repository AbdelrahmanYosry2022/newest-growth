$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Get current language
		var currentLang = localStorage.getItem('siteLanguage') || 'en';
		var isArabic = currentLang === 'ar';

		// Create FormData for Netlify
		var formData = new FormData(form[0]);
		formData.append('form-name', 'contact');

		// Submit the form using AJAX to Netlify Forms.
		$.ajax({
			type: 'POST',
			url: '/',
			data: new URLSearchParams(formData).toString(),
			contentType: 'application/x-www-form-urlencoded'
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error alert-danger');
			$(formMessages).addClass('success alert-success');

			// Set the message text.
			var successMsg = isArabic 
				? '✅ شكراً لك! تم إرسال رسالتك بنجاح.' 
				: '✅ Thank you! Your message has been sent successfully.';
			$(formMessages).text(successMsg);

			// Clear the form.
			$('#contact-form input:not([type="hidden"]),#contact-form textarea').val('');

			// Auto-hide after 5 seconds
			setTimeout(function() {
				$(formMessages).text('').removeClass('success alert-success');
			}, 5000);
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success alert-success');
			$(formMessages).addClass('error alert-danger');

			// Set the message text.
			var errorMsg = isArabic 
				? '❌ عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.' 
				: '❌ Sorry, there was an error. Please try again.';
			$(formMessages).text(errorMsg);
		});
	});

});
