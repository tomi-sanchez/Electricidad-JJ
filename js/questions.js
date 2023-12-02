(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    titleQuestion.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.nextElementSibling.parentElement;

            addPadding.classList.toggle('question__padding--add');
            question.children[0].classList.toggle('questions__img--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`; 
        });
    });
})();