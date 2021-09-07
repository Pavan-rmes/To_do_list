var value;
function fun()
{
    var input_field = document.querySelectorAll(".input_field > input")
    if(value === input_field[0].value)
    {
        alert("already added")
    }
    else{
    value = input_field[0].value
    console.log(input_field[0].value)
    if(input_field[0].value === "")
    {
        alert("fill the input filed")
    }
    else{
    if(input_field[1].checked)
    {
        var list = document.getElementsByClassName("lim")[0]
        var list_add = document.createElement("li")
        list_add.innerHTML = value
        list.appendChild(list_add)
        input_field[0].value =""
    }
    else if(input_field[2].checked)
    {
        var list = document.getElementsByClassName("im")[0]
        var list_add = document.createElement("li")
        list_add.innerHTML = value
        list.appendChild(list_add)
        input_field[0].value =""
    }
    else if(input_field[3].checked)
    {
        var list = document.getElementsByClassName("vim")[0]
        var list_add = document.createElement("li")
        list_add.innerHTML = value
        list.appendChild(list_add)
        input_field[0].value =""
    }
    else if(input_field[4].checked)
    {
        var list = document.getElementsByClassName("now")[0]
        var list_add = document.createElement("li")
        list_add.innerHTML = value
        list.appendChild(list_add)
        input_field[0].value =""
    }
    
    else{
        alert("select the priority buttons")
    }
 }
}
}