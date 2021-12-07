import {navbar} from '/comps/navbar/navbar.js';

import {foot} from '/comps/footer/footer.js';

let footer = document.getElementById ('footer');

footer.innerHTML = foot ();

let nav = document.getElementById ('navbar');
nav.innerHTML = navbar ();

// let data = {
//   id: 21,
//   title: 'White & Black Sheath Dress & Belt',
//   price: '903',
//   gender: 'Women',
//   description: 'White and black typography print sheath dress,Round neck,Sleeveless, no sleeves,Above knee length in,straight hem,Comes with a belt',
//   brand: 'URBANIC',
//   color: 'White & Black',
//   discount: '35',
//   off_price: 1390,
//   images: {
//     image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/817dc96e-f893-47aa-824e-98d91f396f261630562359704EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres1.jpg',
//     image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/90a66afe-feb2-40c1-a699-c81cd7a09fbd1630562359723EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres2.jpg',
//     image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/a5bf4c69-c5c9-4d75-a2e7-e3bcc92114101630562359741EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres3.jpg',
//     image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/179c0b82-63bf-4388-9feb-aec125d4579b1630562359760EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres4.jpg',
//   },
//   rating: {
//     rate: 4.2,
//     count: 220,
//   },
// };

let parent = document.getElementById ('Myn_pro');

let dat = JSON.parse (localStorage.getItem ('describe'));
let data = dat[0];

