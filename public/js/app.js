


const weatherform=document.querySelector('form')
const search=document.querySelector('input')

const m1=document.querySelector("#m1")
const m2=document.querySelector('#m2')
weatherform.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location=search.value
m1.textContent='LOADING'
m2.textContent=''

    fetch('/weather?address='+location).then((response)=>{


{
    response.json().then((data)=>
    {
if(data.error){
    //console.log(data.error)
    m1.textContent=data.error
}
else{
   // console.log(data.location)
    //console.log(data.forecast)
    m1.textContent=data.location,
    m2.textContent=data.forecast
}

    }

    )}
})
    
})