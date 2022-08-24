const menu = [{
        id: 1,
        name: "Burger",
        category: "Lunch",
        image: "./img/burger.avif",
        desc: "A hamburger (or burger for short) is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
        price: "rs 150",
    },
    {
        id: 2,
        name: "Fried-rice",
        category: "Dinner",
        image: "./img/fried-rice.avif",
        desc: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish",
        price: "rs 100",
    },
    {
        id: 3,
        name: "Tea",
        category: "Drinks",
        image: "./img/tea.avif",
        desc: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries",
        price: "rs 50",
    },
    {
        id: 4,
        name: "Chicken",
        category: "Meal",
        image: "./img/chicken.avif",
        desc: "Chickens. Chickens are the most common birds on earth. They are kept for their eggs and for their meat all over the world, from huge farms to people's yards. Hens (female chickens) often live in groups and each hen looks after her own brood (family of chicks), sometimes living in little houses called chicken coops.",
        price: "rs 150",
    },
    {
        id: 5,
        name: "Momo",
        category: "Lunch",
        image: "./img/momo.avif",
        desc: "Momo is a type of steamed dumpling with some form of filling, most commonly beef and it is originally from Tibet. Momo has become a delicacy in Nepal and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh.",
        price: "rs 100",
    },
    {
        id: 6,
        name: "Egg",
        category: "Breakfast",
        image: "./img/egg.avif",
        desc: "A fried egg is a cooked dish made from one or more eggs which are removed from their shells and placed into a frying pan and fried",
        price: "rs 52",
    },
    {
        id: 7,
        name: "Salad",
        category: "Breakfast",
        image: "./img/image-breakfast.avif",
        desc: "A salad is a serving in a meal that includes leaf vegetables such as lettuce, spinach, or arugula. Uncooked or cold cooked vegetables that are sliced into small pieces (for example tomato or onion) are then mixed with the leaf vegetables. Some salads use cheese like Greek salad uses Feta.",
        price: "rs 80",
    },

    {
        id: 8,
        name: "NoName",
        category: "Dinner",
        image: "./img/dinner--01.avif",
        desc: "Chns. they are the most common birds on earth. They are kept for their eggs and for their meat all over the world, from huge farms to people's yards. Hens (female chickens) often live in groups and each hen looks after her own brood (family of chicks), sometimes living in little houses called chicken coops.",
        price: "rs 300",
    },
    {
        id: 9,
        name: "Paratha",
        category: "Breakfast",
        image: "./img/paratha.jpg",
        desc: "Paratha are unleavened layered flatbreads made with whole wheat flour (atta), salt, water & ghee or oil. These traditional flatbreads are a staple in Indian subcontinent and are served for a breakfast with a side of curd, chutney, pickle, curries, eggs and meat dishes",
        price: "rs 250",
    },
    {
        id: 10,
        name: "Coke",
        category: "Drinks",
        image: "./img/coke.avif",
        desc: "Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia",
        price: "rs 120",
    },
    {
        id: 11,
        name: "Pizza",
        category: "lunch",
        image: "./img/pizza.avif",
        desc: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven",
        price: "rs 300",
    },
];

const container = document.querySelector('.main--container')
const btns = document.querySelectorAll('.header--items')

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
})

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;

        const menuCategory = menu.filter((currentElem) => {
            if (currentElem.category === category) {
                return currentElem;
            }
        })
        if (category === 'All') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }

    })
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {

        return `<div class="card">
        <div class="card--img--box">

            <img src=${item.image} class="card--img" alt="${item.name}">
        </div>
        <div class="card--details">
            <header class="flex">
                <h4 class="card--title">${item.name}</h4>
                <span class="card--price">${item.price}</span>
            </header>

            <hr>
            <p class="card--info">${item.desc}</p>

        </div>
    </div>`
    })
    displayMenu = displayMenu.join("")
    container.innerHTML = displayMenu
}