function MyntraDecricption () {
  console.log ('data:', data);

  let div = document.createElement ('div');
  div.setAttribute ('class', 'dx');
  let div_1 = document.createElement ('div');
  let div_2 = document.createElement ('div');
  let div_3 = document.createElement ('div');
  div_1.setAttribute ('class', 'div_11');
  div_2.setAttribute ('class', 'div_22');
  div_3.setAttribute ('class', 'div_33');

  let title_product = document.createElement ('p');
  title_product.textContent = data.title;
  title_product.setAttribute ('id', 'titl');

  let brand_product = document.createElement ('p');
  brand_product.textContent = data.brand;

  brand_product.setAttribute ('id', 'brand_1');

  let price_product = document.createElement ('div');
  price_product.textContent = 'Rs.' + data.price;
  price_product.setAttribute ('id', 'price_1');
  let off_price_product = document.createElement ('div');
  off_price_product.textContent = 'Rs.' + data.off_price;
  off_price_product.style.textDecoration = 'line-through';
  off_price_product.setAttribute ('id', 'price_1');
  off_price_product.style.fontSize = '20px';
  off_price_product.style.color = '#282C3F';
  off_price_product.style.fontWeight = '400';
  // off_price_product.style.marginBottom= "-10px";

  let hr = document.createElement ('hr');
  let all_taxes = document.createElement ('p');
  all_taxes.innerText = 'inclusive of all taxes';
  all_taxes.style.color = '#03A685';
  all_taxes.style.marginTop = '-1px';

  let discount_product = document.createElement ('div');
  discount_product.textContent = '(' + data.discount + '% OFF)';
  discount_product.setAttribute ('id', 'price_1');
  discount_product.style.color = '#FF905A';
  discount_product.style.fontSize = '20px';

  // let gend=document.createElement("p");
  // gend.textContent=data.gender;

  let description_product = document.createElement ('p');
  description_product.textContent = data.description;
  description_product.style.fontSize = '18px';

  //  let color_product=document.createElement("p");
  //  color_product.textContent=data.color;

  let img_1 = document.createElement ('img');

  img_1.src = data.images.image1;

  img_1.setAttribute ('class', 'imge');

  let img_2 = document.createElement ('img');
  img_2.src = data.images.image2;
  img_2.setAttribute ('class', 'imge');

  let img_3 = document.createElement ('img');
  img_3.src = data.images.image3;

  img_3.setAttribute ('class', 'imge');

  let img_4 = document.createElement ('img');
  img_4.src = data.images.image4;

  img_4.setAttribute ('class', 'imge');

  let rate_product = document.createElement ('div');
  let rate_product1 = document.createElement ('div');
  rate_product1.style.marginTop = 'auto';

  rate_product.textContent = data.rating;
  rate_product1.innerHTML = '<ion-icon name="star"></ion-icon>';
  rate_product1.setAttribute ('class', 'star');
  // rate_product.setAttribute("id","rate_pro");
  // rate_product1.setAttribute("id","prod_1");

  let count_product = document.createElement ('div');
  count_product.textContent = ' ' + ' | ' + data.count + 'k Ratings';
  count_product.style.color = '#BDBDBD';
  // count_product.setAttribute("id","count_pro");

  let add_to_bag = document.createElement ('button');
  add_to_bag.innerHTML =
    '<ion-icon name="bag"></ion-icon>' + ' ' + 'ADD TO BAG';
  add_to_bag.setAttribute ('id', 'add_to_cart');
  add_to_bag.onclick = function () {
    addtoBag (data);
  };

  let wish_list = document.createElement ('button');
  wish_list.innerHTML =
    '<ion-icon name="heart-outline"></ion-icon>' + ' ' + 'WISHLIST';
  wish_list.setAttribute ('id', 'wishlist');
  wish_list.onclick = function () {
    addtoWishlist (data);
  };

  let size_chart_22 = document.createElement ('div');
  let size_chart_a = document.createElement ('p');
  size_chart_22.style.display = 'flex';

  let size_chart = document.createElement ('p');
  size_chart.textContent = 'SELECT SIZE';
  size_chart_a.textContent = 'SIZE CHART' + ' ' + '>';
  size_chart_a.style.marginLeft = '20px';
  size_chart_a.style.color = '#f8315f';
  size_chart_a.style.fontWeight = '100';
  size_chart.style.fontWeight = '700';
  // size_chart_a.style.fontSize="14px";
  //'<ion-icon name="chevron-forward-outline"></ion-icon>';

  let deliv_x = document.createElement ('div');
  deliv_x.style.display = 'flex';

  let deliv = document.createElement ('div');
  let deliv_1 = document.createElement ('div');
  deliv.textContent = 'DELIVERY OPTIONS';
  deliv.style.marginTop = '20px';
  deliv.style.marginBottom = '20px';
  deliv_1.innerHTML = '<ion-icon name="airplane-outline"></ion-icon>';
  deliv.style.fontWeight = '700';
  deliv_1.style.marginLeft = '10px';
  deliv_1.style.marginTop = '20px';
  deliv_1.style.marginBottom = '20px';

  let box_01 = document.createElement ('div');
  let box_1 = document.createElement ('input');
  box_1.type = 'text';
  box_01.setAttribute ('id', 'b01');
  box_1.setAttribute ('id', 'b1');
  // box_01.style.height="44px";
  // box_01.style.width="320px";
  // box_01.style.border=" 1px  solid grey";
  // box_01.style.borderRadius="2px";
  // box_01.style.display="flex";

  // box_1.style.fontSize="20px";
  // box_1.style.border="none";
  // box_1.style.outline="none";
  box_1.placeholder = 'Enter a PIN code';
  let box_2 = document.createElement ('button');
  box_2.textContent = 'CHECK';
  box_2.setAttribute ('id', 'b2');
  box_2.addEventListener ('click', hide_pin);
  // box_2.style.fontWeight="500";
  // box_2.style.color="pink";
  // box_2.style.border="none";
  // box_2.style.outline="none";
  // box_2.style.backgroundColor="white";
  box_01.append (box_1, box_2);

  let pin_1 = document.createElement ('p');
  pin_1.setAttribute ('id', 'disclaim');
  pin_1.textContent =
    'Please enter PIN code to check delivery time & Pay on Delivery Availability';
  pin_1.style.fontSize = '13px';
  pin_1.style.marginBottom = '20px';

  let quality_max = document.createElement ('div');
  quality_max.setAttribute ('id', 'max_qual');

  let qualaity_pro = document.createElement ('div');
  qualaity_pro.textContent = '100% Original Products';
  let qualaity_pro_2 = document.createElement ('div');
  qualaity_pro_2.textContent = 'Pay on delivery might be available';
  qualaity_pro_2.style.fontSize = '19px';
  let qualaity_pro_3 = document.createElement ('div');
  qualaity_pro_3.textContent = 'Easy 30 days returns and exchanges';
  qualaity_pro_3.style.fontSize = '19px';
  let qualaity_pro_4 = document.createElement ('div');
  qualaity_pro_4.textContent = 'Try & Buy might be available';
  qualaity_pro_4.style.fontSize = '19px';

  qualaity_pro.style.fontSize = '19px';
  qualaity_pro.style.marginTop = '0px';

  let pin_pro = document.createElement ('div');
  pin_pro.setAttribute ('id', 'pin_change');
  let pin_pro_1 = document.createElement ('div');
  let pin_pro_2 = document.createElement ('div');
  let pin_pro_3 = document.createElement ('div');
  pin_pro_1.innerHTML =
    '<ion-icon name="train-outline"></ion-icon>' +
    ' ' +
    'Get it by Tue, Nov 25';
  pin_pro_2.innerHTML =
    '<ion-icon name="cash-outline"></ion-icon>' +
    ' ' +
    'Pay on delivery available';
  pin_pro_3.innerHTML =
    '<ion-icon name="arrow-undo-outline"></ion-icon>' +
    ' ' +
    'Easy 7 days return & exchange available';

  let best_offer_both = document.createElement ('div');
  best_offer_both.style.marginTop = '10px';
  best_offer_both.style.display = 'flex';
  let best_offer_z = document.createElement ('p');
  let best_offer = document.createElement ('p');
  best_offer.textContent = 'BEST OFFERS';
  best_offer_z.innerHTML = '<ion-icon name="pricetag-outline"></ion-icon>';
  best_offer.style.fontSize = '16px';
  best_offer.style.lineHeight = '24px';
  best_offer.style.fontWeight = '700';
  best_offer_z.style.marginLeft = '10px';

  let best_1 = document.createElement ('li');
  best_1.textContent = 'Coupon code: MYNTRA300';
  best_1.style.fontSize = '20px';
  let best_2 = document.createElement ('li');
  best_2.textContent =
    'Coupon Discount: Rs. 300 off (check cart for final savings)';
  best_2.style.fontSize = '20px';
  let best_3 = document.createElement ('li');
  best_3.textContent =
    'Applicable on: Orders above Rs. 1999 (only on first purchase)';
  best_3.style.fontSize = '20px';

  let pro_detail_11 = document.createElement ('div');
  pro_detail_11.style.display = 'flex';
  let pro_detail_1 = document.createElement ('div');
  let pro_detail = document.createElement ('div');
  pro_detail.textContent = 'PRODUCT DETAILS';
  pro_detail_1.innerHTML = '<ion-icon name="newspaper-outline"></ion-icon>';
  pro_detail_1.style.marginLeft = '10px';
  pro_detail.style.fontWeight = '700';
  pro_detail.style.fontSize = '16px';

  let size_color = document.createElement ('p');
  size_color.textContent = 'Size & Fit';
  size_color.style.fontSize = '20px';
  size_color.style.fontWeight = '700';

  let size_des = document.createElement ('p');
  size_des.textContent = "The model (height 5'8) is wearing a size S";
  size_des.style.fontSize = '18px';

  let care_mat = document.createElement ('p');
  care_mat.textContent = 'Material & Care';
  care_mat.style.fontSize = '20px';
  care_mat.style.fontWeight = '700';

  let care_mat_1 = document.createElement ('p');
  care_mat_1.textContent = 'Material: 100% cotton \n' + ' \n Hand Wash';
  care_mat_1.style.width = '150px';
  care_mat_1.style.fontSize = '18px';

  let spe = document.createElement ('p');
  spe.textContent = 'Specifications';
  spe.style.fontSize = '18px';
  spe.style.fontWeight = '700';

  let sizes = document.createElement ('div');
  sizes.setAttribute ('class', 'sizes');
  let size_1 = document.createElement ('div');
  size_1.setAttribute ('class', 'size_box');
  let size_2 = document.createElement ('div');
  size_2.setAttribute ('class', 'size_box');
  let size_3 = document.createElement ('div');
  size_3.setAttribute ('class', 'size_box');
  let size_4 = document.createElement ('div');
  size_4.setAttribute ('class', 'size_box');
  let size1 = document.createElement ('div');
  size1.setAttribute ('class', 'sizebox');
  size1.textContent = 'S';
  let size2 = document.createElement ('div');
  size1.setAttribute ('class', 'sizebox');
  size2.textContent = 'M';
  let size3 = document.createElement ('div');
  size1.setAttribute ('class', 'sizebox');
  size3.textContent = 'L';
  let size4 = document.createElement ('div');
  size1.setAttribute ('class', 'sizebox');
  size2.setAttribute ('class', 'sizebox');
  size3.setAttribute ('class', 'sizebox');
  size4.setAttribute ('class', 'sizebox');
  size4.textContent = 'XL';
  size_1.append (size1);
  size_2.append (size2);
  size_3.append (size3);
  size_4.append (size4);
  size_1.addEventListener ('click', colorchange1);
  size_2.addEventListener ('click', colorchange2);
  size_3.addEventListener ('click', colorchange3);
  size_4.addEventListener ('click', colorchange4);
  function colorchange1 () {
    size_4.removeEventListener ('click', colorchange4);
    size_2.removeEventListener ('click', colorchange2);
    size_3.removeEventListener ('click', colorchange3);
    size_1.style.borderColor = 'red';
    size_1.style.color = 'red';
  }
  function colorchange2 () {
    size_1.removeEventListener ('click', colorchange1);
    size_4.removeEventListener ('click', colorchange4);
    size_3.removeEventListener ('click', colorchange3);
    size_2.style.borderColor = 'red';
    size_2.style.color = 'red';
  }
  function colorchange3 () {
    size_1.removeEventListener ('click', colorchange1);
    size_2.removeEventListener ('click', colorchange2);
    size_4.removeEventListener ('click', colorchange4);
    size_3.style.borderColor = 'red';
    size_3.style.color = 'red';
  }
  function colorchange4 () {
    size_1.removeEventListener ('click', colorchange1);
    size_2.removeEventListener ('click', colorchange2);
    size_3.removeEventListener ('click', colorchange3);
    size_4.style.borderColor = 'red';
    size_4.style.color = 'red';
  }
  // let size5=document.createElement("div");
  // size5.setAttribute("id","size_box");
  // size5.textContent="XXL";
  sizes.append (size_1, size_2, size_3, size_4);

  div_1.append (img_1, img_2, img_3, img_4);
  div_2.append (rate_product, rate_product1, count_product);
  pro_detail_11.append (pro_detail, pro_detail_1);
  quality_max.append (qualaity_pro_2, qualaity_pro_3, qualaity_pro_4);
  deliv_x.append (deliv, deliv_1);
  best_offer_both.append (best_offer, best_offer_z);
  size_chart_22.append (size_chart, size_chart_a);
  pin_pro.append (pin_pro_1, pin_pro_2, pin_pro_3);
  div_3.append (price_product, off_price_product, discount_product);
  div.append (
    brand_product,
    title_product,
    div_2,
    hr,
    div_3,
    all_taxes,
    size_chart_22,
    sizes,
    add_to_bag,
    wish_list,
    deliv_x,
    box_01,
    pin_1,
    qualaity_pro,
    quality_max,
    pin_pro,
    best_offer_both,
    best_1,
    best_2,
    best_3,
    hr,
    pro_detail_11,
    description_product,
    size_color,
    size_des,
    care_mat,
    care_mat_1,
    spe
  );
  parent.append (div_1, div);
}

