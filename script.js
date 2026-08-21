// دکمه بازگشت به بالا
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// انیمیشن نمایش بخش‌ها هنگام اسکرول
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// افکت کوچک برای کارت‌های محصولات
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// نمایش سال جاری در فوتر (در صورت وجود عنصر)
const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} تمامی حقوق برای فروشگاه نساجی بزرگمهر محفوظ است.`;
                                          }
