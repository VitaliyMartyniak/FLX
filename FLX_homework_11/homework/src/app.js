let count = 0;
let cardList = document.querySelector('.main-content');
let div_block;
let add_content_button = document.getElementById('add_content_button');
let main_content = document.querySelector('.main-content');
let error = document.querySelector('h2:last-of-type');
let zero = 0;
let nine = 9;
let ten = 10;
let text = document.getElementsByTagName('input')[zero];


add_content_button.addEventListener('click', function(){
  if (main_content.childElementCount > nine) {
    text.setAttribute('disabled', 'disabled');
    error.textContent = 'Maximum item per list are created';
    add_content_button.classList.add('disable');
  } else {
    start();
  }
});

function start() {

  let val = text.value;

  div_block = document.createElement('div');
  div_block.classList.add('block-class');
  div_block.setAttribute('draggable', 'true');
  cardList.appendChild(div_block);

  let checkItem = makeElement('i','material-icons','check_box_outline_blank');
  let pItem = makeElement('p','p-element',val);
  let deleteItem = makeElement('i','material-icons','delete');

  checkItem.addEventListener('click', function(){
    checkItem.textContent = 'check_box';
  });

  deleteItem.addEventListener('click', function(){
    main_content.removeChild(this.parentElement);
    if (main_content.childElementCount < ten) {
      text.removeAttribute('disabled', 'disabled');
      error.textContent = '';
      add_content_button.classList.remove('disable');
    }
  });

  div_block.appendChild(checkItem);
  div_block.appendChild(pItem);
  div_block.appendChild(deleteItem);
  count++

  if(val === '') {
    add_content_button.classList.add('disable');
  }
}

function makeElement (tagName, className, val) {  
  let element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = val;
  return element;
}



