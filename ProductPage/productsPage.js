import {navbar} from '/comps/navbar/navbar.js';

import {foot} from '/comps/footer/footer.js';

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
  window.location.href = '/myntra.html';
};

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bag.html';
};

let productData = [
  {
    id: 11,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Blue Regular Fit Printed Casual Shirt',
    price: '699',
    gender: 'men',
    description: 'Green and White printed casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket',
    brand: 'Roadster',
    color: 'navyBlue',
    discount: 40,
    off_price: 1049,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg',
    },
    rating: 3.9,
  },
  {
    id: 12,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Blue Slim Fit Solid Casual Shirt',
    price: '579',
    gender: 'men',
    description: 'Blue solid casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem',
    brand: 'HERE&NOW',
    color: 'green',
    discount: 42,
    off_price: 999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836087-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989835985-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-5.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836063-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-2.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836001-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-4.jpg',
    },
    rating: 4.1,
  },
  {
    id: 13,
    categories: 'kurta',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Grey & Blue Self Design Kurta with Churidar & Nehru Jacket',
    price: '2199',
    gender: 'women',
    description: '',
    brand: 'Clovia',
    color: 'white',
    discount: 60,
    off_price: 5499,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/c18ee8eb-06f6-4d10-8f4a-680ac10fccf21527055151093-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/81b26584-a36d-414d-9653-195b978884141527055151039-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-3.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/f6d3d7cd-1acc-4e28-b8ee-29e5d9cec46c1527055151075-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-2.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/83986b07-a78e-4999-b2bd-7bacbd5532411527055151001-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-4.jpg',
    },
    rating: 5.9,
  },
  {
    id: 14,
    categories: 'tshirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men White & Navy Blue Pure Cotton Striped Polo Collar T-shirt',
    price: '359',
    gender: 'men',
    description: 'White and navy blue Tshirt for men',
    brand: 'Mast & Harbour',
    color: 'white',
    discount: 10,
    off_price: 899,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/db2efb33-c1a0-40b2-8020-fa5eadad32ea1623996957756-Mast--Harbour-Men-Tshirts-3781623996957278-1.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/00f807c0-7a9e-4887-883d-400a542abc161623996957677-Mast--Harbour-Men-Tshirts-3781623996957278-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/c72642c3-92a0-4495-8a64-31a49445206b1623996957736-Mast--Harbour-Men-Tshirts-3781623996957278-2.jpg',
    },
    rating: 3.9,
  },
  {
    id: 15,
    categories: 'short',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Navy Blue Solid Slim Fit Chino Shorts',
    price: '686',
    gender: 'men',
    description: '',
    brand: 'Dressberry',
    color: 'black',
    discount: 45,
    off_price: 1249,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/76a1fe8c-86c9-4ff1-bd68-2d333cfc03831544132056588-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/2bf7f927-99ec-4670-88ae-8e3ef0b9dfb81544132056680-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/60cd97ef-9491-4742-8446-28887c9dc4b51544132056702-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/76a1fe8c-86c9-4ff1-bd68-2d333cfc03831544132056588-1.jpg',
    },
    rating: 4.9,
  },
  {
    id: 16,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Pink Slim Fit White Vertical Stripes Formal Shirt',
    price: '2980',
    gender: 'men',
    description: 'Pink white vertical stripes opaque formal  shirt ,has a spread collar, button placket, patch pocket, long sleeve  straight hem.',
    brand: 'Celfie Design',
    color: 'pink',
    discount: 11,
    off_price: 3349,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/3ec609b9-d503-4018-9b44-8973a43817391624115526512-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/4f34f640-5fff-4629-9734-137a56c705701624115526552-5.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/83e7a941-1882-4541-b740-995a5565047f1624115526542-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/91bae618-50fc-4547-b2d9-a1f5387ffd2f1624115526522-2.jpg',
    },
    rating: 3.9,
  },
  {
    id: 17,
    categories: 'kurta',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Red & Green Striped Pure Cotton Kurta',
    price: '854',
    gender: 'men',
    description: '',
    brand: 'KALINI',
    color: 'red',
    discount: 55,
    off_price: 1899,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/67ad0999-a2f1-4251-a370-207fc1bdad4d1628241598838-Anouk-Men-Red-Striped-Kurta-6691628241598334-3.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/eeb519eb-0f0c-4c75-b74c-8d629c055cd71628241598817-Anouk-Men-Red-Striped-Kurta-6691628241598334-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/eeb519eb-0f0c-4c75-b74c-8d629c055cd71628241598817-Anouk-Men-Red-Striped-Kurta-6691628241598334-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/a07ddf2e-c77f-4c3a-8640-d2cbb78123c11628241598859-Anouk-Men-Red-Striped-Kurta-6691628241598334-2.jpg',
    },
    rating: 3.9,
  },
  {
    id: 18,
    categories: 'shoes',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Tan Mouse High Cushioning Running Shoes',
    price: '749',
    gender: 'men',
    description: 'Textured and patterned outsole',
    brand: 'Roadster',
    color: 'red',
    discount: 25,
    off_price: 999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/03c95244-17fa-4509-a49a-0c3eb25b40171631785441918CLYMBMenTan1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/9456b860-90b7-4b68-9bbf-2fbeead4b4e71631785441910CLYMBMenTan2.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/80d1d0fd-7309-4f20-9122-2cd39a8e09ee1631785441586CLYMBMenTan5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/77547986-1f86-4b62-9687-b6f0333609781631785442064CLYMBMenTan7.jpg',
    },
    rating: 2.9,
  },
  {
    id: 19,
    categories: 'shoes',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Unisex Black Precision V Basketball Shoes',
    price: '4599',
    gender: 'men',
    description: '',
    brand: 'Roadster',
    color: 'black',
    discount: 25,
    off_price: 4999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/73fc1074-0a84-4845-b452-9a6a080be4cb1635336510062-Nike-Precision-5-Basketball-Shoes-5381635336509646-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/2cd4e8e1-4b3c-4b45-895a-ac5144e824b81635336510034-Nike-Precision-5-Basketball-Shoes-5381635336509646-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/99432808-e710-43b9-ab8e-718c9b1a1a001635336510023-Nike-Precision-5-Basketball-Shoes-5381635336509646-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/99432808-e710-43b9-ab8e-718c9b1a1a001635336510023-Nike-Precision-5-Basketball-Shoes-5381635336509646-5.jpg',
    },
    rating: 3.2,
  },
  {
    id: 20,
    categories: 'tshirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Light Blue Logo Printed Slim Fit Casual T-shirt',
    price: '3299',
    gender: 'men',
    description: 'Blue T-shirt for men',
    brand: 'Roadster',
    color: 'blue',
    discount: 10,
    off_price: 3399,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/3ae9949f-002c-4329-9590-7182c6ebd1421632910116761-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/eaf82df0-f587-43c2-b857-d27db4e92f7e1632910116752-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-2.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/99f02959-6e3a-4693-a58a-2e70e98148ba1632910116735-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/0e145eb2-0cb6-4001-9a5f-24822cd773b31632910116725-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-5.jpg',
    },
    rating: 4.9,
  },
];

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
      wishbtn.style.background = 'grey';
      wishname.style.background = 'grey';

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

