$(document).ready(function(){
    console.log('jQuery esta funcionando')
    $('#item-result').hide();
    cambioItems();


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
    $('#item-form').submit(function (e) {
        const postData = {
            name: $('#name').val(),
            description: $('#description').val(),

        };
        $.post('item-add.php', postData, function(response){ 
            cambioItems();
        $('#item-form').trigger('reset');
    });
        e.preventDefault();
    });

  function cambioItems(){
    $.ajax({
        url: 'item-list.php',
        type: 'GET', 
        success: function (response){
           let items = JSON.parse(response);
           let template = '';
           items.forEach(item => {
               template +=`
               <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>
                    <button CLASS="item-delete btn btn-danger">
                      Delete
                    </button>
                    </td>
               </tr>
               `
           });
           $('#items').html(template);
        }
        });
  }

  $(document).on('click', item-delete)

});