MyntraDecricption ();

if (localStorage.getItem ('cart') === null) {
  localStorage.setItem ('cart', JSON.stringify ([]));
}

function addtoBag (data) {
  if (localStorage.getItem ('cart') === null) {
    localStorage.setItem ('cart', JSON.stringify ([]));
  }
  let prodcuts_cart = JSON.parse (localStorage.getItem ('cart'));
  prodcuts_cart.push (data);
  localStorage.setItem ('cart', JSON.stringify (prodcuts_cart));
  console.log ('products_cart:', prodcuts_cart);
}

if (localStorage.getItem ('wishlist') === null) {
  localStorage.setItem ('wishlist', JSON.stringify ([]));
}
function addtoWishlist (data) {
  let prodcuts_wish = JSON.parse (localStorage.getItem ('wishlist'));
  prodcuts_wish.push (data);
  localStorage.setItem ('wishlist', JSON.stringify (prodcuts_wish));
  console.log ('products_wish:', prodcuts_wish);
  let wishme = document.getElementById ('wishlist');
  wishme.innerHTML =
    '<ion-icon name="heart-outline"></ion-icon>' + ' ' + 'WISHLISTED';
  wishme.setAttribute ('id', 'wishmelist');
  // wishme.style.backgroundColor="hsl(347, 100%, 66%)";
  // wishme.style.color="white";
}

function hide_pin () {
  let pin_check = document.getElementById ('pin_change');
  let pin_checkbtn = document.getElementById ('b1');
  let max_quali = document.getElementById ('max_qual');
  let b2_1 = document.getElementById ('b2');
  let disclaimer = document.getElementById ('disclaim');

  if (b1.value == 226012 || b1.value == 211011 || b1.value == 110065) {
    pin_check.style.display = 'block';
    max_quali.style.display = 'none';
    max_quali.style.marginTop = '10px';
    b2_1.style.color = '#f8315f';
    disclaimer.style.display = 'none';
  } else {
    pin_check.style.display = 'none';
    max_quali.style.display = 'block';
    b2_1.style.color = 'gray';
    disclaimer.style.display = 'block';
    alert ('! Please enter a valid pincode');
  }
}
