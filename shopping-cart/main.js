let shop = document.getElementById('shop');

let shopdata =[{
    id:"1",
      
},{},{},{}]

let generateShop =()=>{
    return shop.innerHTML=`
    <div class="item">
            <img width="220" src="images/img-1.jpg" alt="">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing</p>
                <div class="price-quantity">
                    <h2>$ 45</h2>
                    <div class="button">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
};

generateShop();
