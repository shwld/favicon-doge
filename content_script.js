window.onload = async function () {
  var links = [
    document.querySelector('link[rel="shortcut icon"]'),
    document.querySelector('link[rel="icon"]'),
  ].filter((it) => it);
  if (!links.length) {
    var link = document.createElement('link');
    document.head.appendChild(link);
    links.push(link);
  }
  links.forEach((link) => {
    link.setAttribute('rel', 'shortcut icon');
    link.setAttribute('href', chrome.runtime.getURL('images/favicon.ico'));
    link.removeAttribute('type');
    link.addEventListener('change', function () {
      link.setAttribute('rel', 'shortcut icon');
      link.setAttribute('href', chrome.runtime.getURL('images/favicon.ico'));
      link.removeAttribute('type');
    });
  });

  var title = document.querySelector('title');
  if (title) {
    title.innerHTML = 'Home / Twitter';
  }
  for (icon of document.querySelectorAll('img')) {
    icon.setAttribute('src', chrome.runtime.getURL('images/icon.png'));
  }

  var inputKey = [];
  var konamiCommand = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; //↑↑↓↓←→←→BA
  document.onkeydown = function (e) {
    inputKey.push(e.keyCode);
    if (inputKey.toString().indexOf(konamiCommand) >= 0) {
      for (img of document.querySelectorAll('img')) {
        if (img.classList.contains('anime-rotation')) {
          img.classList.remove('anime-rotation');
        } else {
          img.classList.add('anime-rotation');
        }
      }
      inputKey = [];
    }
  };
};
