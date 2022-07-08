const express = require('express')
const router = express.Router()

// Run this code when a form is submitted to 'workarounds'
router.post('/workarounds', function (req, res) {

    // Make a variable and give it the value from 'question8'
    var workarounds = req.session.data['workarounds-required']
  
    // Check whether the variable matches a condition
    if (workarounds == "Never"){
      // Send user to next page
      res.redirect('/question10')
    } else {
      // Send user to workarounds page
      res.redirect('/question9')
    }
  
  })

  // Run this code when a form is submitted to 'activitytypes'
router.post('/activitytypes', function (req, res) {

  // Make a variable and give it the value from 'question10'
  var activitytypes = req.session.data['incomplete-activities']

  // Check whether the variable matches a condition
  if (activitytypes == "Never"){
    // Send user to next page
    res.redirect('/question12')
  } else {
    // Send user to task-types page
    res.redirect('/question11')
  }

})

  // Run this code when a form is submitted to 'informationtype'
  router.post('/informationtype', function (req, res) {

    // Make a variable and give it the value from 'question12'
    var informationtype = req.session.data['how-easy-to-find-info']
  
    // Check whether the variable matches a condition
    if ((informationtype == "Very easy") || (informationtype == "Quite easy")){
      // Send user to next page
      res.redirect('/question14')
    } else {
      // Send user to information type page
      res.redirect('/question13')
    }
  
  })

    // Run this code when a form is submitted to 'jobroles'
    router.post('/jobroles', function (req, res) {

      // Make a variable and give it the value from 'question12'
      var jobroles = req.session.data['job-role']
    
      // Check whether the variable matches a condition
      if (jobroles == "AP Health Professional") {
        // Send user to AP org page
        res.redirect('/question3b')
      } else {
        // Send user to office location page
        res.redirect('/question4')
      }
    
    })


module.exports = router
