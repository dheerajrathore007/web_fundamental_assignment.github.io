fetch('https://fakestoreapi.com/products').then(
    res =>{
        res.json().then(
            data =>{
                console.log(data);
                if (data.length > 0){
                    var temp = "";
                    data.forEach((u)=>{
                    temp +="<tr>";
                    temp += "<td>"+u.id+"</td>";
                    
                    temp += "<td>"+u.title+"</td>";
                    temp += "<td>"+u.price+"</td ></tr>";
                        
                            }
                    )
                    document.getElementById('data').innerHTML = temp;
                }
            }
        )
    }
) 