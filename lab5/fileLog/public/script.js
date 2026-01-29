
async function sendData(){
    console.log('sendData in js called successfully');
    const response = await fetch('/api/userData',{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
            userName : document.getElementById('userName').value,
            msg : document.getElementById('msg').value
        })
    })

    if(!response.ok){
        console.log('not ok')
    }
}   