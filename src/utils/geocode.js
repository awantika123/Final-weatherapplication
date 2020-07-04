const request = require('request')
const geocode=(address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYXdhbnRpa2EiLCJhIjoiY2s4NGxzZmRhMDN1dDNwazdnbTF3Njc2NiJ9.uWRquv8tPkRh2niLOkny1w&limit=1'

    request({url:url,json:true},(error,response)=>
    {
        if(error)
        {
            callback('unable to connect',undefined)
        }
        
        else if(response.body.features.length===0)
        {
        callback('unable to find location',undefined)
    }
        else
        callback(undefined,{
            
            latitude:response.body.features[0].center[1],
    longitude:response.body.features[0].center[0],
    location:response.body.features[0].place_name
        })

    
    })}

    module.exports=geocode