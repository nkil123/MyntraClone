import {navbar} from '/comps/navbar/navbar.js';
import {aObjs, ftn} from '/comps/data/data.js';
// console.log (aObjs ());
var newdatas = aObjs ();

// import {foot} from '/comps/footer/footer.js';

let nav = document.getElementById ('navbar');
nav.innerHTML = navbar ();

let opt1 = document.getElementById ('opt1');
let toshow = document.getElementById ('MEN');
let ddown = document.getElementsByClassName ('ddown');
let name = document.getElementById ('name');
opt1.onmouseover = function () {
  // console.log(toshow);
  opt1.style.borderBottom = '4px solid red';

  toshow.style.visibility = 'visible';
};
opt1.onmouseleave = function () {
  // console.log(toshow);
  opt1.style.borderBottom = null;
  toshow.style.visibility = 'hidden';
};

let opt2 = document.getElementById ('opt2');
let toshow2 = document.getElementById ('WOMEN');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
opt2.onmouseover = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = '4px solid red';
  toshow2.style.visibility = 'visible';
};
opt2.onmouseleave = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = null;
  toshow2.style.visibility = 'hidden';
};

let opt3 = document.getElementById ('opt3');
let toshow3 = document.getElementById ('KIDS');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt3, toshow3);
opt3.onmouseover = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = '4px solid red';
  toshow3.style.visibility = 'visible';
};
opt3.onmouseleave = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = null;
  toshow3.style.visibility = 'hidden';
};

let opt4 = document.getElementById ('opt4');
let toshow4 = document.getElementById ('HOMEL');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt4, toshow4);
opt4.onmouseover = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = '4px solid red';
  toshow4.style.visibility = 'visible';
};
opt4.onmouseleave = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = null;
  toshow4.style.visibility = 'hidden';
};

let opt5 = document.getElementById ('opt5');
let toshow5 = document.getElementById ('BEAUTY');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
// console.log(opt4, toshow4);
opt5.onmouseover = function () {
  // console.log(toshow4);
  opt5.style.borderBottom = '4px solid red';
  toshow5.style.visibility = 'visible';
};
opt5.onmouseleave = function () {
  // console.log(toshow5);
  opt5.style.borderBottom = null;
  toshow5.style.visibility = 'hidden';
};

let opt6 = document.getElementById ('profileI');
let toshow6 = document.getElementById ('dprofile');

opt6.onmouseover = function () {
  toshow6.style.visibility = 'visible';
};
opt6.onmouseleave = function () {
  opt6.style.borderBottom = null;
  toshow6.style.visibility = 'hidden';
};

let wishlist = document.getElementById ('wishlistI');
wishlist.style.cursor = 'pointer';
wishlist.onclick = function () {
  window.location.href = '/wishlist/wishlist.html';
};

let logo = document.getElementById ('logo');
logo.onclick = function () {
  window.location.href = '/myntra/myntra.html';
};

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bag/bag.html';
};

/// FOR DATA AND FILTER

var productData;

if (localStorage.getItem ('filter') === null) {
  localStorage.setItem ('filter', JSON.stringify ([]));
}

let filter = JSON.parse (localStorage.getItem ('filter'));
if (filter.length === 0) {
  productData = newdatas;
} else {
  productData = ftn (filter[0], newdatas);
}

console.log (ftn ('men', newdatas));

var products_cont = document.getElementById ('products_cont');

