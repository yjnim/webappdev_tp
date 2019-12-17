let div = document.createElement('div');
div.setAttribute('class', 'a-answer');

for (var i=0; i<2; i++) {
    let p = document.createElement('p');
    if (i == 0) {
        p.innerHTML = '${answers.name}';
        p.setAttribute('class', 'answer-name');
    } else if (i == 1) {
        p.innerHTML = '${answers.answer}';
        p.setAttribute('class', 'answer-contents');
    }
    div.appendChild(p);
}

answerDiv.insertBefore(div, answerDiv.childNodes[0]);