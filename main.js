$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        if (tarefa) {
            const li = $('<li></li>').text(tarefa);
            const deleteBtn = $('<button></button>').text('Feito').addClass('delete-btn');


            li.click(function() {
                $(this).css('text-decoration', $(this).css('text-decoration') === 'line-through' ? 'none' : 'line-through');
            });

            deleteBtn.click(function(e) {
                e.stopPropagation();
                li.remove();
            });

            li.append(deleteBtn);

            $('#toDo').append(li);
            $('#tarefa').val('');
        }
    });
});
