import { PostData } from './api.js'

const box = document.querySelector('.box');

const selectCategory = document.querySelector('.selectCategory');
const selectLevel = document.querySelector('.selectLevel');

function Display(Data) {
    box.innerHTML = '';
    Data.forEach((e,i)=>{
        let card = document.createElement('div');
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
        card.className='card'
        box.appendChild(card);
    })
}

export { Display , selectCategory, selectLevel }