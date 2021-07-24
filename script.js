/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (function() {

//! Различные пупапы
const colorsImg = document.querySelectorAll('.colors-preview__img'),
      trowellingImg = document.querySelectorAll('.item-order__img'),
      mPopup = document.querySelector('.popup-zoom'),
      body = document.querySelector('body');
      
trowellingImg.forEach(trowelling => {
  trowelling.addEventListener('click', () => {
    mPopup.querySelector('img').src = trowelling.querySelector('img').src;
    mPopup.classList.remove('off');
    body.classList.add('_lock');
  })
});

colorsImg.forEach(color => {
  color.addEventListener('click', () => {
    mPopup.querySelector('img').src = color.querySelector('img').src;
    mPopup.classList.remove('off');
    body.classList.add('_lock');
  })
});

mPopup.querySelector('.popup-zoom__body').addEventListener('click', (e) => {
  if (!e.target.closest('.popup-zoom__img')) {
    mPopup.classList.add('off');
    body.classList.remove('_lock');
  }
})

mPopup.querySelector('.popup-zoom__close').addEventListener('click', () => {
  mPopup.classList.add('off');
  body.classList.remove('_lock');
});

/***/ }),

/***/ "./src/js/trowelling.js":
/*!******************************!*\
  !*** ./src/js/trowelling.js ***!
  \******************************/
/***/ (function() {

const backConstValue = {
  element: {
    s: 0.57,
    price: 990,
  },
  angle: {
    show: true,
    s: 14,
    price: 95,
  },
  trowelling: {
    1: {
      exp: 2.4,
      s: 7,
      price: 690,
    },
    2: {
      exp: 2.4,
      s: 7,
      price: 800,
    },
    3: {
      exp: 2.4,
      s: 7,
      price: 690,
    },
  },
  glue: {
    exp: 5,
    s: 25,
    price: 900,
  },
}

//! Проверка наличия углов
if (!backConstValue.angle.show) {
  const angularSub = document.createElement('div'),
        angularSubBody = document.querySelector('.angular-settings-order');
  try {
  angularSubBody.textContent = '';
  angularSub.classList.add('angular-settings-order__subtext');
  angularSub.textContent = 'Угловые элементы не предусмотрены';
  angularSubBody.appendChild(angularSub);
  } catch (e) {
    console.log(`Ошибка в блоке Проверка наличия углов\n${e}`);
  }
}

//! Выбор расцветки
const colors = document.querySelectorAll('.colors-preview__border'),
  titlePage = document.querySelector('.preview__title'),
  titleOrder = document.querySelector('.order__title'),
  img = document.querySelector('.order__img'),
  itemColors = document.querySelectorAll('.colors-preview__img');

let srcColor = itemColors[0].querySelector('img').src,
  IndexColor = 1,
  titleBuy = titlePage.textContent;

try {
  colors.forEach((color, i) => {
    color.addEventListener('click', () => {
      colors.forEach(color => {
        color.classList.remove('_active');
      });
      color.classList.add('_active');
      IndexColor = i + 1;
      srcColor = itemColors[i].querySelector('img').src;
      titleOrder.innerHTML = `${titleBuy} | №${IndexColor}`;
      img.querySelector('img').src = srcColor;
    })
  });
} catch (e) {
  console.log(`Ошибка в блоке Выбор расцветки:\n${e}`);
}

//! Активация выбора Углов
const angularCheck = document.querySelector('.angular-settings-order__checkbox span'),
  angularInput = document.querySelector('.angular-settings-order__input');

try {
  angularCheck.addEventListener('click', () => {
    angularInput.classList.toggle('_active');
    numTotalPrevF()
  })
} catch (e) {
  console.log(`Ошибка в блоке Активация выбора Углов\n${e}`);
}

const add1 = document.querySelector('.size-settings-order__add-or-del-1 .size-settings-order__add'),
  add2 = document.querySelector('.size-settings-order__add-or-del-2 .size-settings-order__add'),
  add3 = document.querySelector('.size-settings-order__add-or-del-3 .size-settings-order__add');

const del2 = document.querySelector('.size-settings-order__add-or-del-2 .size-settings-order__del'),
  del3 = document.querySelector('.size-settings-order__add-or-del-3 .size-settings-order__del'),
  del4 = document.querySelector('.size-settings-order__add-or-del-4 .size-settings-order__del');

const width1 = document.querySelector('.size-settings-order__width-1'),
  width2 = document.querySelector('.size-settings-order__width-2'),
  width3 = document.querySelector('.size-settings-order__width-3'),
  width4 = document.querySelector('.size-settings-order__width-4');

const hight1 = document.querySelector('.size-settings-order__hight-1'),
  hight2 = document.querySelector('.size-settings-order__hight-2'),
  hight3 = document.querySelector('.size-settings-order__hight-3'),
  hight4 = document.querySelector('.size-settings-order__hight-4');

try{
add1.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-1').classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-2').classList.add('_active');
  width2.classList.add('_active');
  hight2.classList.add('_active');
  numTotalPrevF()
})

