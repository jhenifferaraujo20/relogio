setInterval( () => {
    let data = new Date();

    let ano = data.getFullYear();
    let mes = zero(data.getMonth());
    let dia = zero(data.getDay());

    let hora = zero(data.getHours());
    let min = zero(data.getMinutes());
    let seg = zero(data.getSeconds());
    
    document.getElementById("horas").innerHTML = `${hora}:${min}:${seg}`;

    document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`;
}, 1000);

function zero(x){
    if(x<10){
        x='0'+x;
    }return x;
}