function show_products (products) {
  products_cont.innerHTML = null;

  products.forEach (function (product) {
    let outer_div = document.createElement ('div');

    outer_div.onmouseleave = function () {};

    let image_div = document.createElement ('div');
    image_div.className = 'img_div';
    // image_div.style.background = 'red';

    let img = document.createElement ('img');
    img.setAttribute ('id', 'proImg');
    img.src = product.images.image1;

    let wishbtn = document.createElement ('button');
    wishbtn.className = 'wishbtn';

    let wishicon = document.createElement ('span');
    wishicon.className = 'material-icons';
    wishicon.innerHTML = 'favorite_border';

    let wishname = document.createElement ('span');
    wishname.innerHTML = 'WISHLIST';

    wishbtn.append (wishicon, wishname);

    outer_div.onmousemove = function () {
      wishbtn.style.visibility = 'visible';
      wishbtn.style.border = '2px solid grey';
    };

    outer_div.onmouseout = function () {
      wishbtn.style.visibility = 'hidden';
    };

    wishbtn.onclick = function () {
      wishicon.style.background = 'red';
      wishname.innerHTML = 'WISHLISTED';
      wishname.style.color = 'white';

      wishbtn.style.background = '#565759';
      wishname.style.background = '#565759';

      addtoWishlist (product);
    };

    image_div.append (img, wishbtn);

    let text_div = document.createElement ('div');
    text_div.style.padding = '10px';

    let brand = document.createElement ('p');
    brand.innerText = product.brand;

    brand.style.fontWeight = 'bold';
    let title = document.createElement ('p');
    title.style.fontSize = '14px';

    title.innerText = product.title;

    let price = document.createElement ('span');
    price.innerText = 'Rs.' + product.price + ' ';
    price.style.fontWeight = 'bold';

    let off_price = document.createElement ('span');
    off_price.innerText = 'Rs' + product.off_price + ' ';
    off_price.style.color = 'gray';
    off_price.style.textDecoration = 'line-through';

    let discount = document.createElement ('span');
    discount.innerText = '(' + product.discount + '%OFF)';
    discount.style.color = 'red';

    text_div.append (brand, title, price, off_price, discount);
    outer_div.append (image_div, text_div);

    img.onclick = function () {
      addtoDescription (product);
      window.location.href = '/description/description.html';
    };
    text_div.onclick = function () {
      addtoDescription (product);
      window.location.href = '/description/description.html';
    };
    outer_div.addEventListener ('mouseenter', changeimages);
    outer_div.addEventListener ('mouseleave', removeimages);
    let interval;
    function changeimages () {
      var a = 1;
      interval = setInterval (function () {
        if (a > 4) {
          a = 1;
        }
        let x = 'image' + a;
        img.src = product.images[x];
        x = '';
        a = a + 1;
      }, 1000);
    }
    function removeimages () {
      clearInterval (interval);
      img.src = product.images.image1;
    }
    products_cont.append (outer_div);
  });
}

let whatsnew = document.getElementById ('whatsnew');
whatsnew.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.id - a.id;
  });
  show_products (arr);
};

let popularity = document.getElementById ('popularity');
popularity.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.rating - a.rating;
  });

  console.log (arr);
  show_products (arr);
};

let betterDiscount = document.getElementById ('betterDiscount');
betterDiscount.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.discount - a.discount;
  });
  show_products (arr);
};

let sortHightoLow = document.getElementById ('sortHightoLow');
sortHightoLow.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.price - a.price;
  });

  console.log (arr);
  show_products (arr);
};

let sortLowtoHigh = document.getElementById ('sortLowtoHigh');
sortLowtoHigh.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return a.price - b.price;
  });

  console.log (arr);
  show_products (arr);
};

let costomerRating = document.getElementById ('costomerRating');
costomerRating.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.rating - a.rating;
  });

  console.log (arr);
  show_products (arr);
};

let menArr = [];
let womenArr = [];

productData.forEach (para => {
  let menBox = document.getElementById ('men');
  menBox.addEventListener ('change', menCheck);

  function menCheck () {
    console.log (menBox.value);
    if (menBox.value == para.gender && menBox.value == 'men') {
      menArr.push (para);
      show_products (menArr);
    }
  }
});

