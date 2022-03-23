/* Contact Form */
function validate_data(f) {
    if( f.name.value === '' ){
        csubmitMSG(false, "Your name must not be empty!")
    } else if( f.email.value === '' ){
        csubmitMSG(false, "Your email must not be empty!");
    } else if( f.phone.value === '' ){
        csubmitMSG(false, "Your phone must not be empty!");
    } else if( f.message.value === '' ){
        csubmitMSG(false, "Your message must not be empty!");
    } else {
        csubmitForm();
    }
    return false;
}


function csubmitForm() {
    // initiate variables with form content
    var name = $("#cname").val();
    var email = $("#cemail").val();
    var message = $("#cmessage").val();
    var tel = $("#ctel").val();
    $.ajax({
        type: "POST",
        url: "php/sendMail.php",
        dataType: 'json',
        data: {
            name: name,
            email: email,
            message: message,
            tel: tel
        },
        beforeSend: function(){
            $("#contactForm :input").prop('readonly', true);
            $('#cformSpinner').removeAttr('hidden');
        },
        success: function(response) {
            if (response.status === 'success') {
                cformSuccess();
            } else {
                csubmitMSG(false, text);
            }
        },
        complete:function(){
            $('#cformSpinner').attr('hidden',true);
            $("#contactForm :input").prop('readonly', false);
        }
    });
}

function cformSuccess() {
    $("#contactForm")[0].reset();
    csubmitMSG(true, "Message Submitted!");
}

function csubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    setTimeout(function(){
        $("#cmsgSubmit").text('');
    }, 3000);
}