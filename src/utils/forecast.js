const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ce98803d1c2a0eaa98e6bf76f57453ec&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location!', undefined)
        }
        else{ 
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' celsius out. It feels like ' + body.current.feelslike + ' celsius. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast