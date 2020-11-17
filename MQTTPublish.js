//MQTT client
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1888')

//what topic?
var topic = 'Temp/Default'
var sensorValue = 0

client.on('connect', ()=>{
  process.argv.forEach(function (val, index, array){
    if (index == 2){
      topic = val
    }
    if (index == 3){
      sensorValue = val
    }
  })
  client.publish(topic, sensorValue.toString())
  console.log('Sending Topic: '+topic.toString()+' Value: '+sensorValue.toString())
  return process.exit(22)
})
