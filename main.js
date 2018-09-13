myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('GET', 'https://jack.com:8002')
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('end')
            if(request.status >= 200 && request.status<300){
                console.log('success')
                let string = request.responseText
                let object = window.JSON.parse(string) //JSON string -> JS object
                console.log(typeof object)
                console.log(object)
                console.log(object.note)
            }else if(request.status >= 400){
                console.log('fail')
            }
        }
    }
})