productData.forEach (para => {
  let womenBox = document.getElementById ('women');
  womenBox.addEventListener ('change', womenCheck);

  function womenCheck () {
    console.log (womenBox.value);
    if (womenBox.value == para.gender && womenBox.value == 'women') {
      womenArr.push (para);
      show_products (womenArr);
    }
  }
});
productData.forEach (para => {
  let boysBox = document.getElementById ('boys');
  boysBox.addEventListener ('change', boysCheck);

  function boysCheck () {
    if (boysBox.value == para.gender && boysBox.value == 'men') {
      menArr.push (para);
      show_products (menArr);
    }
  }
});
productData.forEach (para => {
  let girlsBox = document.getElementById ('girls');
  girlsBox.addEventListener ('change', girlsCheck);

  function girlsCheck () {
    if (girlsBox.value == para.gender && girlsBox.value == 'women') {
      womenArr.push (para);
      show_products (womenArr);
    }
  }
});

// checkboxe sorting for categories
let shirtArr = [];
let tshirtArr = [];
let topsArr = [];
let kurtaArr = [];
let beautycareArr = [];
let dressesArr = [];
let shoesArr = [];
let shortArr = [];

productData.forEach (para => {
  let tshirtBox = document.getElementById ('tshirt');
  tshirtBox.addEventListener ('change', tshirtCheck);
  function tshirtCheck () {
    if (tshirtBox.value == 'tshirt' && tshirtBox.value == para.categories) {
      tshirtArr.push (para);
      show_products (tshirtArr);
    }
  }
});

productData.forEach (para => {
  let topsBox = document.getElementById ('tops');
  topsBox.addEventListener ('change', topsCheck);
  function topsCheck () {
    if (topsBox.value == 'tops' && topsBox.value == para.categories) {
      topsArr.push (para);
      show_products (topsArr);
    }
  }
});

productData.forEach (para => {
  let kurtaBox = document.getElementById ('kurta');
  kurtaBox.addEventListener ('change', kurtaCheck);
  function kurtaCheck () {
    if (kurtaBox.value == 'kurta' && kurtaBox.value == para.categories) {
      kurtaArr.push (para);
      show_products (kurtaArr);
    }
  }
});

productData.forEach (para => {
  let beautycareBox = document.getElementById ('beautycare');
  beautycareBox.addEventListener ('change', beautycareCheck);
  function beautycareCheck () {
    if (
      beautycareBox.value == 'beautycare' &&
      beautycareBox.value == para.categories
    ) {
      beautycareArr.push (para);
      show_products (beautycareArr);
    }
  }
});

productData.forEach (para => {
  let shirtBox = document.getElementById ('shirt');
  shirtBox.addEventListener ('change', shirtCheck);
  function shirtCheck () {
    if (shirtBox.value == 'shirt' && shirtBox.value == para.categories) {
      shirtArr.push (para);
      show_products (shirtArr);
    }
  }
});

productData.forEach (para => {
  let dressesBox = document.getElementById ('dresses');
  dressesBox.addEventListener ('change', dressesCheck);
  function dressesCheck () {
    if (dressesBox.value == 'dresses' && dressesBox.value == para.categories) {
      dressesArr.push (para);
      show_products (dressesArr);
    }
  }
});

productData.forEach (para => {
  let shoesBox = document.getElementById ('shoes');
  shoesBox.addEventListener ('change', shoesCheck);
  function shoesCheck () {
    if (shoesBox.value == 'shoes' && shoesBox.value == para.categories) {
      shoesArr.push (para);
      show_products (shoesArr);
    }
  }
});

productData.forEach (para => {
  let shortBox = document.getElementById ('short');
  shortBox.addEventListener ('change', shortCheck);
  function shortCheck () {
    if (shortBox.value == 'short' && shortBox.value == para.categories) {
      shortArr.push (para);
      show_products (shortArr);
    }
  }
});

// Checkbox sorting by Brands

