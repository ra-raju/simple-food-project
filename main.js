/* navbar  */

document.querySelector('.manu').addEventListener('click', function () {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change');
  });
});

let icons = document.querySelectorAll('.section-1-icons i');

let i = 1;

setInterval(() => {
  i++;
  console.log(i);
  let icon = document.querySelector('.section-1-icons i.change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 3000);
