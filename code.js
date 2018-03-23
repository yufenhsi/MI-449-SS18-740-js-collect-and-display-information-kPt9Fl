var firstNameInput = document.getElementById('firstname')
var lastNameInput = document.getElementById('lastname')
var selfDescInput = document.getElementById('description')
var emailAddressInput = document.getElementById('email')
var phoneNumberInput = document.getElementById('phNo')
var profileRendered = document.getElementById('profile')
var rawCode = document.getElementById('code')

var updateProfile = function () {
  var firstname = firstNameInput.value
  var lastname = lastNameInput.value
  var description = selfDescInput.value
  var email = emailAddressInput.value
  var phNo = phoneNumberInput.value

  profileRendered.innerHTML =
    rawCode.textContent =
    '<h1>Hi, my name is ' + firstname + ' ' + lastname + '!</h1>' +
    '<p>DESCRIBE_YOURSELF_INFO ' + description + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
      ' or give me a call at ' +
      '<a href="tel:' + phNo + '" target="_blank">' + phNo + '</a>' +
    '</p>'
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
selfDescInput.addEventListener('input', updateProfile)
emailAddressInput.addEventListener('input', updateProfile)
phoneNumberInput.addEventListener('input', updateProfile)
