var list = [
    {name: "Laukik Chavan" , message: "Happy 25h Anniversary mummy pappa !!" },
    {name: "Ajinkya Chavan", message: ""}
];  

onStart();

function onStart() {
    
    $("#wishes").empty();

    for(var i =0; i < list.length; i++) {
        var div = document.createElement("div");
        div.className = "MyMessage";
        var h1 = document.createElement("h1");
        var h3 = document.createElement("h3");

        var mes = document.createTextNode(list[i].message)
        var name = document.createTextNode(" - " + list[i].name)

        h1.appendChild(mes);
        h3.appendChild(name);
        div.appendChild(h1);
        div.appendChild(h3);

        $("#wishes").append(div);
    }
}

function onPress() {
    
    $("#wishes").empty();

    var newName = $.trim($("#NameOfGoodWisher").val());
    var message = $.trim($("#Wishes").val());

    if(newName !== "" && message !== "") {
        list.push({name: newName, message:message})
    } else {
        alert("Fill Everything before pressing the button !")
    }

    console.log(newName + " " + message);

    for(var i =0; i < list.length; i++) {
        var div = document.createElement("div");
        div.className = "MyMessage";
        var h1 = document.createElement("h1");
        var h3 = document.createElement("h3");

        var mes = document.createTextNode(list[i].message)
        var name = document.createTextNode(" - " + list[i].name)

        h1.appendChild(mes);
        h3.appendChild(name);
        div.appendChild(h1);
        div.appendChild(h3);
        $("#wishes").append(div);

    }

    $.trim($("#NameOfGoodWisher").val('')) ;
    $.trim($("#Wishes").val(''));
}

$('#myBtn').click(function() {
    onPress();
});