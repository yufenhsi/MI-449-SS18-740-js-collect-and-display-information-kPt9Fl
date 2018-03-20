var firstnameInput = document.getElementById('FIRST_NAME')
var lastnameInput = document.getElementById('LAST_NAME')
var selfdescInput = document.getElementById('SELF_DESCRIPTION')
var emailInput = document.getElementById('EMAIL_ADDRESS')
var telInput = document.getElementById('PHONE_NUMBER')
var profileRendered = document.getElementById('PROFILE_PREVIEW')
var rawCode = document.getElementById('HTML-CODE')

var updateProfile = function () {
  var FIRST_NAME = firstnameInput.value
  var LAST_NAME = lastnameInput.value
  var SELF_DESCRIPTION = selfdescInput.value
  var EMAIL_ADDRESS = emailInput.value
  var PHONE_NUMBER = telInput.value

  profileRendered.innerHTML =
  rawCode.textContent =
    '<h1>Hi, my name is' + FIRST_NAME + LAST_NAME + '!</h1>' +
    '<p>DESCRIBE_YOURSELF_INFO</p>' + SELF_DESCRIPTION +
    '<p>' +
      'If you\'re interested in a date, you can email me at' +
      '<a href="mailto:EMAIL_ADDRESS" target="_blank">' + EMAIL_ADDRESS + '</a>' +
      'or give me a call at' +
      '<a href="tel:PHONE_NUMBER" target="_blank">' + PHONE_NUMBER + '</a>' +
    '</p>.'
}

firstnameInput.addEventListener('input', updateProfile)
lastnameInput.addEventListener('input', updateProfile)
selfdescInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
telInput.addEventListener('input', updateProfile)
