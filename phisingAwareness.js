import { phishingdata , quizData} from "./phishingAwarenessdata.js";


let renderpage="";
phishingdata.forEach((page)=>{
    let pageHTMl=`<h2>${page.title}</h2> <p>${page.content}</p>`
renderpage+=pageHTMl;
}

)
let section2=document.querySelector('.js-middle-sec')
    section2.innerHTML=renderpage;
    // Quiz data: 6 engaging questions based on real-world threats
 

let userAnswers = new Array(quizData.length).fill(null);
let quizSubmitted = false;
 function buildQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return; 
    quizContainer.innerHTML = '';
     quizData.forEach((item, idx) => {
     const qDiv = document.createElement('div');
     qDiv.className = 'quiz-question';
      qDiv.setAttribute('data-qidx', idx);
      qDiv.innerHTML = `<p><strong>${idx+1}. ${item.text}
        </strong></p> <div class="options" id="options-${idx}"></div>
        <div class="quiz-feedback" id="fb-${idx}"></div> `; 
        quizContainer.appendChild(qDiv);

    const optionsDiv = document.getElementById(`options-${idx}`);
    item.options.forEach((opt, optIdx) => { 
    const label = document.createElement('label');
    const radio = document.createElement('input'); 
     radio.type = 'radio';
     radio.name = `q${idx}`;
     radio.value = optIdx;
      radio.addEventListener('change', () => { 
        if (!quizSubmitted) {    
        userAnswers[idx] = optIdx;
        const fbDiv = document.getElementById(`fb-${idx}`); 
    if (fbDiv) fbDiv.style.display = 'none';

   } 
		else {
			 // If quiz already submitted, warn but allow change? reset UI binding  
			 alert('Please reset the quiz before changing answers to test again.');radio.checked = false; } });
			 label.appendChild(radio);
			 label.appendChild(document.createTextNode(opt));
			 optionsDiv.appendChild(label);}); }); }

			 function evaluateQuiz() { 
        let score = 0;
        for (let i = 0; i < quizData.length; i++) {
          const selected = userAnswers[i];
				 const correctIndex = quizData[i].correct;
	 const fbDiv = document.getElementById(`fb-${i}`);
	if (!fbDiv) continue;
	if (selected !== null && selected === correctIndex) {
    score++; 
    fbDiv.innerHTML = `<span style="color:#15803d;"><i class="fas fa-check-circle"></i> Correct! ${quizData[i].explanation}</span>`;
     fbDiv.style.display = 'block';
      fbDiv.style.backgroundColor = '#e0f2e9';}
	 else
     {let correctAnsText = quizData[i].options[correctIndex];

		 let userChoiceText = (selected !== null) ? quizData[i].options[selected] : "No answer selected";
         fbDiv.innerHTML = `<span style="color:#b91c1c;"><i class="fas fa-times-circle"></i> Wrong. Your choice: ${userChoiceText}.<br> Correct: ${correctAnsText}.<br> ${quizData[i].explanation}</span>`;
          fbDiv.style.display = 'block';
          fbDiv.style.backgroundColor = '#ffefef';} }
         const total = quizData.length;
     const percent = Math.round((score/total)*100);
    const scoreDiv = document.getElementById('quizScore');
     scoreDiv.style.display = 'block';
    let feedbackMsg = '';
  if (percent === 100) feedbackMsg = ' Perfect! You’re a phishing expert! ';
    else if (percent >= 70) feedbackMsg = ` Great! Score ${percent}% – keep practicing vigilance.`;
    else feedbackMsg = ` Score ${percent}% – review the material and try again. Remember: Think before you click!`;
     scoreDiv.innerHTML = `<i class="fas fa-chart-simple"></i> Your score: ${score}/${total} (${percent}%) ${feedbackMsg}`; quizSubmitted = true;

 // Disable all radio buttons after submit for clean experience? but reset will re-enable later  
 
 const allRadios = document.querySelectorAll('.quiz-question input[type="radio"]');
  allRadios.forEach(radio => { radio.disabled = true; });
    }

 function resetQuiz() { userAnswers = new Array(quizData.length).fill(null);
     quizSubmitted = false;
	// re-enable all radios and clear checked       
 const allRadios = document.querySelectorAll('.quiz-question input[type="radio"]');
  allRadios.forEach(radio => {
     radio.checked = false;
     radio.disabled = false;

   });

  // hide all feedback divs  
	 for (let i=0; i<quizData.length; i++) {
         const fb = document.getElementById(`fb-${i}`);
		 if (fb) fb.style.display = 'none'; 
        }
		 const scoreDiv = document.getElementById('quizScore');
		 if (scoreDiv) scoreDiv.style.display = 'none';}


 window.addEventListener('DOMContentLoaded', () => {buildQuiz();
	 const submitBtn = document.getElementById('submitQuizBtn');
  const resetBtn = document.getElementById('resetQuizBtn');
	if (submitBtn) submitBtn.addEventListener('click', evaluateQuiz);
    if (resetBtn) resetBtn.addEventListener('click', resetQuiz); });
  //Adding fake Hover 

	
	 
