// سبد خرید

let cart = JSON.parse(localStorage.getItem("legendcraft_cart")) || [];

const cartCount = document.getElementById("cartCount");

// بروزرسانی تعداد

function updateCartUI() {

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    localStorage.setItem(
        "legendcraft_cart",
        JSON.stringify(cart)
    );
}

updateCartUI();


// اضافه کردن محصول

function addCart(item) {

    cart.push(item);

    updateCartUI();

    showNotification(
        `${item} به سبد خرید اضافه شد`
    );

}


// نوتیفیکیشن

function showNotification(text) {

    const notification =
        document.createElement("div");

    notification.className =
        "shop-notification";

    notification.innerText = text;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 50);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 400);

    }, 2500);

}


// استایل نوتیفیکیشن

const style =
document.createElement("style");

style.innerHTML = `

.shop-notification{
position:fixed;
top:30px;
left:50%;
transform:translateX(-50%) translateY(-30px);
background:linear-gradient(90deg,#00ffcc,#00aaff);
color:black;
padding:15px 25px;
border-radius:15px;
font-weight:bold;
z-index:99999;
opacity:0;
transition:.4s;
box-shadow:0 0 30px rgba(0,255,204,.5);
}

.shop-notification.show{
opacity:1;
transform:translateX(-50%) translateY(0);
}

`;

document.head.appendChild(style);


// شمارنده بازیکن آنلاین

const onlineElement =
document.querySelector(".stats h3");

if (onlineElement) {

    let online = 500;

    setInterval(() => {

        online += Math.floor(
            Math.random() * 8 - 3
        );

        if (online < 450)
            online = 450;

        onlineElement.textContent =
            online;

    }, 4000);

}


// افکت ظاهر شدن هنگام اسکرول

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.1
}

);


document
.querySelectorAll(
".card,.faq-box,.stats div"
)
.forEach(el => {

el.style.opacity = "0";
el.style.transform =
"translateY(40px)";
el.style.transition =
"all .8s ease";

observer.observe(el);

});


// کلیک روی سبد خرید

const cartBtn =
document.querySelector(".cart");

if(cartBtn){

cartBtn.addEventListener(
"click",
() => {

if(cart.length === 0){

alert(
"سبد خرید خالی است."
);

return;

}

let list = "";

cart.forEach(item => {

list += "• " + item + "\n";

});

alert(
"سبد خرید شما:\n\n" + list
);

}
);

}


// افکت پارالاکس

window.addEventListener(
"mousemove",
(e)=>{

const bg =
document.querySelector(
".bg-animation"
);

if(!bg) return;

const x =
(e.clientX / window.innerWidth)
* 20;

const y =
(e.clientY / window.innerHeight)
* 20;

bg.style.transform =
`translate(${x}px,${y}px)`;

}
);


// پیام خوش آمد

setTimeout(()=>{

showNotification(
"به فروشگاه LegendCraft خوش آمدید"
);

},1000);
