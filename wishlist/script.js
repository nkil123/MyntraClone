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

let logo = document.getElementById ('logo');
logo.onclick = function () {
  window.location.href = '/myntra/myntra.html';
};

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bag/bag.html';
};

let data = [
  {
    id: 21,
    title: 'White & Black Sheath Dress & Belt',
    price: '903',
    gender: 'Women',
    description: 'White and black typography print sheath dress,Round neck,Sleeveless, no sleeves,Above knee length in,straight hem,Comes with a belt',
    brand: 'URBANIC',
    color: 'White & Black',
    discount: '35',
    off_price: 1390,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/817dc96e-f893-47aa-824e-98d91f396f261630562359704EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/90a66afe-feb2-40c1-a699-c81cd7a09fbd1630562359723EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/a5bf4c69-c5c9-4d75-a2e7-e3bcc92114101630562359741EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/179c0b82-63bf-4388-9feb-aec125d4579b1630562359760EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres4.jpg',
    },
    rating: {
      rate: 4.2,
      count: 220,
    },
  },

  {
    id: 22,
    title: 'Women Pink Daisy Duck Printed Sweatshirt',
    price: '799',
    gender: 'women',
    description: '',
    brand: 'NEW Kook N Keech Disney',
    color: 'Pink',
    discount: '60',
    off_price: 1999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/352e3703-d6de-43d5-804b-370082c81f6d1573553236671-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/ebe54fda-7589-4a0b-9332-a35e6b5ee3571573553236609-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/91b2fadd-735f-486c-9bfa-bcb3ba2ea9b71573553236558-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/a28f02d9-e138-43e2-ab00-03060e27d03d1573553236511-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-4.jpg',
    },
    rating: {
      rate: 4.5,
      count: 296,
    },
  },
  {
    id: 30,
    title: 'Black Dri-FIT Swoosh Zip-Front Medium-Support Workout Bra - Lightly Padded',
    price: '2021',
    gender: 'women',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.Stretch fabric and an elastic chest band provide a comfortable, compressive feel while shaping to prevent the sensation of empty space in your cups.The semi-auto lock zipper on the front helps prevent unwanted unzipping yet still makes it easy to get in and out',
    brand: 'Nike',
    color: 'Black',
    discount: '25',
    off_price: 2695,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/1896ad8d-3bb0-43d4-b10e-4718d44fb1e31631612114483-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/505e35c2-533d-4f98-b84c-6c3065e3e43e1631612114463-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/4991242e-a848-4db8-bb17-d18495db1ebc1631612114444-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/32db2112-de4d-49a6-b1f0-f663206f5ca91631612114425-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-4.jpg',
    },
    rating: {
      rate: 4.3,
      count: 15,
    },
  },
  {
    id: 23,
    title: 'Women Navy Blue & Beige Embroidered Pullover Sweater',
    price: '959',
    gender: 'women',
    description: 'Navy Blue and Beige solid pullover sweater, has a round neck, long sleeves, and ribbed hem',
    brand: 'all about you',
    color: 'Navy Blue',
    discount: '60',
    off_price: 2399,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/fce2dfb7-4a8b-44ea-a8fa-57d3a4161ef31604297764803-all-about-you-Women-Sweaters-6661604297763170-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/2e227d7f-a463-44d1-8d44-80501a19c74e1604305672635-all-about-you-Women-Sweaters-4511604305671949-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/1204a9f6-69ac-458e-8645-3aec5cf8ba651604305672584-all-about-you-Women-Sweaters-4511604305671949-4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/d9a92fdb-91db-472c-998f-f82bb73a53291604297764597-all-about-you-Women-Sweaters-6661604297763170-5.jpg',
    },
    rating: {
      rate: 4.5,
      count: 67,
    },
  },
  {
    id: 24,
    title: 'Women Red Solid A-Line Dress',
    price: '1049',
    gender: 'women',
    description: 'Red solid woven A-line dress with lace detail, has a round neck, long sleeves, flared hem',
    brand: 'Vero Moda',
    color: 'Red',
    discount: '65',
    off_price: 2999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/ea790e3a-c52f-4fa4-9aee-e1db99ae737e1577961976602-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/57597b08-078d-4bdb-b39f-3833473631101577961976531-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/1bf946b1-365b-4b41-b69d-1c504680d71f1577961976455-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/56d2fe6c-3a17-4104-bacb-3d1b96f5eb361577961976567-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-2.jpg',
    },
    rating: {
      rate: 4,
      count: 103,
    },
  },

  {
    id: 25,
    title: 'Women Blue Mile Super Skinny Fit High-Rise Light Fade Stretchable Jeans',
    price: '2939',
    gender: 'women',
    description: '',
    brand: 'Levis',
    color: 'Blue',
    discount: '40',
    off_price: 4899,
    images: [
      {
        image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/125fc4ac-7be7-4a35-98cc-0ed8af5e0c581626695221843-Levis-Women-Jeans-4801626695221087-1.jpg',
        image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/af4361b5-a6d2-48f0-ad55-05f45dd3d8a31626695221833-Levis-Women-Jeans-4801626695221087-2.jpg',
        image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/e021dfdf-261d-47fc-a987-5e4d3b611c8b1626695221824-Levis-Women-Jeans-4801626695221087-3.jpg',
        image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/d471eede-c3aa-49ea-b821-f035fc3e83431626695221812-Levis-Women-Jeans-4801626695221087-4.jpg',
      },
    ],
    rating: {
      rate: 4.4,
      count: 41,
    },
  },
];

let count = 1;
let wishItems = document.getElementById ('wishItems');
let quantity = document.getElementById ('quantity');

function display (datas) {
  wishItems.innerHTML = null;
  datas.forEach (element => {
    let eachI = document.createElement ('div');
    eachI.className = 'eachI';

    let imgd = document.createElement ('div');
    imgd.className = 'imgd';

    let closeI = document.createElement ('div');
    closeI.className = 'closeI';
    closeI.style.cursor = 'pointer';
    closeI.onclick = function () {
      remove (element.id);
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
    s1.innerHTML = `  ${'  Rs.' + element.off_price}   `;

    let s2 = document.createElement ('s');
    s2.className = 'pstrike';
    s2.innerHTML = `  ${'  Rs.' + element.off_price}`;

    let s3 = document.createElement ('span');
    s3.className = 'off';
    s3.innerHTML = `${' (' + element.price + '%' + ')'}`;
    s3.style.color = '#FF905A';

    // (s1, s2, s3);

    desd.append (pp, s1, s2, s3);

    let bagd = document.createElement ('div');
    bagd.className = 'bagd';

    let a = document.createElement ('a');
    a.innerHTML = 'MOVE TO BAG';

    bagd.append (a);

    eachI.append (imgd, desd, bagd);
    wishItems.appendChild (eachI);
    count++;
    if (quantity.innerHTML == null) {
      quantity.innerHTML = count;
    } else {
      quantity.innerHTML = count++;
    }
  });
}

display (data);
function remove (ids) {
  console.log (ids);
  let newd = data.filter (element => element.id != ids);

  display (newd);

  quantity.innerHTML = null;
}
quantity.innerHTML = count;
