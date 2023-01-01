function acao(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'block';
}


function fechar(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'none';

}
function acao1(){

    let modal = document.querySelector('.modal1')


    modal.style.display = 'block';
}


function fechar1(){

    let modal = document.querySelector('.modal1')


    modal.style.display = 'none';

}
function acao2(){

    let modal = document.querySelector('.modal2')


    modal.style.display = 'block';
}


function fechar2(){

    let modal = document.querySelector('.modal2')


    modal.style.display = 'none';

}
function acao3(){

    let modal = document.querySelector('.modal3')


    modal.style.display = 'block';
}


function fechar3(){

    let modal = document.querySelector('.modal3')


    modal.style.display = 'none';

}

//JS para adicionar e remover do carrinho

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
  
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
  
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
  }
  
  function purchaseClicked() {
    alert('Obrigado preferência!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
  }
  
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
  
  function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
  }
  
  function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var qtde = shopItem.getElementsByClassName('shop-item-qtde')[0].innerText
  
    addItemToCart(title, price, qtde)
    updateCartTotal()
  }
  
  function addItemToCart(title, price, qtde) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
        <span class="cart-item-title">${title}</span>
        <span class="cart-quantity cart-column">${qtde}</span>
        <span class="cart-price cart-column">${price}</span>
        <button class="btn btn-danger" type="button">%0A<style> font-size=1vh</style></button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        
  }
  
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var qtdeElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('R$', ''))
        var qtde = parseInt(qtdeElement.innerText)
        total = total + (price * qtde)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R$' + total
  } 
  
  //BOTOES DE ADICIONAR E DIMINUIR QUANTIDADE DOS ITENS
  
  //item1
  let add = document.getElementById('item1mais');
  let remove = document.getElementById('item1menos');
  
  let int = document.getElementById('qtde1');
  let integer = 1
    
  
    add.addEventListener('click', function(){
        integer +=1;
        int.innerHTML = integer;
  
    })
  
    remove.addEventListener('click', function(){
        if(integer > 1){
            integer -=1;
        int.innerHTML = integer;
        }
        else
        return integer
  
    })
  
    //item2
  let add2 = document.getElementById('item2mais');
  let remove2 = document.getElementById('item2menos');
  
  let int2 = document.getElementById('qtde2');
  let integer2 = 1
    
  
    add2.addEventListener('click', function(){
        integer2 +=1;
        int2.innerHTML = integer2;
  
    })
  
    remove2.addEventListener('click', function(){
        if(integer2 > 1){
            integer2 -=1;
        int2.innerHTML = integer2;
        }
        else
        return integer2
  
    })
  
    let add3 = document.getElementById('item3mais');
  let remove3 = document.getElementById('item3menos');
  
  let int3 = document.getElementById('qtde3');
  let integer3 = 0
    
  
    add3.addEventListener('click', function(){
        integer3 +=1;
        int3.innerHTML = integer3;
  
    })
  
    remove3.addEventListener('click', function(){
        if(integer3 > 0){
            integer3 -=1;
        int3.innerHTML = integer3;
        }
        else
        return integer3
  
    })
  
    let add4 = document.getElementById('item4mais');
  let remove4 = document.getElementById('item4menos');
  
  let int4 = document.getElementById('qtde4');
  let integer4 = 0
    
  
    add4.addEventListener('click', function(){
        integer4 +=1;
        int4.innerHTML = integer4;
  
    })
  
    remove4.addEventListener('click', function(){
        if(integer4 > 0){
            integer4 -=1;
        int4.innerHTML = integer4;
        }
        else
        return integer4
  
    })
  
    let add5 = document.getElementById('item5mais');
    let remove5 = document.getElementById('item5menos');
    
    let int5 = document.getElementById('qtde5');
    let integer5 = 0
      
    
      add5.addEventListener('click', function(){
          integer5 +=1;
          int5.innerHTML = integer5;
    
      })
    
      remove5.addEventListener('click', function(){
          if(integer5 > 0){
              integer5 -=1;
          int5.innerHTML = integer5;
          }
          else
          return integer5
    
      })
    let add6 = document.getElementById('item6mais');
    let remove6 = document.getElementById('item6menos');
    
    let int6 = document.getElementById('qtde6');
    let integer6 = 0
      
    
      add6.addEventListener('click', function(){
          integer6 +=1;
          int6.innerHTML = integer6;
    
      })
    
      remove6.addEventListener('click', function(){
          if(integer6 > 0){
              integer6 -=1;
          int6.innerHTML = integer6;
          }
          else
          return integer6
    
      })
      
      //item7
      let add7 = document.getElementById('item7mais');
      let remove7 = document.getElementById('item7menos');
      
      let int7 = document.getElementById('qtde7');
      let integer7 = 0
        
      
        add7.addEventListener('click', function(){
            integer7 +=1;
            int7.innerHTML = integer7;
      
        })
      
        remove7.addEventListener('click', function(){
            if(integer7 > 0){
                integer7 -=1;
            int7.innerHTML = integer7;
            }
            else
            return integer7
      
        })
  
      //item 8
      let add8 = document.getElementById('item8mais');
    let remove8 = document.getElementById('item8menos');
    
    let int8 = document.getElementById('qtde8');
    let integer8 = 0
      
    
      add8.addEventListener('click', function(){
          integer8 +=1;
          int8.innerHTML = integer8;
    
      })
    
      remove8.addEventListener('click', function(){
          if(integer8 > 0){
              integer8 -=1;
          int8.innerHTML = integer8;
          }
          else
          return integer8
    
      })
  
  
      // item 9
      let add9 = document.getElementById('item9mais');
    let remove9 = document.getElementById('item9menos');
    
    let int9 = document.getElementById('qtde9');
    let integer9 = 0
      
    
      add9.addEventListener('click', function(){
          integer9 +=1;
          int9.innerHTML = integer9;
    
      })
    
      remove9.addEventListener('click', function(){
          if(integer9 > 0){
              integer9 -=1;
          int9.innerHTML = integer9;
          }
          else
          return integer9
    
      })
  
      //item 10
      let add10 = document.getElementById('item10mais');
    let remove10 = document.getElementById('item10menos');
    
    let int10 = document.getElementById('qtde10');
    let integer10 = 0
      
    
      add10.addEventListener('click', function(){
          integer10 +=1;
          int10.innerHTML = integer10;
    
      })
    
      remove10.addEventListener('click', function(){
          if(integer10 > 0){
              integer10 -=1;
          int10.innerHTML = integer10;
          }
          else
          return integer10
    
      })
  
      //item 11
      let add11 = document.getElementById('item11mais');
    let remove11 = document.getElementById('item11menos');
    
    let int11 = document.getElementById('qtde11');
    let integer11 = 0
      
    
      add11.addEventListener('click', function(){
          integer11 +=1;
          int11.innerHTML = integer11;
    
      })
    
      remove11.addEventListener('click', function(){
          if(integer11 > 0){
              integer11 -=1;
          int11.innerHTML = integer11;
          }
          else
          return integer11
    
      })
  
      //item 12
      let add12 = document.getElementById('item12mais');
    let remove12 = document.getElementById('item12menos');
    
    let int12 = document.getElementById('qtde12');
    let integer12 = 0
      
    
      add12.addEventListener('click', function(){
          integer12 +=1;
          int12.innerHTML = integer12;
    
      })
    
      remove12.addEventListener('click', function(){
          if(integer12 > 0){
              integer12 -=1;
          int12.innerHTML = integer12;
          }
          else
          return integer12
    
      })
  
      //13
      let add13 = document.getElementById('item13mais');
    let remove13 = document.getElementById('item13menos');
    
    let int13 = document.getElementById('qtde13');
    let integer13 = 0
      
    
      add13.addEventListener('click', function(){
          integer13 +=1;
          int13.innerHTML = integer13;
    
      })
    
      remove13.addEventListener('click', function(){
          if(integer13 > 0){
              integer13 -=1;
          int13.innerHTML = integer13;
          }
          else
          return integer13
    
      })
  
      //item 14
      let add14 = document.getElementById('item14mais');
    let remove14 = document.getElementById('item14menos');
    
    let int14 = document.getElementById('qtde14');
    let integer14 = 0
      
    
      add14.addEventListener('click', function(){
          integer14 +=1;
          int14.innerHTML = integer14;
    
      })
    
      remove14.addEventListener('click', function(){
          if(integer14 > 0){
              integer14 -=1;
          int14.innerHTML = integer14;
          }
          else
          return integer14
    
      })
  
      //item 15
      let add15 = document.getElementById('item15mais');
    let remove15 = document.getElementById('item15menos');
    
    let int15 = document.getElementById('qtde15');
    let integer15 = 0
      
    
      add15.addEventListener('click', function(){
          integer15 +=1;
          int15.innerHTML = integer15;
    
      })
    
      remove15.addEventListener('click', function(){
          if(integer15 > 0){
              integer15 -=1;
          int15.innerHTML = integer15;
          }
          else
          return integer15
    
      })
  
      //item 16
      let add16 = document.getElementById('item16mais');
    let remove16 = document.getElementById('item16menos');
    
    let int16 = document.getElementById('qtde16');
    let integer16 = 0
      
    
      add16.addEventListener('click', function(){
          integer16 +=1;
          int16.innerHTML = integer16;
    
      })
    
      remove16.addEventListener('click', function(){
          if(integer16 > 0){
              integer16 -=1;
          int16.innerHTML = integer16;
          }
          else
          return integer16
    
      })
  
      // item 17
  
      let add17 = document.getElementById('item17mais');
    let remove17 = document.getElementById('item17menos');
    
    let int17 = document.getElementById('qtde17');
    let integer17 = 0
      
    
      add17.addEventListener('click', function(){
          integer17 +=1;
          int17.innerHTML = integer17;
    
      })
    
      remove17.addEventListener('click', function(){
          if(integer17 > 0){
              integer17 -=1;
          int17.innerHTML = integer17;
          }
          else
          return integer17
    
      })
  
      // 18
      let add18 = document.getElementById('item18mais');
    let remove18 = document.getElementById('item18menos');
    
    let int18 = document.getElementById('qtde18');
    let integer18 = 0
      
    
      add18.addEventListener('click', function(){
          integer18 +=1;
          int18.innerHTML = integer18;
    
      })
    
      remove18.addEventListener('click', function(){
          if(integer18 > 0){
              integer18 -=1;
          int18.innerHTML = integer18;
          }
          else
          return integer18
    
      })
  
      //19
      let add19 = document.getElementById('item19mais');
    let remove19 = document.getElementById('item19menos');
    
    let int19 = document.getElementById('qtde19');
    let integer19 = 0
      
    
      add19.addEventListener('click', function(){
          integer19 +=1;
          int19.innerHTML = integer19;
    
      })
    
      remove19.addEventListener('click', function(){
          if(integer19 > 0){
              integer19 -=1;
          int19.innerHTML = integer19;
          }
          else
          return integer19
    
      })
  
      //20
      let add20 = document.getElementById('item20mais');
    let remove20 = document.getElementById('item20menos');
    
    let int20 = document.getElementById('qtde20');
    let integer20 = 0
      
    
      add20.addEventListener('click', function(){
          integer20 +=1;
          int20.innerHTML = integer20;
    
      })
    
      remove20.addEventListener('click', function(){
          if(integer20 > 0){
              integer20 -=1;
          int20.innerHTML = integer20;
          }
          else
          return integer20
    
      })
  
      //21
      let add21 = document.getElementById('item21mais');
    let remove21 = document.getElementById('item21menos');
    
    let int21 = document.getElementById('qtde21');
    let integer21 = 0
      
    
      add21.addEventListener('click', function(){
          integer21 +=1;
          int21.innerHTML = integer21;
    
      })
    
      remove21.addEventListener('click', function(){
          if(integer21 > 0){
              integer21 -=1;
          int21.innerHTML = integer21;
          }
          else
          return integer21
    
      })
  
      //22
      let add22 = document.getElementById('item22mais');
    let remove22 = document.getElementById('item22menos');
    
    let int22 = document.getElementById('qtde22');
    let integer22 = 0
      
    
      add22.addEventListener('click', function(){
          integer22 +=1;
          int22.innerHTML = integer22;
    
      })
    
      remove22.addEventListener('click', function(){
          if(integer22 > 0){
              integer22 -=1;
          int22.innerHTML = integer22;
          }
          else
          return integer22
    
      })
  
      //23
      let add23 = document.getElementById('item23mais');
    let remove23 = document.getElementById('item23menos');
    
    let int23 = document.getElementById('qtde23');
    let integer23 = 0
      
    
      add23.addEventListener('click', function(){
          integer23 +=1;
          int23.innerHTML = integer23;
    
      })
    
      remove23.addEventListener('click', function(){
          if(integer23 > 0){
              integer23 -=1;
          int23.innerHTML = integer23;
          }
          else
          return integer23
    
      })
  
      //24
      let add24 = document.getElementById('item24mais');
    let remove24 = document.getElementById('item24menos');
    
    let int24 = document.getElementById('qtde24');
    let integer24 = 0
      
    
      add24.addEventListener('click', function(){
          integer24 +=1;
          int24.innerHTML = integer24;
    
      })
    
      remove24.addEventListener('click', function(){
          if(integer24 > 0){
              integer24 -=1;
          int24.innerHTML = integer24;
          }
          else
          return integer24
    
      })
  
      //25
      let add25 = document.getElementById('item25mais');
    let remove25 = document.getElementById('item25menos');
    
    let int25 = document.getElementById('qtde25');
    let integer25 = 0
      
    
      add25.addEventListener('click', function(){
          integer25 +=1;
          int25.innerHTML = integer25;
    
      })
    
      remove25.addEventListener('click', function(){
          if(integer25 > 0){
              integer25 -=1;
          int25.innerHTML = integer25;
          }
          else
          return integer25
    
      })
  
      //26
      let add26 = document.getElementById('item26mais');
    let remove26 = document.getElementById('item26menos');
    
    let int26 = document.getElementById('qtde26');
    let integer26 = 0
      
    
      add26.addEventListener('click', function(){
          integer26 +=1;
          int26.innerHTML = integer26;
    
      })
    
      remove26.addEventListener('click', function(){
          if(integer26 > 0){
              integer26 -=1;
          int26.innerHTML = integer26;
          }
          else
          return integer26
    
      })
  
      //27
      let add27 = document.getElementById('item27mais');
    let remove27 = document.getElementById('item27menos');
    
    let int27 = document.getElementById('qtde27');
    let integer27 = 0
      
    
      add27.addEventListener('click', function(){
          integer27 +=1;
          int27.innerHTML = integer27;
    
      })
    
      remove27.addEventListener('click', function(){
          if(integer27 > 0){
              integer27 -=1;
          int27.innerHTML = integer27;
          }
          else
          return integer27
    
      })
  
      //28
      let add28 = document.getElementById('item28mais');
    let remove28 = document.getElementById('item28menos');
    
    let int28 = document.getElementById('qtde28');
    let integer28 = 0
      
    
      add28.addEventListener('click', function(){
          integer28 +=1;
          int28.innerHTML = integer28;
    
      })
    
      remove28.addEventListener('click', function(){
          if(integer28 > 0){
              integer28 -=1;
          int28.innerHTML = integer28;
          }
          else
          return integer28
    
      })
  
      //29
      let add29 = document.getElementById('item29mais');
    let remove29 = document.getElementById('item29menos');
    
    let int29 = document.getElementById('qtde29');
    let integer29 = 0
      
    
      add29.addEventListener('click', function(){
          integer29 +=1;
          int29.innerHTML = integer29;
    
      })
    
      remove29.addEventListener('click', function(){
          if(integer29 > 0){
              integer29 -=1;
          int29.innerHTML = integer29;
          }
          else
          return integer29
    
      })
  
      //30
      let add30 = document.getElementById('item30mais');
    let remove30 = document.getElementById('item30menos');
    
    let int30 = document.getElementById('qtde30');
    let integer30 = 0
      
    
      add30.addEventListener('click', function(){
          integer30 +=1;
          int30.innerHTML = integer30;
    
      })
    
      remove30.addEventListener('click', function(){
          if(integer30 > 0){
              integer30 -=1;
          int30.innerHTML = integer30;
          }
          else
          return integer30
    
      })
  
      //31
      let add31 = document.getElementById('item31mais');
    let remove31 = document.getElementById('item31menos');
    
    let int31 = document.getElementById('qtde31');
    let integer31 = 0
      
    
      add31.addEventListener('click', function(){
          integer31 +=1;
          int31.innerHTML = integer31;
    
      })
    
      remove31.addEventListener('click', function(){
          if(integer31 > 0){
              integer31 -=1;
          int31.innerHTML = integer31;
          }
          else
          return integer31
    
      })
  
      //32
      let add32 = document.getElementById('item32mais');
    let remove32 = document.getElementById('item32menos');
    
    let int32 = document.getElementById('qtde32');
    let integer32 = 0
      
    
      add32.addEventListener('click', function(){
          integer32 +=1;
          int32.innerHTML = integer32;
    
      })
    
      remove32.addEventListener('click', function(){
          if(integer32 > 0){
              integer32 -=1;
          int32.innerHTML = integer32;
          }
          else
          return integer32
    
      })
  
      //33
      let add33 = document.getElementById('item33mais');
    let remove33 = document.getElementById('item33menos');
    
    let int33 = document.getElementById('qtde33');
    let integer33 = 0
      
    
      add33.addEventListener('click', function(){
          integer33 +=1;
          int33.innerHTML = integer33;
    
      })
    
      remove33.addEventListener('click', function(){
          if(integer33 > 0){
              integer33 -=1;
          int33.innerHTML = integer33;
          }
          else
          return integer33
    
      })
  
      //34
      let add34 = document.getElementById('item34mais');
    let remove34 = document.getElementById('item34menos');
    
    let int34 = document.getElementById('qtde34');
    let integer34 = 0
      
    
      add34.addEventListener('click', function(){
          integer34 +=1;
          int34.innerHTML = integer34;
    
      })
    
      remove34.addEventListener('click', function(){
          if(integer34 > 0){
              integer34 -=1;
          int34.innerHTML = integer34;
          }
          else
          return integer34
    
      })
  
      //35
      let add35 = document.getElementById('item35mais');
    let remove35 = document.getElementById('item35menos');
    
    let int35 = document.getElementById('qtde35');
    let integer35 = 0
      
    
      add35.addEventListener('click', function(){
          integer35 +=1;
          int35.innerHTML = integer35;
    
      })
    
      remove35.addEventListener('click', function(){
          if(integer35 > 0){
              integer35 -=1;
          int35.innerHTML = integer35;
          }
          else
          return integer35
    
      })
  
      //36
      let add36 = document.getElementById('item36mais');
    let remove36 = document.getElementById('item36menos');
    
    let int36 = document.getElementById('qtde36');
    let integer36 = 0
      
    
      add36.addEventListener('click', function(){
          integer36 +=1;
          int36.innerHTML = integer36;
    
      })
    
      remove36.addEventListener('click', function(){
          if(integer36 > 0){
              integer36 -=1;
          int36.innerHTML = integer36;
          }
          else
          return integer36
    
      })
  
      //37
      let add37 = document.getElementById('item37mais');
    let remove37 = document.getElementById('item37menos');
    
    let int37 = document.getElementById('qtde37');
    let integer37 = 0
      
    
      add37.addEventListener('click', function(){
          integer37 +=1;
          int37.innerHTML = integer37;
    
      })
    
      remove37.addEventListener('click', function(){
          if(integer37 > 0){
              integer37 -=1;
          int37.innerHTML = integer37;
          }
          else
          return integer37
    
      })
  
      //38
      let add38 = document.getElementById('item38mais');
    let remove38 = document.getElementById('item38menos');
    
    let int38 = document.getElementById('qtde38');
    let integer38 = 0
      
    
      add38.addEventListener('click', function(){
          integer38 +=1;
          int38.innerHTML = integer38;
    
      })
    
      remove38.addEventListener('click', function(){
          if(integer38 > 0){
              integer38 -=1;
          int38.innerHTML = integer38;
          }
          else
          return integer38
    
      })
  
      //39
      let add39 = document.getElementById('item39mais');
    let remove39 = document.getElementById('item39menos');
    
    let int39 = document.getElementById('qtde39');
    let integer39 = 0
      
    
      add39.addEventListener('click', function(){
          integer39 +=1;
          int39.innerHTML = integer39;
    
      })
    
      remove39.addEventListener('click', function(){
          if(integer39 > 0){
              integer39 -=1;
          int39.innerHTML = integer39;
          }
          else
          return integer39
    
      })
  
      //40
      let add40 = document.getElementById('item40mais');
    let remove40 = document.getElementById('item40menos');
    
    let int40 = document.getElementById('qtde40');
    let integer40 = 0
      
    
      add40.addEventListener('click', function(){
          integer40 +=1;
          int40.innerHTML = integer40;
    
      })
    
      remove40.addEventListener('click', function(){
          if(integer40 > 0){
              integer40 -=1;
          int40.innerHTML = integer40;
          }
          else
          return integer40
    
      })
  
      //41
      let add41 = document.getElementById('item41mais');
    let remove41 = document.getElementById('item41menos');
    
    let int41 = document.getElementById('qtde41');
    let integer41 = 0
      
    
      add41.addEventListener('click', function(){
          integer41 +=1;
          int41.innerHTML = integer41;
    
      })
    
      remove41.addEventListener('click', function(){
          if(integer41 > 0){
              integer41 -=1;
          int41.innerHTML = integer41;
          }
          else
          return integer41
    
      })
  
      //42
      let add42 = document.getElementById('item42mais');
    let remove42 = document.getElementById('item42menos');
    
    let int42 = document.getElementById('qtde42');
    let integer42 = 0
      
    
      add42.addEventListener('click', function(){
          integer42 +=1;
          int42.innerHTML = integer42;
    
      })
    
      remove42.addEventListener('click', function(){
          if(integer42 > 0){
              integer42 -=1;
          int42.innerHTML = integer42;
          }
          else
          return integer42
    
      })
  
      //43
      let add43 = document.getElementById('item43mais');
    let remove43 = document.getElementById('item43menos');
    
    let int43 = document.getElementById('qtde43');
    let integer43 = 0
      
    
      add43.addEventListener('click', function(){
          integer43 +=1;
          int43.innerHTML = integer43;
    
      })
    
      remove43.addEventListener('click', function(){
          if(integer43 > 0){
              integer43 -=1;
          int43.innerHTML = integer43;
          }
          else
          return integer43
    
      })
  
      //44
      let add44 = document.getElementById('item44mais');
    let remove44 = document.getElementById('item44menos');
    
    let int44 = document.getElementById('qtde44');
    let integer44 = 0
      
    
      add44.addEventListener('click', function(){
          integer44 +=1;
          int44.innerHTML = integer44;
    
      })
    
      remove44.addEventListener('click', function(){
          if(integer44 > 0){
              integer44 -=1;
          int44.innerHTML = integer44;
          }
          else
          return integer44
    
      })
  
      //45
      let add45 = document.getElementById('item45mais');
      let remove45 = document.getElementById('item45menos');
      
      let int45 = document.getElementById('qtde45');
      let integer45 = 0
        
      
        add45.addEventListener('click', function(){
            integer45 +=1;
            int45.innerHTML = integer45;
      
        })
      
        remove45.addEventListener('click', function(){
            if(integer45 > 0){
                integer45 -=1;
            int45.innerHTML = integer45;
            }
            else
            return integer45
      
        })
    
  
      //46
      let add46 = document.getElementById('item46mais');
    let remove46 = document.getElementById('item46menos');
    
    let int46 = document.getElementById('qtde46');
    let integer46 = 0
      
    
      add46.addEventListener('click', function(){
          integer46 +=1;
          int46.innerHTML = integer46;
    
      })
    
      remove46.addEventListener('click', function(){
          if(integer46 > 0){
              integer46 -=1;
          int46.innerHTML = integer46;
          }
          else
          return integer46
        })
  
        //47
        let add47 = document.getElementById('item47mais');
    let remove47 = document.getElementById('item47menos');
    
    let int47 = document.getElementById('qtde47');
    let integer47 = 0
      
    
      add47.addEventListener('click', function(){
          integer47 +=1;
          int47.innerHTML = integer47;
    
      })
    
      remove47.addEventListener('click', function(){
          if(integer47 > 0){
              integer47 -=1;
          int47.innerHTML = integer47;
          }
          else
          return integer47
    
      })
  
      //48
      let add48 = document.getElementById('item48mais');
    let remove48 = document.getElementById('item48menos');
    
    let int48 = document.getElementById('qtde48');
    let integer48 = 0
      
    
      add48.addEventListener('click', function(){
          integer48 +=1;
          int48.innerHTML = integer48;
    
      })
    
      remove48.addEventListener('click', function(){
          if(integer48 > 0){
              integer48 -=1;
          int48.innerHTML = integer48;
          }
          else
          return integer48
    
      })
  
  
  
    
  
      //Função para enviar pedido pelo Whatsapp
      function send_handle(){
  
        let conteudo=document.getElementById("cesta1").innerText;
  
        let valor=document.getElementById("precototal").innerText;
  
        let name=document.getElementById("cliente").value;
      
        let adress= document.getElementById("endereco").value;
      
        let number= document.getElementById("telefone").value;
        
        var win = window.open(`https://wa.me/558791494144?text=
        *CHEGOU%20MAIS%20UM%20PEDIDO*%0A
        Me%20chamo%20${name}%0A
        Quero%20pedir%20os%20seguintes%20itens:%0A${conteudo}%0A
        O%20endereço%20de%20entrega%20é:%20${adress}%0A
        O%20meu%20telefone%20para%20contato%20é:%20${number}%0A
        O%20Valor%20total%20do%20meu%20pedido%20é:%20${valor}`, '_blank');
       // win.focus();
      }
  
      ///modal<div onclick="acao()" class="btn">clique aqui</div>