add2.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-2').classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-3').classList.add('_active');
  width3.classList.add('_active');
  hight3.classList.add('_active');
  numTotalPrevF()
})

add3.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-3').classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-4').classList.add('_active');
  width4.classList.add('_active');
  hight4.classList.add('_active');
  numTotalPrevF()
})

del2.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-2').classList.remove('_active');
  width2.classList.remove('_active');
  hight2.classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-1').classList.add('_active');
  numTotalPrevF()
})

del3.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-3').classList.remove('_active');
  width3.classList.remove('_active');
  hight3.classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-2').classList.add('_active');
  numTotalPrevF()
})

del4.addEventListener('click', () => {
  document.querySelector('.size-settings-order__add-or-del-4').classList.remove('_active');
  width4.classList.remove('_active');
  hight4.classList.remove('_active');
  document.querySelector('.size-settings-order__add-or-del-3').classList.add('_active');
  numTotalPrevF()
})
} catch (e) {
  console.log(`Ошибка в блоке Активация выбора Углов\n${e}`);
}

//! Пупап формы 
const fPopup = document.querySelector('.popup-form'),
  body = document.querySelector('body'),
  btnAdd = document.querySelector('.settings-order__buy-btn');

const title = document.querySelector('.details-popup-form-head span'),
  num = document.querySelector('.details-popup-form-body__article .details-popup-form-body__num'),

  sizeQ = document.querySelector('.details-popup-form-body__quantity .details-popup-form-body__q'),
  sizePrice = document.querySelector('.details-popup-form-body__quantity .details-popup-form-body__price'),

  angleBody = document.querySelector('.details-popup-form-body__angle'),
  angleQ = angleBody.querySelector('.details-popup-form-body__q'),
  anglePrice = angleBody.querySelector('.details-popup-form-body__price'),

  trowellingBody = document.querySelector('.details-popup-form-body__trowelling'),
  trowellingNum = trowellingBody.querySelector('.details-popup-form-body__num'),
  trowellingQ = trowellingBody.querySelector('.details-popup-form-body__q'),
  trowellingPrice = trowellingBody.querySelector('.details-popup-form-body__price'),

  glueBody = document.querySelector('.details-popup-form-body__glue'),
  glueQ = glueBody.querySelector('.details-popup-form-body__q'),
  gluePrice = glueBody.querySelector('.details-popup-form-body__price'),

  numTotal = document.querySelector('.details-popup-form-footer .details-popup-form-footer__total'),
  popupImg = document.querySelector('.details-popup-form-body__img img');