let roadsterArr = [];
let dressberryArr = [];
let cloviaArr = [];
let harbourArr = [];
let celfieArr = [];
let kaliniArr = [];
let herenowArr = [];

productData.forEach (para => {
  let roadsterBox = document.getElementById ('roadster');
  roadsterBox.addEventListener ('change', roadsterCheck);
  function roadsterCheck () {
    if (roadsterBox.value == 'Roadster' && roadsterBox.value == para.brand) {
      roadsterArr.push (para);
      show_products (roadsterArr);
    }
  }
});

productData.forEach (para => {
  let dressberryBox = document.getElementById ('dressberry');
  dressberryBox.addEventListener ('change', dressberryCheck);
  function dressberryCheck () {
    if (
      dressberryBox.value == 'Dressberry' &&
      dressberryBox.value == para.brand
    ) {
      dressberryArr.push (para);
      show_products (dressberryArr);
    }
  }
});
productData.forEach (para => {
  let cloviaBox = document.getElementById ('clovia');
  cloviaBox.addEventListener ('change', cloviaCheck);
  function cloviaCheck () {
    if (cloviaBox.value == 'Clovia' && cloviaBox.value == para.brand) {
      cloviaArr.push (para);
      show_products (cloviaArr);
    }
  }
});
productData.forEach (para => {
  let herenowBox = document.getElementById ('here&now');
  herenowBox.addEventListener ('change', herenowCheck);
  function herenowCheck () {
    if (herenowBox.value == 'HERE&NOW' && herenowBox.value == para.brand) {
      herenowArr.push (para);
      show_products (herenowArr);
    }
  }
});

productData.forEach (para => {
  let harbourBox = document.getElementById ('harbour');
  harbourBox.addEventListener ('change', harbourCheck);
  function harbourCheck () {
    if (
      harbourBox.value == 'Mast & Harbour' &&
      harbourBox.value == para.brand
    ) {
      harbourArr.push (para);
      show_products (harbourArr);
    }
  }
});

productData.forEach (para => {
  let celfieBox = document.getElementById ('celfie');
  celfieBox.addEventListener ('change', celfieCheck);
  function celfieCheck () {
    if (celfieBox.value == 'Celfie Design' && celfieBox.value == para.brand) {
      celfieArr.push (para);
      show_products (celfieArr);
    }
  }
});

productData.forEach (para => {
  let kaliniBox = document.getElementById ('kalini');
  kaliniBox.addEventListener ('change', kaliniCheck);
  function kaliniCheck () {
    if (kaliniBox.value == 'KALINI' && kaliniBox.value == para.brand) {
      kaliniArr.push (para);
      show_products (kaliniArr);
    }
  }
});

// Color filters
let blackArr = [];
let blueArr = [];
let whiteArr = [];
let pinkArr = [];
let navyBlueArr = [];
let redArr = [];
let greenArr = [];

productData.forEach (para => {
  let blackBox = document.getElementById ('black');
  blackBox.addEventListener ('change', blackCheck);
  function blackCheck () {
    if (blackBox.value == 'black' && blackBox.value == para.color) {
      blackArr.push (para);
      show_products (blackArr);
    }
  }
});

productData.forEach (para => {
  let blueBox = document.getElementById ('blue');
  blueBox.addEventListener ('change', blueCheck);
  function blueCheck () {
    if (blueBox.value == 'blue' && blueBox.value == para.color) {
      blueArr.push (para);
      show_products (blueArr);
    }
  }
});

productData.forEach (para => {
  let whiteBox = document.getElementById ('white');
  whiteBox.addEventListener ('change', whiteCheck);
  function whiteCheck () {
    if (whiteBox.value == 'white' && whiteBox.value == para.color) {
      whiteArr.push (para);
      show_products (whiteArr);
    }
  }
});
productData.forEach (para => {
  let pinkBox = document.getElementById ('pink');
  pinkBox.addEventListener ('change', pinkCheck);
  function pinkCheck () {
    if (pinkBox.value == 'pink' && pinkBox.value == para.color) {
      pinkArr.push (para);
      show_products (pinkArr);
    }
  }
});

