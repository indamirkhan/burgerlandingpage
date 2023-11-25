const hamBurger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navLink = document.querySelectorAll('.navLink');

hamBurger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
})
navClose.addEventListener("click", () => {
    navMenu.classList.add("hidden");
})

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    }))

/*~ TABS ~~~~~ */
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap')
const food = document.querySelectorAll('.food')
const snack = document.querySelectorAll('.snack')
const beverage = document.querySelectorAll('.beverage')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        });
        tab.classList.add("active")

        const tabVal = tab.getAttribute('data-tabs')
        console.log(tabVal);
        all.forEach(item => {
            item.style.display = 'none'
        })
        if (tabVal == 'food') {
            food.forEach(item => {
                item.style.display = 'block'
            })
        } else if (tabVal == 'snack') {
            snack.forEach(item => {
                item.style.display = 'block'
            })
        } else if (tabVal == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    });
});

