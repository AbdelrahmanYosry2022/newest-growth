$(function() {
	var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

	window.initContactForm = function() {
		var form = $('#contact-form');
		if (!form.length) return;

		var formMessages = $('#form-messages');
		if (formMessages.length && window.location.search.indexOf('sent=1') !== -1) {
			var currentLang = localStorage.getItem('siteLanguage') || 'en';
			var isArabic = currentLang === 'ar';
			var successMsg = isArabic
				? '✅ شكراً لك! تم إرسال رسالتك بنجاح.'
				: '✅ Thank you! Your message has been sent successfully.';
			formMessages.removeClass('error alert-danger').addClass('success alert-success').text(successMsg);
		}

		// Prevent multiple bindings
		form.off('submit').on('submit', function(e) {
			e.preventDefault();

			var currentLang = localStorage.getItem('siteLanguage') || 'en';
			var isArabic = currentLang === 'ar';

			var formDataObj = {
				access_key: 'bf154380-92be-4579-ac80-8932d30b694e',
				subject: isArabic ? 'رسالة جديدة من موقع Growth Roots' : 'New message from Growth Roots website',
				name: $('#name').val() || $('#contact-form input[name="name"]').val(),
				email: $('#email').val() || $('#contact-form input[name="email"]').val(),
				phone: $('#phone').val() || $('#contact-form input[name="phone"]').val(),
				country: $('#country').val() || $('#contact-form input[name="country"]').val(),
				message: $('#message').val() || $('#contact-form textarea[name="message"]').val()
			};

			var submitBtn = $(this).find('button[type="submit"]');
			var submitBtnText = submitBtn.text();
			var loadingText = isArabic ? 'جاري الإرسال...' : 'Sending...';
			
			submitBtn.prop('disabled', true).text(loadingText);
			$(formMessages).removeClass('success alert-success error alert-danger').text('');

			$.ajax({
				type: 'POST',
				url: WEB3FORMS_ENDPOINT,
				data: JSON.stringify(formDataObj),
				contentType: 'application/json',
				dataType: 'json'
			})
			.done(function(response) {
				$(formMessages).removeClass('error alert-danger').addClass('success alert-success');
				var successMsg = isArabic 
					? '✅ شكراً لك! تم إرسال رسالتك بنجاح.' 
					: '✅ Thank you! Your message has been sent successfully.';
				$(formMessages).text(successMsg);

				$('#contact-form input:not([type="hidden"]),#contact-form textarea').val('');
				submitBtn.prop('disabled', false).text(submitBtnText);

				setTimeout(function() {
					$(formMessages).text('').removeClass('success alert-success');
				}, 5000);
			})
			.fail(function(data) {
				$(formMessages).removeClass('success alert-success').addClass('error alert-danger');
				var errorMsg = isArabic 
					? '❌ عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.' 
					: '❌ Sorry, there was an error. Please try again.';
				$(formMessages).text(errorMsg);
				submitBtn.prop('disabled', false).text(submitBtnText);
			});
		});
	};

	// Initialize on page load
	window.initContactForm();
});
