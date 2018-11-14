/**
 * Author: Henry G
 * Overview: this file is responsible for keeping track of a single user response
 *           plan to record more timing metrics to gain a deeper understanding
 * Note:     using JQuery to pull data from the DOM. might use handlebars.js later
 */

 class UserResponse {

     constructor(firstName, lastName, currentYear, major, email, password, isYesResponse) {
        this.firstName = firstName
        this.lastName = lastName
        this.currentYear = currentYear
        this.major = major
        this.email = email
        this.password = password
        this.isYesResponse = isYesResponse
         
         if (isYesResponse) {
            let _yesResponses = {
                0: { yq1: "" }
            }
            this._yesResponses = _yesResponses
         } else {
            let _noReponses = {
                0: { nq1: "" }
            } 
            this._noReponses = _noReponses
         }
     }
    getName() {
        console.log(this.firstName)
     }
    injectYesResponse(){
        this._yesResponses[0].yq1 = "fuck this app lmao"
     }
    getYesResponseAt(index) {
        console.log(this._yesResponses[index].yq1)
     }
 }
 // GLOBAL EMPTY NEW USER OBJ
 var newUserResponse = new UserResponse(null, null, null, null, null, null, null)

 // Handle signIn.html user response
 // Pass UserResponse object into yes/no response objects
 // pass that data into mongoDB
 function signInUser() {
     const firstName = document.getElementById("")
     const lastName = document.getElementById("lastName")
     const email = document.getElementById("email")
     const pass = document.getElementById("password")
     const major = document.getElementById("major")
     const schoolYear = document.getElementById("schoolYear")
     // pass the values into UserResponse object
    newUserResponse.firstName = firstName
    newUserResponse.lastName = lastName
    newUserResponse.schoolYear = schoolYear
    newUserResponse.major = major
    newUserResponse.email = email
    newUserResponse.password = pass
    newUserResponse.isYesResponse = false
    console.log(newUserResponse.firstName)
    //window.location.href = "ideaQ.html"
 }

 // Now let's display the correct page depending on button response
 function yesChoice() {
     // set isYesResponse to true
     newUserResponse.isYesResponse = true

     // now we move the user to the appropriate page
     window.location.href = "yes/preQ.html"
 }
 function noChoice() {
     window.location.href = "no/preQ.html"
 }

 // tests
 console.log("INIT TESTS")
 console.log(newUserResponse.firstName)
 console.log(newUserResponse.isYesResponse)