productData.forEach (para => {
  let navyBlueBox = document.getElementById ('navyBlue');
  navyBlueBox.addEventListener ('change', navyBlueCheck);
  function navyBlueCheck () {
    if (navyBlueBox.value == 'navyBlue' && navyBlueBox.value == para.color) {
      navyBlueArr.push (para);
      show_products (navyBlueArr);
    }
  }
});

productData.forEach (para => {
  let redBox = document.getElementById ('red');
  redBox.addEventListener ('change', redCheck);
  function redCheck () {
    if (redBox.value == 'red' && redBox.value == para.color) {
      redArr.push (para);
      show_products (redArr);
    }
  }
});

productData.forEach (para => {
  let greenBox = document.getElementById ('green');
  greenBox.addEventListener ('change', greenCheck);
  function greenCheck () {
    if (greenBox.value == 'green' && greenBox.value == para.color) {
      greenArr.push (para);
      show_products (greenArr);
    }
  }
});

//filter by discouont

let tenArr = [];
let twentyArr = [];
let thirtyArr = [];
let fourtyArr = [];
let fiftyArr = [];
let sixtyArr = [];
let seventyArr = [];
let eightyArr = [];
let ninetyArr = [];

productData.forEach (para => {
  let tenBox = document.getElementById ('ten');
  tenBox.addEventListener ('change', tenCheck);
  function tenCheck () {
    if (tenBox.value <= 90 && tenBox.value <= para.discount) {
      tenArr.push (para);
      show_products (tenArr);
    }
  }
});

productData.forEach (para => {
  let twentyBox = document.getElementById ('twenty');
  twentyBox.addEventListener ('change', twentyCheck);
  function twentyCheck () {
    if (twentyBox.value <= 90 && twentyBox.value <= para.discount) {
      twentyArr.push (para);
      show_products (twentyArr);
    }
  }
});

productData.forEach (para => {
  let thirtyBox = document.getElementById ('thirty');
  thirtyBox.addEventListener ('change', thirtyCheck);
  function thirtyCheck () {
    if (thirtyBox.value <= 90 && thirtyBox.value <= para.discount) {
      thirtyArr.push (para);
      show_products (thirtyArr);
    }
  }
});

productData.forEach (para => {
  let fourtyBox = document.getElementById ('fourty');
  fourtyBox.addEventListener ('change', fourtyCheck);
  function fourtyCheck () {
    if (fourtyBox.value <= 90 && fourtyBox.value <= para.discount) {
      fourtyArr.push (para);
      show_products (fourtyArr);
    }
  }
});
productData.forEach (para => {
  let fiftyBox = document.getElementById ('fifty');
  fiftyBox.addEventListener ('change', fiftyCheck);
  function fiftyCheck () {
    if (fiftyBox.value <= 90 && fiftyBox.value <= para.discount) {
      fiftyArr.push (para);
      show_products (fiftyArr);
    }
  }
});
productData.forEach (para => {
  let sixtyBox = document.getElementById ('sixty');
  sixtyBox.addEventListener ('change', sixtyCheck);
  function sixtyCheck () {
    if (sixtyBox.value <= 90 && sixtyBox.value <= para.discount) {
      sixtyArr.push (para);
      show_products (sixtyArr);
    }
  }
});
productData.forEach (para => {
  let seventyBox = document.getElementById ('seventy');
  seventyBox.addEventListener ('change', seventyCheck);
  function seventyCheck () {
    if (seventyBox.value <= 90 && seventyBox.value <= para.discount) {
      seventyArr.push (para);
      show_products (seventyArr);
    }
  }
});
productData.forEach (para => {
  let eightyBox = document.getElementById ('eighty');
  eightyBox.addEventListener ('change', eightyCheck);
  function eightyCheck () {
    if (eightyBox.value <= 90 && eightyBox.value <= para.discount) {
      eightyArr.push (para);
      show_products (eightyArr);
    }
  }
});
productData.forEach (para => {
  let ninetyBox = document.getElementById ('ninety');
  ninetyBox.addEventListener ('change', ninetyCheck);
  function ninetyCheck () {
    if (ninetyBox.value <= 90 && ninetyBox.value <= para.discount) {
      ninetyArr.push (para);
      show_products (ninetyArr);
    }
  }
});

