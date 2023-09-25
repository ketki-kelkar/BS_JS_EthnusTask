$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 3,
                        message: 'POOR',
                    },
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
            last_name: {
                validators: {
                    stringLength: {
                        min: 3,
                        message: 'POOR'
                    },
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'POOR'
                    },
                    emailAddress: {
                        message: 'POOR'
                    }
                }
            },
            password: {
                validators: {
                    stringLength: {
                        min: 5,
                        message : "POOR"
                    },
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
            repassword: {
                validators:{
                    stringLength: {
                        min: 5,
                        message : "POOR OR MISMATCH"
                    },
                    notEmpty: {
                        message: 'POOR OR MISMATCH'
                    },
                }
            },
            age: {
                validators: {
                    notEmpty: {
                        message: 'POOR'
                    },
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'POOR'
                    },
                }
            },
            address: {
                validators: {
                    stringLength: {
                        min: 10,
                        message : "POOR"
                    },
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'POOR'
                    }
                }
            },
        },
    });
});
