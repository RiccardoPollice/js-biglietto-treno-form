function dataUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let distance = document.getElementById("Km_da_Percorrere").value;

    let age = document.getElementById("age_select").value;

    distance = parseInt(distance);
    let ticketPrice = distance * 0.21;

    if (age == "Minorenne") {
        ticketPrice = ticketPrice * 0.8;
    }
    else if (age == "Over65") {
        ticketPrice = ticketPrice * 0.6
    }
    let finalprice = ticketPrice.toFixed(2);



    console.log(finalprice)
    document.getElementById("user_price").innerHTML = finalprice


    
}