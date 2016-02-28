$(function() {

    $('#log_but').on('click',function(){

        $.ajax({type:'POST',url:'check.php',
            data: "email="+$('#email').val()+"&password="+$('#password').val(),
            success: function(data,textStatus){
                $('.error_class').html(data);
                if (textStatus == 'success') {
                   // alert($('.error_class').text());
                    if($('.error_class').text()=='Hello'){

                        window.location.href = "hello.php";
                    }
                }
            }
            });


        //$('.error_class').load('check.php',"email="+$('#email').val()+"&password="+$('#password').val());

});

    $('#reset_but').on('click',function(){

        $('#email').val('');
        $('#password').val('');

    });
    $('.close').on('click',function(){
        alert("1111111");
        $('.error_class').remove();
    });
});