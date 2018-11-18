/**
 * As of right now, we will use this file to "swap out"
 * questions instead of having so many duplicate, redundant html files
 * This will serve as the main bank of onboarding questions
 */

 // below are our constants as strings
 const y_q1 = "We're excited you have an idea. In a few sentences, tell us what its about."
 const y_q2 = "Cool! What stage is your idea at?"
 const y_q3 = "What are your motivations to make this idea into reality?"
 const y_q4 = "What industry does your idea fall under?"
 const y_q5 = "Who are you looking for on your team?"
 const y_q6 = "How long do you expect this idea to take?"
 const y_q7 = "What is your end goal for this idea?"
 const y_q8 = "Okay let us get to know you better. What are your passions?"
 const y_q9 = "What have you taught yourself this year?"
 const y_q10 = "What makes you awesome?"
 const y_finish = "We will get you paired up with a team shortly. Stay tuned via email or through the Teambuild tool."

 const n_q1 = "What have you taught yourself this year?"
 const n_q2 = "What makes you awesome?"
 const n_q3 = "What are your passions?"
 const n_q4 = "Okay, lets get your profile completed. What would you describe your skill level as?"
 const n_q5 = "What industries do you hope to work in?"
 const n_q6 = "How much time do you currently have to commit to a project?"
 const n_q7 = "Where do you see yourself in the future?"

 const ONBOARDING_QUESTIONS = {
     yesQuestions: [y_q1, y_q2, y_q3, y_q4, y_q6, y_q7, y_q8, y_q9, y_q10, y_finish],
     noQuestions: [n_q1, n_q2, n_q3, n_q4, n_q5, n_q6, n_q7]
 }

// other global vars
var questionLabel = document.getElementById("question-label")
const userChoice = window.location.href

// we need to set a listener for the "Okay!" button, once that's clicked,
// we have to swap the okay button with the arrow, and then change question label
var okayButton = document.getElementById("okayButton")
var arrowButton = document.getElementById("nextArrow")
let textInput = document.getElementById("textarea-isHidden")


okayButton.addEventListener('click', () => {
    okayButton.style.display = "none"
    arrowButton.style.display = "block"
    textInput.style.display = "block"
    console.log("Testing global var in user responses.js")
    console.log(ALL_TEST_USERS)
    // set next question, but before that, we need to know what user path is
    if(userChoice.includes("yes")) {
        questionLabel.innerHTML = ONBOARDING_QUESTIONS.yesQuestions[0]
    } else {
        questionLabel.innerHTML = ONBOARDING_QUESTIONS.noQuestions[0]
    }
})
arrowButton.addEventListener('click', () => {

})