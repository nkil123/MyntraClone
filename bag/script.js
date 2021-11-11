function showFunction () {
  let dots = document.getElementById ('dots');
  let moreText = document.getElementById ('showDiv');
  let btnText = document.getElementById ('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Show More';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Show Less';
    moreText.style.display = 'inline';
  }
}

let items = document.getElementById ('items');

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
];

function display (datas) {
  datas.forEach (element => {
    let product = document.createElement ('div');
    product.className = 'product';

    let product1 = document.createElement ('div');
    product1.className = 'product1';

    let img = document.createElement ('img');
    img.src = element.images.image1;

    product1.append (img);

    let product2 = document.createElement ('div');
    product2.className = 'product2';

    let brand = document.createElement ('span');
    brand.className = 'p1';
    brand.innerHTML = element.brand;

    let title = document.createElement ('span');
    title.className = 'p2';
    title.innerHTML = element.title;

    let soldby = document.createElement ('span');
    soldby.className = 'p3';
    soldby.innerHTML = 'Sold by: Imperial Online Services Pvt. Ltd';

    let size_qt = document.createElement ('span');
    size_qt.className = 'size-qt';

    let l1 = document.createElement ('label');
    l1.innerHTML = 'Size';

    let select1 = document.createElement ('select');
    let opt1 = document.createElement ('option');
    opt1.innerHTML = 'L';

    let opt2 = document.createElement ('option');
    opt2.innerHTML = 'M';

    let opt3 = document.createElement ('option');
    opt3.innerHTML = 'S';

    let opt4 = document.createElement ('option');
    opt4.innerHTML = 'XL';

    let opt5 = document.createElement ('option');
    opt5.innerHTML = 'XXL';

    select1.append (opt1, opt2, opt3, opt4, opt5);

    let l2 = document.createElement ('label');
    l2.innerHTML = 'Qty';

    let select2 = document.createElement ('select');
    let opt6 = document.createElement ('option');
    opt6.innerHTML = '1';

    let opt7 = document.createElement ('option');
    opt7.innerHTML = '2';

    let opt8 = document.createElement ('option');
    opt8.innerHTML = '3';

    let opt9 = document.createElement ('option');
    opt9.innerHTML = '5';

    let opt10 = document.createElement ('option');
    opt10.innerHTML = '7';

    select2.append (opt6, opt7, opt8, opt9, opt10);

    size_qt.append (l1, select1, l2, select2);

    let spanm = document.createElement ('span');

    let span4 = document.createElement ('span');

    span4.innerHTML = `${'Rs.' + element.price + '   '}`;

    let strike = document.createElement ('strike');

    strike.innerHTML = `${'Rs.' + element.price + '  '}`;

    let span5 = document.createElement ('span');

    span5.innerHTML = '(20% OFF )';
    span5.style.color = 'red';

    spanm.append (span4, strike, span5);

    let spanl = document.createElement ('span');
    spanl.className = 'ticks';
    let spanimg = document.createElement ('img');
    spanimg.src = '/Images/tick.jpg';
    spanimg.class = 'tick';
    let spanlabel = document.createElement ('label');
    spanlabel.innerHTML = ' Delivery by 20th Nov 2021';

    spanl.append (spanimg, spanlabel);

    product2.append (brand, title, soldby, size_qt, spanm, spanl);

    product.append (product1, product2);
    items.append (product);
  });
}

display (data);
