$(document).ready(function() {
    $('#horarioRemedio').mask('00:00');
    if(localStorage.getItem('nome')) {
        return;
    } else {
        window.location.href = 'index.html'
    }
});
function addRemedio(){
    var nomeRemedio = $('#nomeRemedio').val();
    var descricao = $('#descricao').val();
    var horario = $('#horarioRemedio').val();
    var checkboxes = $('[name="diaSemana"]:checked');
    var diasSelecionados = checkboxes.map(function() {
        return this.value;
    }).get().join(', ');
    var primaryKey = Date.now();
    $('#timeStamp').val(primaryKey);
    var timeStamp = $('#timeStamp').val();
    
    if(nomeRemedio == "" || horario == "" || diasSelecionados == ""){
        window.alert("Campos obrigatórios: \n- Nome do remédio\n- Horário do remédio\n- Dia da semana")
    } else{
        var dados = {
            id: '1',
            nome: nomeRemedio,
            horario: horario,
            dia: diasSelecionados,
            descricao: descricao,
            key: timeStamp
        };
    
        var url = 'http://127.0.0.1:8000/api/remedio';
    
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dados),
            success: function(data) {
                console.log(data)
                var otherDocUrl = 'remedios.html?nome=' + encodeURIComponent(nomeRemedio) + '&descricao=' + encodeURIComponent(descricao) + '&horario=' + encodeURIComponent(horario) + '&dias=' + encodeURIComponent(diasSelecionados) + '&timeStamp=' + encodeURIComponent(timeStamp);
                window.location.href = otherDocUrl;
            },
            error: function(xhr, status, error) {
            }
        });
    }

}


