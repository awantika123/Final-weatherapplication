const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=5317131fb7e2ebfc38b4af096f091721&query='+latitude+','+longitude
    request({url:url,json:true},(error,response)=>{
        if(error)
        callback('Unable to connect.')
        else if(response.error)
        callback('Unable to find location.')
        else
        callback(undefined,'The observation time for the location was '+response.body.current.observation_time+' and the temperature is '+response.body.current.temperature+' degrees.The weather could be somewhat '+response.body.current.weather_descriptions[0]+' with a wind speed and wind direction '+response.body.current.wind_speed+' and '+response.body.current.wind_dir+' respectively.'
        )
    })

}
module.exports=forecast