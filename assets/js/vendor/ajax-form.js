$(function() {

	// FormSubmit endpoint - free, no signup required
	var FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/growthroots2020.eg@gmail.com';

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('#form-messages');
	if (formMessages.length && window.location.search.indexOf('sent=1') !== -1) {
		var currentLang = localStorage.getItem('siteLanguage') || 'en';
		var isArabic = currentLang === 'ar';
		var successMsg = isArabic
			? '✅ شكراً لك! تم إرسال رسالتك بنجاح.'
			: '✅ Thank you! Your message has been sent successfully.';
		formMessages.removeClass('error alert-danger').addClass('success alert-success').text(successMsg);
	}

	if (form.length) {
		var action = (form.attr('action') || '').trim();
		// If the form has an external action (e.g., FormSubmit), do not intercept.
		if (action.indexOf('http') === 0) {
			return;
		}
	}

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Get current language
		var currentLang = localStorage.getItem('siteLanguage') || 'en';
		var isArabic = currentLang === 'ar';

		// Collect form data
		var formDataObj = {
			_subject: isArabic ? 'رسالة جديدة من موقع Growth Roots' : 'New message from Growth Roots website',
			_template: 'table',
			name: $('#name').val() || $('#contact-form input[name="name"]').val(),
			email: $('#email').val() || $('#contact-form input[name="email"]').val(),
			info: $('#info').val() || $('#contact-form input[name="info"]').val(),
			message: $('#message').val() || $('#contact-form textarea[name="message"]').val()
		};

		// Submit the form using AJAX to FormSubmit
		$.ajax({
			type: 'POST',
			url: FORMSUBMIT_ENDPOINT,
			data: JSON.stringify(formDataObj),
			contentType: 'application/json',
			dataType: 'json'
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