function validate_hight_width_angular(hightAll, widthAll, angular) {

  hightAll.forEach(hight => {
    if (hight.value <= 0 || hight.value == '' || isNaN(hight.value)) {
      hight.style.border = '1px solid red';
      return false;
    } else {
      hight.style.border = '1px solid #cacaca';
    }
  })

  widthAll.forEach(width => {
    if (width.value <= 0 || width.value == '' || isNaN(width.value)) {
      width.style.border = '1px solid red';
      return false;
    } else {
      width.style.border = '1px solid #cacaca';
    }
  })

  if (document.querySelector('.angular-settings-order__input').classList.contains('_active') && (angular.value <= 0 || angular.value == '' || isNaN(angular.value))) {
    angular.style.border = '1px solid red';
    return false;
  } else {
    angular.style.border = '1px solid #cacaca';
  }

  return true;
}

function sum_total(mod, viewBlock = 0, value1 = 0, value2 = 0, value3 = 0, value4 = 0) {
  if (mod == 'sizeOrAngular') {
    if (document.querySelector('.angular-settings-order__input').classList.contains('_active')) {
      document.querySelector('.details-popup-form-body__angle').style.display = 'block';
      return [Math.ceil((value1 / 10000 - value2 / 100 * 0.2) * 1.1 / backConstValue.element.s) * backConstValue.element.s, Math.ceil(Math.ceil(value2 / 100 * backConstValue.angle.s) / backConstValue.angle.s) * backConstValue.angle.s]
    } else {
      document.querySelector('.details-popup-form-body__angle').style.display = 'none';
      return [Math.ceil(value1 / 10000 * 1.1 / backConstValue.element.s) * backConstValue.element.s, 0]
    }
  }
  else if (mod == 'trowelling') {
    let trowellingBody = document.querySelector('.details-popup-form-body__trowelling'),
      trowellingRow = document.querySelector('.trowelling-settings-order__row');
    if (trowellingRow.classList.contains('_active')) {
      trowellingBody.style.display = 'block';
      return Math.ceil(value1 / 10000 * backConstValue.trowelling[value2].exp / backConstValue.trowelling[value2].s)

    } else {
      trowellingBody.style.display = 'none';
      return 0
    }
  }
  else if (mod == 'glue') {
    if (value2.classList.contains('_active')) {
      viewBlock.style.display = 'block';
      return Math.ceil(value1 / 10000 * backConstValue.glue.exp / backConstValue.glue.s)
    } else {
      viewBlock.style.display = 'none';
      return 0
    }
  }
}

let hightAll = document.querySelectorAll('.size-settings-order__hight input'),
    widthAll = document.querySelectorAll('.size-settings-order__width input'),
    angular = document.querySelector('.angular-settings-order__input input'),
    numTotalPrev = document.querySelector('.settings-order__sum');

function numTotalPrevF() {
  let hightAll = document.querySelectorAll('.size-settings-order__hight._active input'),
      widthAll = document.querySelectorAll('.size-settings-order__width._active input'),
      angular = document.querySelector('.angular-settings-order__input input');
  check = validate_hight_width_angular(hightAll, widthAll, angular);
  if (check) {
    let hightA = 0
    hightAll.forEach((hight, i) => { hightA += Number(hight.value * widthAll[i].value) })
    let [sizeSum, angularSum] = sum_total('sizeOrAngular', angleBody, hightA, angular.value);
    let trowellingSum = sum_total('trowelling', 0, hightA, trowellingIndex),
      glueSum = sum_total('glue', glueBody, hightA, glue);
    numTotalPrev.textContent = (backConstValue.element.price * sizeSum + angularSum * backConstValue.angle.price + backConstValue.trowelling[trowellingIndex].price * trowellingSum + glueSum * backConstValue.glue.price).toLocaleString();
  } else {
    numTotalPrev.textContent = '0'
  }
}

hightAll.forEach(hight => {
  hight.addEventListener('change', () => { numTotalPrevF() });
});

widthAll.forEach(width => {
  width.addEventListener('change', () => { numTotalPrevF() });
});

angular.addEventListener('change', () => { numTotalPrevF() });

