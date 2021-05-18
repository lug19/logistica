$(document).ready(function(){
    let edit= false
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
            id: $('#itemID').val(),

        };
        let url= edit === false ? 'item-add.php' :'edit-item.php';
        console.log(url);

        $.post(url, postData, function(response){ 
            console.log(response)
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
               <tr itemId="${item.id}">
                    <td>${item.id}</td>
                    <td>
                        <a href="#" class="item-item">
                    ${item.name}</a>
                    
                    </td>
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

        $(document).on('click', '.item-delete', function() {
            if(confirm('Are you sure wanna delete it?')) {
                let element = $(this)[0].parentElement.parentElement;
                let id = $(element).attr('itemId');
            $.post('item-delete.php',{id}, function (response) {
                cambioItems();
            })
            }
        })
        $(document).on('click','.item-item',function(){
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('itemId');
            $.post('item-edit.php',{id}, function (response) {
                const item =JSON.parse(response);
                $('#name').val(item.name);
                $('#description').val(item.description);
                $('#itemID').val(item.id);
                edit=true;
           })
        });

})