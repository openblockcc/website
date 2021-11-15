$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 2
                },
                number: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                contact: {
                    required: true,
                    minlength: 2
                },
                message: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "缺失名字 Missing name",
                    minlength: "您的名字必须包含至少2个字符 your name must consist of at least 2 characters"
                },
                subject: {
                    required: "缺失标题 Missing subject",
                    minlength: "您的标题必须包含至少2个字符 your subject must consist of at least 2 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                contact: {
                    required: "缺失联系方式 Missing contact information",
                    minlength: "您的联系方式必须包含至少2个字符 your Number must consist of at least 5 characters"
                },
                message: {
                    required: "缺失信息 Missing message",
                    minlength: "您的信息必须至少包含2个字符"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})