import { PostData } from './api.js'

const box = document.querySelector('.box');

const addJobButton = document.querySelector('.addJobButton');
const addJobDialog = document.querySelector('.addJobDialog');
const addJobForm = document.querySelector('.addJobForm');
const closeAddJobDialog = document.querySelector('.closeAddJobDialog');

addJobButton.onclick=()=>{
    addJobDialog.showModal();
}

addJobForm.onsubmit=(e)=>{
    e.preventDefault();
    if(addJobForm.addTitle.value.trim()==""){
        alert('Please fill all fields!');
    }
    else
    {
        let Obj={
            title: addJobForm.addTitle.value,
            level: addJobForm.addLevel.value,
            category: addJobForm.addCategory.value
        }
        PostData(Obj);
        addJobForm.reset();
        addJobDialog.close();
    }
}

closeAddJobDialog.onclick=()=>{
    addJobForm.reset();
    addJobDialog.close();
}

function Display(Data) {
    box.innerHTML = '';
    Data.forEach((e,i)=>{
        let card = document.createElement('div');
        card.classList = 'card';
        let block1 = document.createElement('div');
        let block2 = document.createElement('div');
        let title = document.createElement('h2');
        title.innerHTML = e.title;
        let level = document.createElement('span');
        level.innerHTML = e.level
        let categoty = document.createElement('p');
        categoty.innerHTML = e.category;
        let moreInfoButton = document.createElement('button');
        moreInfoButton.innerHTML = 'See More';
        let location = document.createElement('h5');
        location.innerHTML = 'Dushanbe';
        block1.append(title,level);
        block2.append(moreInfoButton,location);
        card.append(block1,categoty,block2);
        box.appendChild(card);
    })
}

export { Display }