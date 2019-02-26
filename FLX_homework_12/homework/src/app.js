const rootNode = document.getElementById('root');
let zero = 0;
let page1Hash = '';
let page2Hash = '#/add';
let page3Hash = '#/modify/';
let val = document.getElementById('add_content_button');
let main_content;

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

createPage1();

    function createPage1() {

    location.hash = page1Hash;    

    let page1Title = document.createElement('h2');
    page1Title.textContent = 'Simple TODO application';
    rootNode.appendChild(page1Title);

    let page1Button = document.createElement('button');
    page1Button.textContent = 'Add new task';
    rootNode.appendChild(page1Button);
    page1Button.addEventListener('click', function(){
        window.addEventListener('load', createPage2());
    })

    let page1P = document.createElement('p');
    page1P.textContent = 'TODO is empty';
    rootNode.appendChild(page1P);

    main_content = document.createElement('div');
    main_content.classList.add('main_content');
    rootNode.appendChild(main_content);
    
}

function start() {
    
    let div_block = document.createElement('div');
    div_block.classList.add('block-class');
    main_content.appendChild(div_block);

    let checkItem = makeElement('i','material-icons','check_box_outline_blank');
    let deleteItem = makeElement('i','material-icons','delete');
    div_block.appendChild(checkItem);
    div_block.appendChild(deleteItem);


    checkItem.addEventListener('click', function(){
        checkItem.textContent = 'check_box';
    });
  
    deleteItem.addEventListener('click', function(){
        rootNode.removeChild(this.parentElement);
    });
}



function createPage2() {

    location.hash = page2Hash;

    rootNode.innerHTML = '';

    let page2Title = document.createElement('h2');
    page2Title.textContent = 'Add task';
    rootNode.appendChild(page2Title);

    let page2Input = document.createElement('input');
    page2Input.setAttribute('id', 'add_content_button');
    rootNode.appendChild(page2Input);

    let br = document.createElement('br');
    rootNode.appendChild(br);

    let page2Button1 = document.createElement('button');
    page2Button1.textContent = 'Cancel';
    rootNode.appendChild(page2Button1);

    let page2Button2 = document.createElement('button');
    page2Button2.textContent = 'Save changes';
    rootNode.appendChild(page2Button2);
    page2Button2.addEventListener('click', function(){
        start();
        window.addEventListener('load', createPage1());
    });
}    

function makeElement (tagName, className, val) {  
    let element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = val;
    return element;
}


