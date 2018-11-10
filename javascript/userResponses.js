/**
 * Author: Henry G
 * Overview: this file is responsible for keeping track of a single user response
 *           plan to record more timing metrics to gain a deeper understanding
 * Note:     using JQuery to pull data from the DOM. might use handlebars.js later
 */

 class UserResponse {

     constructor(name, school, currentYear, isYesResponse) {
        this.name = name
        this.school = school
        this.currentYear = currentYear
         
         if (isYesResponse) {
            let _yesResponses = {
                0: { yq1: "" }
            }
            this._yesResponses = _yesResponses
         } else {
            _noReponses = {
                0: { nq1: "" }
            } 
            this._noReponses = _noReponses
         }
     }
    getName() {
        console.log(this.name)
     }
    injectYesResponse(){
        this._yesResponses[0].yq1 = "fuck this app lmao"
     }
    getYesResponseAt(index) {
        console.log(this._yesResponses[index].yq1)
     }
 }

 // Now let's display the correct page depending on button response
 function yesChoice() {
     const userChoice = document.getElementById('ideator')
     console.log('user choice made')
     // now we move the user to the appropriate page
     window.location.href = "yes/preQ.html"

 }
 function noChoice() {
     console.log('user choice made')
     window.location.href = "no/preQ.html"
 }
let user1 = new UserResponse("henG", "UCSD", "4th", true)