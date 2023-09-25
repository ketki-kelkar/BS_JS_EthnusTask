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
            password: {
                validators: {
                    stringLength: {
                        min: 7,
                    },
                    notEmpty: {
                        message: 'Password is required.'
                    }
                }
            },           
        }
    });
});
