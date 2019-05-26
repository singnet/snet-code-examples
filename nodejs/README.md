# Basic usage of js sdk on Node.js

This repo contains sample code for invoking simple AI service calls using the [snet-sdk](https://www.npmjs.com/package/snet-sdk) on Node.js.

There are two different examples
1. Simple Calculator ([service details](https://github.com/singnet/example-service)). The code for this can be found under `src/calculator`.
2. Video Action Recognition ([service details](https://singnet.github.io/dnn-model-services/users_guide/i3d-video-action-recognition.html)). The code for this can be found under `src/video`.

## Running the code sample locally
Clone the repo
```
$ git clone https://github.com/singnet/snet-code-examples.git
$ cd snet-code-examples
```

Then change your current directory to nodejs
```
$ cd nodejs
```

Install all the dependencies 
```
$ npm install
```

Once you have installed the dependencies all that you have to do is, make a copy of `.env.example` and name it `.env`.
```
$ cp .env.example .env
``` 

Update `.env` to add appropriate configurations and you should be all set to run the sample code.

Run the sample code
1. Simple Calculator
```
$ npm run calculator-example
``` 
2. Video Action Recognition
```
$ npm run video-recog-example
``` 
