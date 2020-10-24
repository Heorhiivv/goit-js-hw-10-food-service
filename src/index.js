import './styles.css';
import food from './templates/food.hbs';
import items from './utils/menu.json';
import './js/theme'

const jsMenu = document.querySelector('.js-menu');

items.map(el => {
  const  resultMenu = food(el);
    jsMenu.insertAdjacentHTML('beforeend', resultMenu)
})

console.log(jsMenu);
