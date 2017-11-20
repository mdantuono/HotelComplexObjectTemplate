var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxury Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
};

// console.log(document.getElementById('label').nodeName); TO FIND NODE NAME

function displayDetails(room) {
    document.getElementById('available').innerHTML = hotel.rooms[room].available;
    document.getElementById('price').innerHTML = hotel.rooms[room].price;
}

for (var i = 0; i < hotel.rooms.length; i++) {
    var radioBtn = document.createElement("INPUT");
    var radioLabel = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id", "room" + i);
    radioBtn.setAttribute("onclick", "displayDetails(" + i + ")");
    radioLabel.innerHTML = hotel.rooms[i].name;
    
    document.getElementById('radialSection').appendChild(radioBtn);
    document.getElementById('radialSection').appendChild(radioLabel);
}
//display rooms as radio options

//on form submission confirm radio was selected

//and checkbox checked