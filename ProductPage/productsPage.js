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
  window.location.href = '/myntra/myntra.html';
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
    gender: 'men',
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
    count: 2955,
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
    count: 825,
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
    count: 824,
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
    count: 735,
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
    count: 420,
  },

  {
    id: 21,
    title: 'White & Black Sheath Dress & Belt',
    categories: 'dresses',
    price: 903,
    gender: 'women',
    description: 'White and black typography print sheath dress,Round neck,Sleeveless, no sleeves,Above knee length in,straight hem,Comes with a belt',
    brand: 'Clovia',
    color: 'white',
    discount: 35,
    off_price: 1390,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/817dc96e-f893-47aa-824e-98d91f396f261630562359704EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/90a66afe-feb2-40c1-a699-c81cd7a09fbd1630562359723EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/a5bf4c69-c5c9-4d75-a2e7-e3bcc92114101630562359741EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/179c0b82-63bf-4388-9feb-aec125d4579b1630562359760EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres4.jpg',
    },
    rating: 4.2,
    count: 925,
  },

  {
    id: 22,
    title: 'Women Pink Daisy Duck Printed Sweatshirt',
    price: 799,
    gender: 'women',
    categories: 'tops',
    description: '',
    brand: 'Mast & Harbour',
    color: 'pink',
    discount: 60,
    off_price: 1999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/352e3703-d6de-43d5-804b-370082c81f6d1573553236671-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/ebe54fda-7589-4a0b-9332-a35e6b5ee3571573553236609-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/91b2fadd-735f-486c-9bfa-bcb3ba2ea9b71573553236558-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/a28f02d9-e138-43e2-ab00-03060e27d03d1573553236511-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-4.jpg',
    },
    rating: 4.5,
    count: 835,
  },
  {
    id: 23,
    title: 'Women Navy Blue & Beige Embroidered Pullover Sweater',
    price: 959,
    categories: 'tops',
    gender: 'women',
    description: 'Navy Blue and Beige solid pullover sweater, has a round neck, long sleeves, and ribbed hem',
    brand: 'Dressberry',
    color: 'blue',
    discount: 70,
    off_price: 2399,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/fce2dfb7-4a8b-44ea-a8fa-57d3a4161ef31604297764803-all-about-you-Women-Sweaters-6661604297763170-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/2e227d7f-a463-44d1-8d44-80501a19c74e1604305672635-all-about-you-Women-Sweaters-4511604305671949-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/1204a9f6-69ac-458e-8645-3aec5cf8ba651604305672584-all-about-you-Women-Sweaters-4511604305671949-4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/d9a92fdb-91db-472c-998f-f82bb73a53291604297764597-all-about-you-Women-Sweaters-6661604297763170-5.jpg',
    },
    rating: 4.5,
    count: 835,
  },
  {
    id: 24,
    title: 'Women Red Solid A-Line Dress',
    price: 1049,
    categories: 'dresses',
    gender: 'women',
    description: 'Red solid woven A-line dress with lace detail, has a round neck, long sleeves, flared hem',
    brand: 'Dressberry',
    color: 'red',
    discount: 65,
    off_price: 2999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/ea790e3a-c52f-4fa4-9aee-e1db99ae737e1577961976602-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/57597b08-078d-4bdb-b39f-3833473631101577961976531-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/1bf946b1-365b-4b41-b69d-1c504680d71f1577961976455-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/56d2fe6c-3a17-4104-bacb-3d1b96f5eb361577961976567-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-2.jpg',
    },
    rating: 4,
    count: 675,
  },

  {
    id: 25,
    title: 'Women Blue Mile Super Skinny Fit High-Rise Light Fade Stretchable Jeans',
    price: 2939,
    gender: 'women',
    description: '',
    brand: 'Roadster',
    color: 'blue',
    discount: 40,
    off_price: 4899,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/125fc4ac-7be7-4a35-98cc-0ed8af5e0c581626695221843-Levis-Women-Jeans-4801626695221087-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/af4361b5-a6d2-48f0-ad55-05f45dd3d8a31626695221833-Levis-Women-Jeans-4801626695221087-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/e021dfdf-261d-47fc-a987-5e4d3b611c8b1626695221824-Levis-Women-Jeans-4801626695221087-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/d471eede-c3aa-49ea-b821-f035fc3e83431626695221812-Levis-Women-Jeans-4801626695221087-4.jpg',
    },
    rating: 4.4,
    count: 768,
  },
  {
    id: 26,
    title: 'Women Mustard Yellow & Green Solid Kurta Set With Embroidery Detail',
    categories: 'tops',
    price: 1399,
    gender: 'women',
    description: 'Mustard yellow and green solid kurta with trousers,Mustard yellow straight calf length kurta with embroidery detail, has a keyhole neck, three-quarter sleeves, straight hem, side slits,Green Solid trousers, has partially elasticated waistband, slip-on closure',
    brand: 'Clovia ',
    color: 'yellow',
    discount: 80,
    off_price: 2999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/c91ccc8e-0a50-4497-a6f1-0b34d3db13ed1582794835211-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/0e222ff4-142f-42b2-ad6a-83aa14e0944f1582794835163-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/4189e086-e74b-42d0-ad6a-520a26d0a0461582794835122-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/706db7d0-abb7-4f5e-b7ca-b370bf44cd961582794835078-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-4.jpg',
    },
    rating: 4.1,
    count: 6987,
  },
  {
    id: 27,
    title: 'Women Mustard Yellow & Pink Printed Pure Cotton Anarkali Tiered Maxi Dress',
    price: 2249,
    categories: 'dresses',
    gender: 'women',
    description: 'Mustard yellow and Pink printed woven Anarkali tiered maxi dress with gathers, has a round neck, three-quarter sleeves, an attached lining, and flounce hem',
    brand: 'HERE&NOW',
    color: 'yellow',
    discount: 55,
    off_price: 4999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/bc248d16-5d0c-489d-b5c1-e2c8ee5671471608291727502-W-Yellow-Printed-Tiered-Dress-1091608291724681-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/c1ad9dcf-ce37-44b2-b030-6f5cf4d476bb1608291727416-W-Yellow-Printed-Tiered-Dress-1091608291724681-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/eb96c1bc-e445-491f-a463-19e3448c8c311608291727377-W-Yellow-Printed-Tiered-Dress-1091608291724681-4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/2fd07bb2-f22b-471a-ae9a-a7a6a6c6ccdd1608291727335-W-Yellow-Printed-Tiered-Dress-1091608291724681-5.jpg',
    },
    rating: 4.4,
    count: 567,
  },
  {
    id: 28,
    title: 'Women Pink Solid Round Neck T-shirt',
    price: 899,
    categories: 'tshirt',
    gender: 'women',
    description: 'Pink solid T-shirt, has a round neck, and short sleeves',
    brand: 'Mast & Harbour',
    color: 'pink',
    discount: 50,
    off_price: 1799,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/573f7013-7bb5-40c5-8b04-3ec22c5d811e1615530797360-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/66345c42-9508-4455-8431-d96f8aedd4211615530797339-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/11f832dd-c2c0-445a-9624-0351b853e0d51615530797319-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/1cf3d4e5-09e1-4dc5-aff8-4bc9eba10a4d1615530797299-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-4.jpg',
    },
    rating: 3.9,
    count: 587,
  },
  {
    id: 29,
    title: 'Red & Maroon Tie and Dye RUSH Running Tank Top',
    price: 2999,
    categories: 'tops',
    gender: 'women',
    description: 'Engineered with heat gear technology',
    brand: 'Celfie Design',
    color: 'red',
    discount: 90,
    off_price: 5999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/32141767-702d-4707-a690-8cbccf6695fb1623387738978TopsUNDERARMOURWomenTopsUNDERARMOURWomen1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/b6be3d24-f551-4509-86d0-3178d10491c31623387739147TopsUNDERARMOURWomenTopsUNDERARMOURWomen2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/958e31b1-9b64-4d7d-bc10-cfde876586161623387739288TopsUNDERARMOURWomenTopsUNDERARMOURWomen3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/6e5cfbd2-062d-4485-9b6f-63c0d94c1ad11623387739436TopsUNDERARMOURWomenTopsUNDERARMOURWomen4.jpg',
    },
    rating: 3.6,
    count: 290,
  },

  {
    id: 30,
    title: 'Black Dri-FIT Swoosh Zip-Front Medium-Support Workout Bra - Lightly Padded',
    price: 2021,
    gender: 'women',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.Stretch fabric and an elastic chest band provide a comfortable, compressive feel while shaping to prevent the sensation of empty space in your cups.The semi-auto lock zipper on the front helps prevent unwanted unzipping yet still makes it easy to get in and out',
    brand: 'KALINI',
    color: 'black',
    discount: 25,
    off_price: 2695,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/1896ad8d-3bb0-43d4-b10e-4718d44fb1e31631612114483-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/505e35c2-533d-4f98-b84c-6c3065e3e43e1631612114463-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/4991242e-a848-4db8-bb17-d18495db1ebc1631612114444-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/32db2112-de4d-49a6-b1f0-f663206f5ca91631612114425-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-4.jpg',
    },
    rating: 4.3,
    count: 290,
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
