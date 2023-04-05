window.onload = async function () {
  var link =
    document.querySelector('link[rel="shortcut icon"]') ||
    document.querySelector('link[rel="icon"]');
  if (link) {
    link.setAttribute('href', chrome.runtime.getURL('images/favicon.ico'));
  }
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