//filter by price

let firstArr = [];
let secondArr = [];
let thirdArr = [];
let fourthArr = [];
let fifthArr = [];

productData.forEach (para => {
  let firstBox = document.getElementById ('first');
  firstBox.addEventListener ('change', firstCheck);
  function firstCheck () {
    if (
      firstBox.value >= 20 &&
      firstBox.value <= 265 &&
      para.price >= 20 &&
      para.price <= 265
    ) {
      console.log (firstBox.value);
      firstArr.push (para);
      show_products (firstArr);
    }
  }
});

productData.forEach (para => {
  let secondBox = document.getElementById ('second');
  secondBox.addEventListener ('change', secondCheck);
  function secondCheck () {
    if (
      secondBox.value >= 265 &&
      secondBox.value <= 510 &&
      para.price >= 265 &&
      para.price <= 510
    ) {
      secondArr.push (para);
      show_products (secondArr);
    }
  }
});

productData.forEach (para => {
  let thirdBox = document.getElementById ('third');
  thirdBox.addEventListener ('change', thirdCheck);
  function thirdCheck () {
    if (
      thirdBox.value >= 510 &&
      thirdBox.value <= 755 &&
      para.price >= 510 &&
      para.price <= 755
    ) {
      thirdArr.push (para);
      show_products (thirdArr);
    }
  }
});

productData.forEach (para => {
  let fourthBox = document.getElementById ('fourth');
  fourthBox.addEventListener ('change', fourthCheck);
  function fourthCheck () {
    if (
      fourthBox.value >= 755 &&
      fourthBox.value <= 1000 &&
      para.price >= 755 &&
      para.price <= 1000
    ) {
      fourthArr.push (para);
      show_products (fourthArr);
    }
  }
});

productData.forEach (para => {
  let fifthBox = document.getElementById ('fifth');
  fifthBox.addEventListener ('change', fifthCheck);
  function fifthCheck () {
    if (
      fifthBox.value >= 1000 &&
      fifthBox.value <= 10000 &&
      para.price >= 1000 &&
      para.price <= 10000
    ) {
      fifthArr.push (para);
      show_products (fifthArr);
    }
  }
});

function addtoDescription (data) {
  if (localStorage.getItem ('describe') == null) {
    localStorage.setItem ('describe', JSON.stringify ([]));
  }
  let describe = JSON.parse (localStorage.getItem ('describe'));
  describe = [];
  describe.push (data);
  localStorage.setItem ('describe', JSON.stringify (describe));
}

function addtoWishlist (data) {
  if (localStorage.getItem ('wishlist') == null) {
    localStorage.setItem ('wishlist', JSON.stringify ([]));
  }
  let prodcuts_wish = JSON.parse (localStorage.getItem ('wishlist'));
  prodcuts_wish.push (data);
  localStorage.setItem ('wishlist', JSON.stringify (prodcuts_wish));
  console.log ('products_wish:', prodcuts_wish);
}

show_products (productData);

fetch ('https://trains.p.rapidapi.com/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'trains.p.rapidapi.com',
    'x-rapidapi-key': '0dc126c5cdmshda409be8933df6bp182feejsn357cad091d29',
  },
  body: {
    search: 'Rajdhani',
  },
})
  .then (response => {
    console.log (response);
  })
  .catch (err => {
    console.error (err);
  });
