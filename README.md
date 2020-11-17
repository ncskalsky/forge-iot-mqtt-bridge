# ForgeIoTDemo

![Platforms](https://img.shields.io/badge/platform-Windows|MacOS-lightgray.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Autodesk University 2020 IoT Demo: An IoT data visualization example made by extending the forge-digital-twin sample project, a Database, MQTT bridge, and some IoT sensors!

## Development

### Prerequisites

- Node.js v10+
- [Forge](https://forge.autodesk.com) application credentials,
  and an _urn_ of a model processed with [Model Derivative APIs](https://forge.autodesk.com/en/docs/model-derivative/v2)
- MongoDB database
  - for example, use the free tier of [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - or run it locally: https://docs.mongodb.com/manual/installation

### Setup

- clone this repository
- install dependencies: `npm install`
- start broker > "node MQTTBroker.js"
- test publish a data point > "node MQTTPublish.js Temp/Tool 110"


### Bootstrap theme

The project uses a custom Bootstrap theme. In order to customize it:

- modify _tools/bootstrap-theme/custom.scss_
- run `npm build:client` to update _public/stylesheets/bootstrap.css_
- commit the new version of the CSS file

### Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Sample data

Expected Database collection schema
  when: new Date()
  temperature: // Sensor value, in this case (Temp), it will be degrees celsius (float)
  sensor_type: // sensor type is only 'Temp' presently
  sensor_name: // sensor name can be 'StockMaterial', 'Tool', 'Spindle', 'StepperX', etc.


## Features

- Broker MQTT events and add them to a results DB

## License

This sample is licensed under the terms of the [MIT License](https://tldrlegal.com/license/mit-license).
Please refer to [LICENSE](LICENSE) for more details.

## Written by

Nathan C. Skalsky, Autodesk Forge
