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
        },
        {
            name: "Penthouse",
            price: "$5000.00",
            available: 2
        }
    ],
    name: "CareerDevs Innt"
};

// console.log(document.getElementById('label').nodeName); TO FIND NODE NAME

function displayDetails(room) {
    document.getElementById('available').innerHTML = hotel.rooms[room].available;
    document.getElementById('price').innerHTML = hotel.rooms[room].price;
}

//display rooms as radio options
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

//form validation
document.getElementById('reservationForm').onsubmit = function(event) {
   event.preventDefault(); 
   
   //check if terms are agreed to
   if (!document.getElementById('confirmation').checked) {
       alert("Please agree to the Terms and Conditions");
       return;
   }
   
   var radios = document.getElementsByName('rooms');
   var roomSelection = "";
   
   for (var i = 0; i < radios.length; i++) {
       if(radios[i].checked) {
           roomSelection = radios[i].value;
           break;
       }
   }
   
   if (roomSelection == "") {
       alert("No selection made");
       return;
   }
   
   alert("Thank you for reserving the " + 
   hotel.rooms[parseInt(roomSelection)].name + ".");
};