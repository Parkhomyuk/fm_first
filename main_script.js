
 async function dataJSON(){
    fetch('data.json').then(response=>{
        return response.json()
    }).then(json=>{
        score=0
    for (let i=0; i<json.length;i++){       
        document.getElementById(`${json[i]["category"]}-value`).innerHTML=json[i]['score'] 
        document.getElementById(`${json[i]["category"]}-img`).src=json[i]['icon']
        score+=json[i]['score']
    }
    document.getElementById('score-value').innerHTML=Math.floor(score/json.length)
    

    });
    
   
     
 }

 dataJSON()
  