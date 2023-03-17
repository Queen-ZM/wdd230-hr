 const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'x';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

        
    //creat li
    const myLi = document.createElement('li');
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);

    //create span
    const mySpan = document.createElement('span');
    mySpan.innerHTML = 'X';
    myLi.appendChild(mySpan);
    

    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.apacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = "none";
            }, 500);
        })
    }
    inputText.value = "";
});


