let logo = document.getElementById ('logo');
logo.onclick = function () {
  window.location.href = '/myntra/myntra.html';
};

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

let data=JSON.parse(localStorage.getItem("cart"));


let totalPrice=0;
let totalDiscount=0;
let total_amount;

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
    opt6.innerHTML = 1;

    let opt7 = document.createElement ('option');
    opt7.innerHTML = 2;

    let opt8 = document.createElement ('option');
    opt8.innerHTML = 3;

    let opt9 = document.createElement ('option');
    opt9.innerHTML = 5;

    let opt10 = document.createElement ('option');
    opt10.innerHTML = 7;

    select2.append (opt6, opt7, opt8, opt9, opt10);

    size_qt.append (l1, select1, l2, select2);

    let spanm = document.createElement ('span');

    let span4 = document.createElement ('span');
    let p_price=element.price;
    let mrp=element.off_price;
      
    totalPrice=totalPrice+mrp;
    totalDiscount+=(mrp-p_price);
      
    select2.onchange=()=>{
        totalPrice=totalPrice-mrp;
        totalDiscount=totalDiscount-(mrp-p_price);
        p_price=element.price*select2.value;
        mrp=element.off_price*select2.value;
        
        
        totalPrice=totalPrice+mrp;
        totalDiscount+=(mrp-p_price);
        total_amount=totalPrice-totalDiscount;
        console.log(totalPrice);
        if(data.length>0){
          total_price.innerHTML="";
          discount_price.innerHTML="";
          total_amount.innerHTML="";
          total_price.innerHTML=totalPrice;
          discount_price.innerHTML="-"+totalDiscount;
          totalAamount.innerHTML=total_amount;
          
        }
        span4.innerHTML = `${'Rs.' + p_price + '   '}`;
        strike.innerHTML = `${'Rs.' + mrp+ '  '}`;
        
        
        
         
         
        
      }
      
      
  
      
  
      span4.innerHTML = `${'Rs.' + p_price + '   '}`;
  
      let strike = document.createElement ('strike');
  
      strike.innerHTML = `${'Rs.' + mrp+ '  '}`;

    /*span4.innerHTML = `${'Rs.' + element.price + '   '}`;

    let strike = document.createElement ('strike');

    strike.innerHTML = `${'Rs.' + element.price + '  '}`;*/

    let span5 = document.createElement ('span');
    let off=element.discount;

    span5.innerHTML = `${off+' % OFF'}`;
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
total_amount=totalPrice-totalDiscount;
  let total_price=document.getElementById("total-price");
  let discount_price=document.getElementById("discount-price");
  let totalAamount=document.getElementById("total-amount");
  console.log(totalPrice);
  if(data.length>0){
    total_price.innerHTML="";
    discount_price.innerHTML="";
    total_amount.innerHTML="";
    total_price.innerHTML=totalPrice;
    discount_price.innerHTML="-"+totalDiscount;
    totalAamount.innerHTML=total_amount;
  }


  function gotoaddress(){
    if(localStorage.getItem("price-data")===null){
      localStorage.setItem("price-data",JSON.stringify([]));
    }
  
    let price_data=JSON.parse(localStorage.getItem("price-data"));
    let all_price_data={
      Mrp:totalPrice,
      Discount:totalDiscount,
      Coupon:coupon_discount,
      Amount:total_amount,
  
    }
  
    price_data.push(all_price_data);
    
    localStorage.setItem("price-data",JSON.stringify(price_data));
    location.href="/address/address.html"

  }
  let close_div=document.getElementById("coppon-change");
  function closeWindow(){
    
     close_div.style.display="none";
  }

  let coupon_discount=0;

  function couponApply(){
    close_div.style.display="block";
    
  }
  function getcouponDiscount(){
    let myntra10=document.getElementById("myntra10");
    let myntra20=document.getElementById("myntra20");
    let myntra30=document.getElementById("myntra30");

    if(myntra10.checked){
      coupon_discount=Math.floor(total_amount*10/100);
      console.log(coupon_discount);

    }
    if(myntra20.checked){
      coupon_discount=Math.floor(total_amount*20/100);
      console.log(coupon_discount);

    }
     if(myntra30.checked){
      coupon_discount=Math.floor(total_amount*30/100);
      console.log(coupon_discount);

    }
    total_amount=total_amount-coupon_discount;
    console.log(total_amount);
    totalAamount.innerHTML=total_amount;
    close_div.style.display="none";
    let show_discount=document.getElementById("show-discount");
    show_discount.innerHTML="";
    show_discount.innerHTML="-"+coupon_discount;
  }


  function clearData(){
    console.log("aaa");
    data=[];
    display(data);
     /*let ndata=[];
     display(ndata);
    localStorage.setItem("cart",JSON.stringify([]));
    //let newd= JSON.parse(localStorage.getItem("cart"))*/
    
    
  }

  

 

  
