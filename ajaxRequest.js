function checkCaptcha(value){
    $.ajax({
        context: this,
        url: "file.php",
        data: {
            'menu': 'checkCaptcha',
            'value': value
        },
        type: "POST",
        async: false,
        cache: false,
        dataType: 'text',
        complete: function(jqXHR, textStatus) {
           this.valid = (jqXHR.responseText);
        }
    });
    return valid;
}
