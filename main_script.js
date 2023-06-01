
 async function dataJSON(){
    fetch('data.json').then(response=>{
        return response.json()
    }).then(json=>{
    for (let i=0; i<json.length;i++){       
        document.getElementById(`${json[i]["category"]}-value`).innerHTML=json[i]['score']+' / 100'
        document.getElementById(`${json[i]["category"]}-img`).src=json[i]['icon']
    }
    });
    
   
     
 }

 dataJSON()
  