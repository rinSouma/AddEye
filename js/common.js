$(".textarea").focusin(function(e) {
    var str = $(this).val().slice(-2);
    if (str!='👁'){
        $(this).val($(this).val()+'👁');
    }
});

