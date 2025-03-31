function fazerLogin(event) {
    event.preventDefault()

    var email = $("#exampleInputEmail1").val();
    var senha = $("#exampleInputPassword1").val();

    var dados = {
        email: email,
        password: senha
    };

    var url = 'http://127.0.0.1:8000/api/login';

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dados),
        success: function(data) {
            console.log(data)
            localStorage.setItem('nome', data.nome);
            window.location.href = 'home.html';
        },
        error: function(xhr, status, error) {
            alert('Verifique e-mail e senha.')
        }
    });

}