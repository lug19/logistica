$(document).ready(function(){
    console.log('jQuery esta funcionando')
    $('#item-result').hide();


    $('#search').keyup(function(e){
        if($('#search').val()){
        let search = $('#search').val();
 

        $.ajax ({
            url: 'item-search.php',
            type: 'POST', 
            data: { search },
            success: function(response){
                let items =JSON.parse(response);
                let template = '';
                items.forEach(item => {
                    template += `<li>${item.name}<li>`
                });
                $('#container').html(template);
                $('#item-result').show();
            }
        })
    }

    });
});