// Печать с нажатия на виртуальную клавиатуру
let button = document.querySelectorAll('.key');
let notes = document.querySelector('.notes');

for (let key of button) {
  key.onclick = function () {
    notes.value = notes.value + key.textContent;
    notes.focus();
  };
}

// лампочки при фокусе на инпут
let lamps = document.querySelectorAll('.lamp');

notes.onfocus = function () {
  for (let lamp of lamps) {
    lamp.classList.add('lamps-on');
  }
};

notes.onblur = function () {
  for (let lamp of lamps) {
    lamp.classList.remove('lamps-on');
  }
};

// кнопка delete
let del = document.querySelector('.del');

del.onclick = function () {
  notes.value = notes.value.substring(0, notes.value.length - 1);
  notes.focus();
};

// кнопка Enter
let enter = document.querySelector('.enter');

enter.onclick = function () {
  notes.value = `${notes.value}\n`;
  notes.focus();
};

// кнопка Очистить
let clear = document.querySelector('.clear');

clear.onclick = function () {
  notes.value = '';
  notes.focus();
};

// кнопка Капс
let caps = document.querySelector('.caps-lock');

caps.onclick = function () {
  if (!caps.classList.contains('caps-on')) {
    caps.classList.add('caps-on');
    for (let key of button) {
      key.onclick = function () {
        notes.value = notes.value + key.textContent.toUpperCase();
        notes.focus();
      };
    }
    notes.focus();
  } else {
    caps.classList.remove('caps-on');
    for (let key of button) {
      key.onclick = function () {
        notes.value = notes.value + key.textContent;
        notes.focus();
      };
    }
    notes.focus();
  }
};

// Передвижение по Карте
let myPlace = document.querySelector('.my-place');
let rabbitTown = document.querySelector('.rabbit-town');
let hellTown = document.querySelector('.hell-town');
let kuralevoTown = document.querySelector('.wtf-town');
let wrecketCar = document.querySelector('.wrecket-car');
let prisone = document.querySelector('.prisone');
let backs = ['rabbit-village', 'helltown', 'kuralesovo', 'car', 'prison'];

rabbitTown.onclick = function () {
  myPlace.style.top = '286px';
  myPlace.style.left = '209px';
  setTimeout(function () {
    let rabbitBcg = backs[0];
    body.style.backgroundImage = `url("img/${rabbitBcg}.jpg")`;
  }, 2500);
};

hellTown.onclick = function () {
  myPlace.style.top = '120px';
  myPlace.style.left = '42px';
  setTimeout(function () {
    let hellBcg = backs[1];
    body.style.backgroundImage = `url("img/${hellBcg}.jpg")`;
  }, 2500);
};

kuralevoTown.onclick = function () {
  myPlace.style.top = '60px';
  myPlace.style.left = '344px';
  setTimeout(function () {
    let kuralevoBcg = backs[2];
    body.style.backgroundImage = `url("img/${kuralevoBcg}.jpg")`;
  }, 2500);
};

wrecketCar.onclick = function () {
  myPlace.style.top = '10px';
  myPlace.style.left = '117px';
  setTimeout(function () {
    let wrecketCarBcg = backs[3];
    body.style.backgroundImage = `url("img/${wrecketCarBcg}.jpg")`;
  }, 2500);
};

prisone.onclick = function () {
  myPlace.style.top = '266px';
  myPlace.style.left = '526px';
  setTimeout(function () {
    let prisoneBcg = backs[4];
    body.style.backgroundImage = `url("img/${prisoneBcg}.jpg")`;
  }, 2500);
};

// дата и время
let body = document.querySelector('.body');
let time = document.querySelector('.time');

setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  time.textContent = `${hours}:${minutes}`;
}, 1000);

// меняем фон на ночной
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();

  if (hours >= 18 || hours <= 8) {
    for (let i = 0; i < backs.length; i += 1) {
      if (backs[i].substring(backs[i].length - 6) !== '-night') {
        return backs[i] = `${backs[i]}-night`;
      }
    }
  } else {
    for (let i = 0; i < backs.length; i += 1) {
      if (backs[i].substring(backs[i].length - 6) === '-night') {
        return backs[i] = `${backs[i].substring(0, backs[i].length - 6)}`;
      }
    }
  }
}, 1000);

// Переключение Режимов (карта, )
let map = document.querySelector('.map');
let mapButton = document.querySelector('.map-button');
let notesButton = document.querySelector('.notes-button');
let panelScreens = document.querySelectorAll('.panel');

mapButton.onclick = function () {
  for (let panel of panelScreens) {
    panel.style.display = 'none';
  }

  map.style.display = 'block';
};

notesButton.onclick = function () {
  for (let panel of panelScreens) {
    panel.style.display = 'none';
  }

  notes.style.display = 'block';
  notes.focus();
};

// Переключение фона экрана
let backgroundSwitch = document.querySelector('.background-image');
let bckgMatrix = 'url("img/matrix.jpg")';
let bckgBlack = 'url("img/2.png")';
let bckgWay = 'url("img/way.jpg")';
let bckgSpace = 'url("img/space.jpg")';
let backgrounds = [bckgBlack, bckgMatrix, bckgWay, bckgSpace];

backgroundSwitch.onclick = function () {
  for (let i = 0; i < backgrounds.length; i += 1) {
    if (notes.style.backgroundImage === backgrounds[i]) {
      return notes.style.backgroundImage = backgrounds[i + 1];
    } else if (notes.style.backgroundImage === backgrounds[backgrounds.length - 1]) {
      notes.style.backgroundImage = backgrounds[0];
    }
  }
};

// Переключение цвета текста
let colorSwitch = document.querySelector('.text-color');
let colorGreen = 'rgb(32, 235, 125)';
let colorWhite = 'rgb(255, 255, 255)';
let colorBlack = 'rgb(0, 0, 0)';
let colorRed = 'rgb(255, 0, 0)';
let colors = [colorGreen, colorWhite, colorBlack, colorRed];

colorSwitch.onclick = function () {
  for (let i = 0; i < colors.length; i += 1) {
    console.log(colors[i])
    if (notes.style.color === colors[i]) {
      return notes.style.color = colors[i + 1];
    } else if (notes.style.color === colors[colors.length - 1]) {
      notes.style.color = colors[0];
    }
  }
};

// Выключение ПК
let onOffButton = document.querySelector('.on-off');
let pc = document.querySelector('.pc');
let video = document.querySelector('.video');

onOffButton.onclick = function () {
  if (pc.classList.contains('pc-on')) {
    pc.classList.remove('pc-on');
    pc.classList.add('pc-off');
  } else {
    pc.classList.remove('pc-off');
    pc.classList.add('pc-on');
    notes.style.backgroundImage = bckgBlack;
    notes.style.color = colorGreen;

    function videoOn() {
      notes.style.display = 'none';
      video.style.display = 'block';
      video.play();
    }

    function videoOff() {
      video.style.display = 'none';
      notes.style.display = 'block';
      notes.focus();
    }

    setTimeout(videoOn, 1500);
    setTimeout(videoOff, 5500);
  }
};



