const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()
const publicdir=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)


app.use(express.static(publicdir))

app.get('',(req,res)=>
{
    res.render(('index'),{
        title:'WEATHER APPLICATION',
        name:'AWANTIKA CHITRANSH'
    })
})

app.get('/about',(req,res)=>
{
    res.render(('about'),{
        title:'ABOUT',
        name:'AWANTIKA CHITRANSH'
    })
})

app.get('/weather',(req,res)=>
{
if(!req.query.address)
{
    return res.send({error:'You must provide an address.'})
}
geocode(req.query.address,(error,{latitude,longitude,location}={})=>
    {
        if(error)
        return res.send({error})
    
        forecast(latitude,longitude,(error,fdata)=>{

            if(error)
            return res.send({error})

            res.send({
                forecast:fdata,
                location,
                address:req.query.address
            })})})
           
    

    
})
app.get('*',(req,res)=>
{

    res.render(('404'),{
        title:'404',
        name:'AWANTIKA CHITRANSH',
        error:'PAGE NOT FOUND'
    })
})

app.listen(3000,()=>
{
    console.log('SERVER IS UP ON PORT 3000')
    
})                                                                                                                                                 