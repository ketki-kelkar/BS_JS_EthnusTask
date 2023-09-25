$(document).ready(function() {
    $('#reg_form').bootstrapValidator({
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Name is required.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email is required.'
                    }
                }
            },
            website: {
                validators: {
                    notEmpty: {
                        message: 'URL is required.'
                    }
                }
            },  
            message1: {
                validators: {
                    notEmpty: {
                        message: 'Message is required.'
                    }
                }
            },         
        }
    });
});
