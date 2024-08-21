


var arr = [
    {name: "Hina",     age: 19 , color:"pink" },
    {name: "Amna" ,    age: 21 , color:"Blue" },
    {name: "Ch Amna" , age: 19 , color:"pink" },
    {name: "Aima " ,   age: 19 , color:"Black" }
]



var h1 =document.getElementsByTagName("h1")
for(var i=0; i<= h1.length; i++){
    console.log(h1[i].innerHTML);
}






for( var index= 0; index <= 3; index++){
    var row = <tr>
        <td> ${arr[index]} </td>
        <td> ${arr[index]} </td>
        <td> ${arr[index]} </td>

    </tr>;
} 
    