/*

 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Copyright 2020 Amazon.com (http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
 * These materials are licensed as "Restricted Program Materials" under the Program Materials
 * License Agreement (the "Agreement") in connection with the Amazon Alexa voice service.
 * The Agreement is available at https://developer.amazon.com/public/support/pml.html.
 * See the Agreement for the specific terms and conditions of the Agreement. Capitalized
 * terms not defined in this file have the meanings given to them in the Agreement.
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/

/*
  This file adds buttons to the dashboard app that when pressed send messages to be received at alexa.skill.onMessage(). It should export a map, with button names as keys, and JSON message payloads as values.
*/

module.exports = {
  bark: {
    show: "woof woof" // the app interprets the say property to mean "print this on screen"
  },

  meow: {
    show: "I don't meow on command, human"
  },

  'just output speech': {
    outputSpeech: "This emulates returning an output speech response.",
  },

  'output speech w/ message': {
    outputSpeech: "This emulates returning an output speech response, along with a message.",
    message : {
      description: "This simulates a HandleMessage message"
    }
  },

  transformerLong: {
    message: {
      cmd: 'play transformed',
      text: "Hello, this is a test of speech sent via transformer. You should see sentence, word, and viseme speechmarks go by in the console."
    },
    transformers: [
      {
        "inputPath": "text",
        "outputName": "textURL"
        // only "transformer": "ssmlToSpeech" supported, implied
      }
    ]
  },

  transformerShort: {
    message: {
      cmd: 'play transformed',
      text: "Hi there."
    },
    transformers: [
      {
        "inputPath": "text",
        "outputName": "textURL"
      }
    ]
  },

  transformerColors: {
    message: {
      cmd: 'play transformed',
      text: "Sometimes, I feel <mark name='color:red'/> red. Other times, I can feel a bit <mark name='color:yellow'/> yellow. Sure, I can feel <mark name='color:blue'/> blue every once in a while, but hey, c'est la vie, <mark name='color:white'/> right?"
    },
    transformers: [
      {
        "inputPath": "text",
        "outputName": "textURL"
        // only "transformer": "ssmlToSpeech" supported, implied
      }
    ]
  },


}