$(document).ready(function(){
    $('#id-card').hide();
    window.addEventListener('message', function( event ) {
      if (event.data.action == 'open') {
        var firstname = event.data.firstname;
        var lastname = event.data.lastname;
        var dob = event.data.dob;
        var height = event.data.height;
        var sex         = event.data.sex;
        $('#sex').text(sex);
        $('#name').css('color', '#282828');
        $('#name').text(firstname + ' ' + lastname);
        $('#dob').text(dob);
        $('#height').text(height);
        $('#signature').text(firstname + ' ' + lastname);      
        $('#id-card').show();
      } else if (event.data.action == 'close' ) {
        $('#name').text('');
        $('#dob').text('');
        $('#height').text('');
        $('#signature').text('');
        $('#sex').text('');
        $('#id-card').hide();
        $('#licenses').html('');
      }
    });
  });