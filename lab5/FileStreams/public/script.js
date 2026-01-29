
async function sendData(){
    console.log('sendData in js called successfully');
    const response = await fetch('/api/msg',{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
            msg : document.getElementById('msg').value
        })
    })

    if(response.ok){
        document.body.innerHTML += `Successfully Written`
    } else {
        document.body.innerHTML += `Error occured`
    }

}   

async function receiveData(){
    const response = await fetch('/api/msg')

    console.log(response)
    
    if(response.ok){
        document.body.innerHTML += `Successfully Written`
    } else {
        document.body.innerHTML += `Error occured`
    }
    
    const data =  await response.text();
    console.log("data -------> ",data)
    document.getElementById('result').innerHTML = `${data}`
}   