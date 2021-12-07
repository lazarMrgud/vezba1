/*-------------------------------------------------------------------------------*/

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded", ready)

}else{
    ready()
}


/*-------------------------------------------------------------------------------*/





function ready(){
    var remuveCardButtons=document.getElementsByClassName("btn-danger");
    for(var i=0;i<remuveCardButtons.length;i++){
        var button=remuveCardButtons[i]
        button.addEventListener("click",  remuveCardItem)         
    }
    var inputnumber =document.getElementsByClassName("cart-quantity-input")
    for (var i =0; i<inputnumber.length; i++){
        var input= inputnumber[i]
        input.addEventListener("change",inputLimit ) 
    }
    var addCardButton=document.getElementsByClassName("shop-item-button")
    for (var i =0; i<addCardButton.length; i++){
        var button= addCardButton[i]
        button.addEventListener("click", addCardList);
    }
    document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchase)
}


function addItemCard(title, price, img ) {
    var CartRow=document.createElement("div")
    CartRow.classList.add("cart-row")
    var cartElement=document.getElementsByClassName("cart-items")[0]

    var cartItemName=cartElement.getElementsByClassName("cart-item-title")
    for(var i=0; i < cartItemName.length; i++){
        if(cartItemName[i].innerText == title){
            alert("This item is added a cartlist")
            return
        }
    }
    var CartCONTENT =` 
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${img}" width="100" height="100">
                            <span class="cart-item-title">"${title}"</span>
                        </div>
                        <span class="cart-price cart-column">"${price}"</span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="1">
                            <button class="btn btn-danger" type="button">REMOVE</button>
                        </div>`
    /*innerHTML -innerText razlika je sto ovaj text ispisuje text a ovaj kupi kod i ispisuje ga kao celokupnu stvar */
    CartRow.innerHTML= CartCONTENT
    cartElement.append(CartRow)
    CartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", remuveCardItem)
    CartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", inputLimit)
}













/*-------------------------------------------------------------------------------*/
function purchase() {
    alert("Thank you  for  purchase")
    var cartItems=document.getElementsByClassName("cart-items")[0]
    while(cartItems.hasChildNodes){
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal()
    
}
function addCardList(event) {
    clickbutton=event.target;
    var buttonITEM=clickbutton.parentElement.parentElement
    
    var title =buttonITEM.getElementsByClassName("shop-item-title")[0].innerText
    var price=buttonITEM.getElementsByClassName("shop-item-price")[0].innerText
    var img =buttonITEM.getElementsByClassName("shop-item-image")[0].src
    addItemCard(title, price, img)

    
}
function remuveCardItem(event) {
    var remuveItem=event.target;
    remuveItem.parentElement.parentElement.remove();
    updateCartTotal();
}

function inputLimit (event) {
    var input=event.target;
    if(isNaN(input.value)|| input.value<=0){
        input.value=1;
    }
    updateCartTotal();

}







function updateCartTotal(){
    var cartItemContainer=document.getElementsByClassName("cart-items")[0]

    var cartROWS=cartItemContainer.getElementsByClassName("cart-row")
    var total=0
    for(var i=0; i < cartROWS.length;  i++){

        var carROW=cartROWS[i]

        var priceElement=carROW.getElementsByClassName("cart-price")[0]
        var quantityElement=carROW.getElementsByClassName("cart-quantity-input")[0]

        
        /*uzima i string i broj i sabira pretvara elemente   - parseFloat- sluzi za ispisivanje stringa kao celi broj u zavisnosti ako je upisan kao string i onda se dalje moze raditi sa njim matematicka operacij a . */
        var price =priceElement.innerText.replace("$", " ")
        var quntati = quantityElement.value
        total = total+(price * quntati);
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName("cart-total-price")[0].innerText="$" + total;
}