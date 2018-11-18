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
     getIsYesResponse() {
         return this.isYesResponse // is ideator
     }
     getValues() {
        console.log("dumping raw values of this obj....")
        console.log(this.name)
        console.log(this.email)
        console.log(this.major)
     }
    
     getYesResponseAt(index) {
        console.log(this._yesResponses[index].yq1)
     }
     getNoResponseAt(index) {
        console.log(this._noResponses[index].yq1)
     }
 }

 // Handle signIn.html user response
 // Pass UserResponse object into yes/no response objects
 // pass that data into mongoDB
 function signInUser() {
     var name = document.getElementById("name").value
     var email = document.getElementById("email").value
     var pass = document.getElementById("password").value
     var major = document.getElementById("major").value
     var schoolYear = document.getElementById("schoolYear").value
     // pass the values into UserResponse object
    var newUserResponse = new UserResponse(name, email, pass, major, schoolYear, false)
    return newUserResponse
 }





