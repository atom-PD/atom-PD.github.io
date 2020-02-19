window.addEventListener('load', function() {

  Pushwoosh.push(function(api) {
    console.log('EVENT: onReady', api);
  });

  Pushwoosh.push(['onReady', function(api) {
    console.log('EVENT: onReady alternative', api);
  }]);

  Pushwoosh.push(['onSubscribe', function(api) {
    console.log('EVENT: onSubscribe', api);
  }]);

  Pushwoosh.push(['onUnsubscribe', function(api) {
    console.log('EVENT: onUnsubscribe', api);
  }]);

  Pushwoosh.push(['onRegister', function(api) {
    console.log('EVENT: onRegister', api);
  }]);

  Pushwoosh.push(['onPermissionPrompt', function(api) {
    console.log('EVENT: onPermissionPrompt', api);
  }]);

  Pushwoosh.push(['onPermissionDenied', function(api) {
    console.log('EVENT: onPermissionDenied', api);
  }]);

  Pushwoosh.push(['onPermissionGranted', function(api) {
    console.log('EVENT: onPermissionGranted', api);
  }]);

  document.querySelector('#registerUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var input = form.querySelector('[name="userId"]');
    var userId = input.value;
    WebPush.registerUser(userId);
  });
});

