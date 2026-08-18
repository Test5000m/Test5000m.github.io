// ===============================
// فروشگاه نساجی بزرگمهر
// script.js
// ===============================

// نمایش سال جاری در فوتر
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} فروشگاه نساجی بزرگمهر | تمامی حقوق محفوظ است.`;
}

// انیمیشن ظاهر شدن بخش‌ها هنگام اسکرول
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// هایلایت لینک منو هنگام اسکرول
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// اسکرول نرم
navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// پیام خوش‌آمدگویی
window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("به فروشگاه نساجی بزرگمهر خوش آمدید.");

    }, 500);

});
```

### یک تغییر کوچک در `style.css`

برای اینکه انیمیشن‌های این فایل کار کنند، این کد را **آخر فایل `style.css`** اضافه کن:

```css
/* انیمیشن نمایش بخش‌ها */
.hidden{
    opacity:0;
    transform:translateY(60px);
    transition:all .8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

/* لینک فعال منو */
nav a.active{
    color:#d4af37;
    border-bottom:2px solid #d4af37;
    padding-bottom:4px;
}
```