// let sortLowtoHigh = document.getElementById ('sortLowtoHigh');
// sortLowtoHigh.onclick = function () {
//   let arr = productData.sort ((a, b) => {
//     return a.price - b.price;
//   });

//   console.log (arr);
//   show_products (arr);
// };
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
let boysArr = [];
let girlsArr = [];

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
    console.log (boysBox.value);
    if (boysBox.value == para.gender && boysBox.value == 'boys') {
      boysArr.push (para);
      show_products (boysArr);
    }
  }
});
productData.forEach (para => {
  let girlsBox = document.getElementById ('girls');
  girlsBox.addEventListener ('change', girlsCheck);

  function girlsCheck () {
    console.log (girlsBox.value);
    if (girlsBox.value == para.gender && girlsBox.value == 'girls') {
      girlsArr.push (para);
      show_products (girlsArr);
    }
  }
});

// checkboxe sorting for categories
let shirtArr = [];
let tshirtArr = [];
let topsArr = [];
let kurtaArr = [];
let earringArr = [];
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
  let earringBox = document.getElementById ('earring');
  earringBox.addEventListener ('change', earringCheck);
  function earringCheck () {
    if (earringBox.value == 'earring' && earringBox.value == para.categories) {
      earringArr.push (para);
      show_products (earringArr);
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
