var firstnameInput = document.getElementById('firstname')
var lastnameInput = document.getElementById('lastname')
var selfdescInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var telInput = document.getElementById('tel')
var madlibParagraph = document.getElementById('madlib')
var paragraph = document.getElementById('my-paragraph')

var updateMadlib = function () {
  var firstname = firstnameInput.value
  var lastname = lastnameInput.value
  var description = selfdescInput.value
  var email = emailInput.value
  var tel = telInput.value

  madlibParagraph.innerHTML =
  paragraph.textContent =
    'Hi, my name is' +
    '&nbsp;<strong>' + firstname + '</strong>' +
    '&nbsp;<strong>' + lastname + '</strong>' +
    '<pre>' + description + '</pre>' +
    'If you\'re interested in a date, you can email me at' +
    '&nbsp;<a href="mailto:EMAIL_ADDRESS" target="_blank">' + email + '</a>' +
    '&nbsp;or give me a call at' +
    '&nbsp;<a href="tel:PHONE_NUMBER" target="_blank">' + tel + '</a>' +
    '<p>Good Day!</p>'
}

firstnameInput.addEventListener('input', updateMadlib)
lastnameInput.addEventListener('input', updateMadlib)
selfdescInput.addEventListener('input', updateMadlib)
emailInput.addEventListener('input', updateMadlib)
telInput.addEventListener('input', updateMadlib)
