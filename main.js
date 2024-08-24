


var arr = [
    {name: "Hina",     age: 19 , color:"pink" },
    {name: "Amna" ,    age: 21 , color:"Blue" },
    {name: "Ch Amna" , age: 19 , color:"pink" },
    {name: "Aima " ,   age: 19 , color:"Black" }
]






var tbody =document.getElementById("tbody");




for( var index= 0; index <= arr.length; index++){
    var row = `<tr>
    <td> ${arr[index].name} </td>
    <td> ${arr[index] .age} </td>
    <td> ${arr[index].color} </td>

   </tr> `;


   console.log(row)

        tbody.innerHTML += row





    