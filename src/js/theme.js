const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('#theme-switch-toggle');

document.body.classList.add(Theme.LIGHT);

localStorage.getItem('themeKey') === Theme.DARK ?
  document.body.classList.add(Theme.DARK) :
  document.body.classList.add(Theme.LIGHT);

document.body.classList.contains(Theme.DARK) ?
document.querySelector('input').checked = true :
document.querySelector('input').checked = false ;


const handleInput = function (event) {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);

  if (event.target.checked) {
    localStorage.setItem('themeKey', Theme.DARK)
  } else localStorage.setItem('themeKey', Theme.LIGHT)
}

switcher.addEventListener('change', handleInput)
