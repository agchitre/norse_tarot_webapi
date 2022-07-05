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

module.exports = {
  title: "The Best HTML Alexa Skill Ever", // local title only, used in debug messages
  applicationPath: "./", // location that can be assumed to contain your whole app website, statically
  applicationPage: "index.html", // file to load as your application entry point
  additionalPaths: {}, // additional paths to serve for your website, in the form { serverPath: localPath }
  AWSProfile: 'default' // if you want to simulate text to speech, this AWS profile will be used to employ AWS Polly to fill in for Alexa
}