//! Активация выбора затирок
const trowelling = document.querySelector('.trowelling-settings-order__checkbox span'),
  trowellingRow = document.querySelector('.trowelling-settings-order__row');

trowelling.addEventListener('click', () => {
  trowellingRow.classList.toggle('_active');
  numTotalPrevF()
})

//! Выбор затирки
const trowellingBorders = document.querySelectorAll('.item-order__border');
let trowellingIndex = 1
try {
  trowellingBorders.forEach((border, i) => {
    border.addEventListener('click', () => {
      trowellingBorders.forEach(brdr => {
        brdr.classList.remove('_active');
      });
      border.classList.add('_active');
      trowellingIndex = i + 1;
      numTotalPrevF()
    })
  });
} catch (e) {
  console.log(`Ошибка в блоке Preview:\n${e}`);
}

//! Добавить клей
const glue = document.querySelector('.glue-settings-order__checkbox span');

glue.addEventListener('click', () => {
  glue.classList.toggle('_active');
  numTotalPrevF()
})

btnAdd.addEventListener('click', () => {

  let hightAll = document.querySelectorAll('.size-settings-order__hight._active input'),
      widthAll = document.querySelectorAll('.size-settings-order__width._active input'),
      angular = document.querySelector('.angular-settings-order__input input');


    check = validate_hight_width_angular(hightAll, widthAll, angular);

    if (check) {
      let hightA = 0
      hightAll.forEach((hight, i) => { hightA += Number(hight.value * widthAll[i].value) })
      let [sizeSum, angularSum] = sum_total('sizeOrAngular', angleBody, hightA, angular.value);
      let trowellingSum = sum_total('trowelling', 0, hightA, trowellingIndex),
          glueSum = sum_total('glue', glueBody, hightA, glue);
  
      fPopup.classList.remove('off');
      body.classList.add('_lock');

      title.textContent = titleBuy;
      popupImg.src = srcColor;
      num.textContent = IndexColor;

      sizeQ.textContent = (sizeSum).toLocaleString();
      sizePrice.textContent = (backConstValue.element.price * sizeSum).toLocaleString();

      angleQ.textContent = (angularSum).toLocaleString();
      anglePrice.textContent = (angularSum * backConstValue.angle.price).toLocaleString();

      trowellingNum.textContent = trowellingIndex;
      trowellingQ.textContent = (trowellingSum).toLocaleString();
      trowellingPrice.textContent = (trowellingSum * backConstValue.trowelling[trowellingIndex].price).toLocaleString();

      glueQ.textContent = (glueSum).toLocaleString();
      gluePrice.textContent = (glueSum * backConstValue.glue.price).toLocaleString();

      numTotal.textContent = (backConstValue.element.price * sizeSum + angularSum * backConstValue.angle.price + backConstValue.trowelling[trowellingIndex].price * trowellingSum + glueSum * backConstValue.glue.price).toLocaleString();
    }

  });

const btnSend = document.querySelector('.popup-form__btn-send');

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

btnSend.addEventListener('click', () => {
  const email = document.querySelector('.person-popup-form__input-email'),
        tel = document.querySelector('.person-popup-form__input-tel');

  if (validateEmail(email.value)) {
    email.style.border = '1px solid #cacaca';
    if (tel.value != null && tel.value != '' && (tel.value.length == 12 || tel.value.length == 11) ) {
      tel.style.border = '1px solid #cacaca';
      document.forms["mail"].reset();
    } else {
      tel.style.border = '1px solid red';
    }
  } else {
    email.style.border = '1px solid red';
  }

})

//! Закоать пупам и очистить форму
const close = document.querySelector('.popup-form__close');

close.addEventListener('click', () => {
  document.forms["mail"].reset();
  fPopup.classList.add('off');
  body.classList.remove('_lock');
})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _trowelling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trowelling */ "./src/js/trowelling.js");
/* harmony import */ var _trowelling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trowelling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_2__);






}();
/******/ })()
;
//# sourceMappingURL=script.js.map