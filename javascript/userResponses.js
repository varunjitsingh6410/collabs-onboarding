/**
 * Author: Henry G
 * Overview: this file is responsible for keeping track of a single user response
 *           plan to record more timing metrics to gain a deeper understanding
 * Note:     using JQuery to pull data from the DOM. might use handlebars.js later
 */

 class UserResponse {

     constructor(name, email, password, major, currentYear, isYesResponse) {
        this.name = name
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
    getValues() {
        console.log("dumping raw values of this obj....")
        console.log(this.name)
        console.log(this.email)
        console.log(this.major)
     }
    injectYesResponse(){
        this._yesResponses[0].yq1 = "fuck this app lmao"
     }
    getYesResponseAt(index) {
        console.log(this._yesResponses[index].yq1)
     }
 }

 // Handle signIn.html user response
 // Pass UserResponse object into yes/no response objects
 // pass that data into mongoDB
 function signInUser() {
     const name = document.getElementById("name").value
     const email = document.getElementById("email").value
     const pass = document.getElementById("password").value
     const major = document.getElementById("major").value
     const schoolYear = document.getElementById("schoolYear").value
     // pass the values into UserResponse object
    var newUserResponse = new UserResponse(name, email, pass, major, schoolYear, false)
    window.location.href = "pages/ideaQ.html"
    handleUserTrackResponse()
 }

// Next, on the ideaQ.html, we handle the user's choice
function handleUserTrackResponse() {
    // first case assumes yes 

    // otherwise no
    var noChoice = document.getElementById("no").onclick = noChoice()
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





