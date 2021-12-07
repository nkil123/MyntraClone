import {navbar} from '/comps/navbar/navbar.js';

let nav = document.getElementById ('navbar');
nav.innerHTML = navbar ();

import {foot} from '/comps/footer/footer.js';

// let navvbar = document.getElementById("navbar");
// console.log("navbar:", navvbar);

// navvbar.innerHTML = navbar();

let footer = document.getElementById ('footer');

footer.innerHTML = foot ();

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

// let logo = document.getElementById ('logo');
// logo.onclick = function () {
//   window.location.href = '/myntra/myntra.html';
// };

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bag/bag.html';
};

let data = JSON.parse (localStorage.getItem ('wishlist'));

let wishItems = document.getElementById ('wishItems');
let quantity = document.getElementById ('quantity');

function display (datas) {
  wishItems.innerHTML = null;
  quantity.innerHTML = datas.length;
  datas.forEach (element => {
    let eachI = document.createElement ('div');
    eachI.className = 'eachI';

    let imgd = document.createElement ('div');
    imgd.className = 'imgd';

    let closeI = document.createElement ('div');
    closeI.className = 'closeI';
    closeI.style.cursor = 'pointer';
    closeI.onclick = function () {
      remove (element.id, datas);
    };

    let spann = document.createElement ('span');
    spann.className = 'material-icons';
    spann.innerHTML = 'close';

    closeI.append (spann);

    let img = document.createElement ('img');
    img.src = element.images.image1;

    imgd.append (closeI, img);

    let desd = document.createElement ('div');
    desd.className = 'desd';

    let pp = document.createElement ('p');
    pp.innerHTML = element.title;
    pp.style.overflow = 'hidden';

    // let pp2 = document.createElement("p");

    let s1 = document.createElement ('strong');
    s1.className = 'price';
    s1.innerHTML = `  ${'  Rs.' + element.price}   `;

    let s2 = document.createElement ('s');
    s2.className = 'pstrike';
    s2.innerHTML = `  ${'  Rs.' + element.off_price}`;

    let s3 = document.createElement ('span');
    s3.className = 'off';
    s3.innerHTML = `${' (' + element.discount + '%' + ')'}`;
    s3.style.color = '#FF905A';

    // (s1, s2, s3);

    desd.append (pp, s1, s2, s3);

    let bagd = document.createElement ('div');
    bagd.className = 'bagd';
    bagd.style.cursor = 'pointer';

    let a = document.createElement ('a');
    a.innerHTML = 'MOVE TO BAG';
    bagd.onclick = function () {
      addToBag (element, datas);
    };
    bagd.append (a);

    eachI.append (imgd, desd, bagd);
    wishItems.appendChild (eachI);
  });
}

function remove (ids, datas) {
  console.log (ids);
  let newd = datas.filter (element => element.id != ids);

  localStorage.setItem ('wishlist', JSON.stringify (newd));
  display (newd);
  // display (newd);
}
// quantity.innerHTML = count;
display (data);

function addToBag (item, datas) {
  if (localStorage.getItem ('cart') == null) {
    localStorage.setItem ('cart', JSON.stringify ([]));
  }

  let bag = JSON.parse (localStorage.getItem ('cart'));
  bag.push (item);

  localStorage.setItem ('cart', JSON.stringify (bag));

  remove (item.id, datas);
}
