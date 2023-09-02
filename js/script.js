// questions
const answer = document.querySelectorAll(".answer")
const answer__text = document.querySelectorAll(".answer__text")
const question = document.querySelectorAll(".question")

if (question) {
}
  for (let i = 0; i < question.length; i++) {
    let answer_height = answer__text[i].clientHeight
    console.log(answer_height)
    question[i].onclick = () =>{
      console.log(answer[i].childNodes[1].clientHeight)
      question[i].classList.toggle("answer__show")
      if (question[i].classList.contains("answer__show")) {
        answer[i].style = `height: ${answer_height + 20}px;`
        // answer[i].style = `height: ${answer_height + answer[i].childNodes[1].clientHeight - 5}px;`
      } else{
        answer[i].style = `height: 0px;`
      }
    }
  }