document.addEventListener("DOMContentLoaded", () => {
  const brewBtn = document.getElementById("brewBtn");
  const visitBtn = document.getElementById("visitBtn");
  const content = document.getElementById("content");
  const journalBtn = document.getElementById("journalBtn");
  const dessertBtn = document.getElementById("dessertBtn");



  const cafes = {
    kyoto: {
      name: "Kyoto Café",
      img: "https://raw.githubusercontent.com/Sakinadholka/brewimages/e99bf2aa01f3bb31f116460ca540b3c87074955f/kyotoimage.jpg"
    },
    mumbai: {
      name: "Mumbai Café",
      img: "https://raw.githubusercontent.com/Sakinadholka/brewimages/e99bf2aa01f3bb31f116460ca540b3c87074955f/mumbaiimage.jpg"
    },
    paris: {
      name: "Paris Café",
      img: "https://raw.githubusercontent.com/Sakinadholka/brewimages/e99bf2aa01f3bb31f116460ca540b3c87074955f/parisimage.jpg"
    }
  };

  const coffees = {
    latte: {
      name: "Latte",
      desc: "Smooth espresso with steamed milk",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    matcha: {
      name: "Matcha",
      desc: "Earthy green tea calm",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    espresso: {
      name: "Espresso",
      desc: "Strong & bold shot",
      img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a"
    },
    cappuccino: {
      name: "Cappuccino",
      desc: "Frothy & creamy balance",
      img: "https://images.unsplash.com/photo-1523942839745-7848d3b8c9a1"
    }
  };
  const desserts = {
  croissant: {
    name: "Croissant",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  },
  cake: {
    name: "Vintage Cake",
    img: "https://images.unsplash.com/photo-1542826438-8b7c1bfb6f6d"
  },
  macaron: {
    name: "Macaron",
    img: "https://images.unsplash.com/photo-1505253216365-7d3b2b8c64d4"
  },
  tiramisu: {
    name: "Tiramisu",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  }
};


  function fadeContent(html) {
    content.classList.remove("fade");
    void content.offsetWidth; // reset animation
    content.innerHTML = html;
    content.classList.add("fade");
  }

  brewBtn.addEventListener("click", () => {
    fadeContent(`
      <h2>☕ Choose Your Coffee</h2>
      <div class="option-buttons">
        <button onclick="showCoffee('latte')">Latte</button>
        <button onclick="showCoffee('matcha')">Matcha</button>
        <button onclick="showCoffee('espresso')">Espresso</button>
        <button onclick="showCoffee('cappuccino')">Cappuccino</button>
      </div>
    `);
  });

  visitBtn.addEventListener("click", () => {
    fadeContent(`
      <h2>🏙️ Choose a Café</h2>
      <div class="option-buttons">
        <button onclick="showCafe('kyoto')">Kyoto</button>
        <button onclick="showCafe('mumbai')">Mumbai</button>
        <button onclick="showCafe('paris')">Paris</button>
      </div>
    `);
  });
  dessertBtn.addEventListener("click", () => {
  fadeContent(`
    <h2>🍰 Choose a Dessert</h2>
    <div class="option-buttons">
      <button onclick="showDessert('croissant')">Croissant</button>
      <button onclick="showDessert('cake')">Cake</button>
      <button onclick="showDessert('macaron')">Macaron</button>
      <button onclick="showDessert('tiramisu')">Tiramisu</button>
    </div>
  `);
});

  journalBtn.addEventListener("click", () => {
  const savedText = localStorage.getItem("journalEntry") || "";

  fadeContent(`
    <h2>📝 My Journal</h2>
    <div class="journal-box">
      <textarea id="journalText" placeholder="Write your thoughts here...">${savedText}</textarea>
    </div>
    <p style="font-size: 14px; opacity: 0.7;">Your words are saved automatically</p>
  `);

  setTimeout(() => {
    const textarea = document.getElementById("journalText");
    textarea.addEventListener("input", () => {
      localStorage.setItem("journalEntry", textarea.value);
    });
  }, 50);
});


  window.showCafe = function(city) {
    const cafe = cafes[city];
    fadeContent(`
      <div class="title">${cafe.name}</div>
      <img src="${cafe.img}">
    `);
  };

 window.showCoffee = function(type) {
  const coffee = coffees[type];
  fadeContent(`
    <div class="title">${coffee.name}</div>
    <p>${coffee.desc}</p>

    <div class="coffee-cup">
      <div class="steam steam1"></div>
      <div class="steam steam2"></div>
      <div class="steam steam3"></div>
      <img src="${coffee.img}" alt="${coffee.name}">
    </div>
  `);
};
});
window.showDessert = function(type) {
  const dessert = desserts[type];
  fadeContent(`
    <div class="title">${dessert.name}</div>
    <img src="${dessert.img}" class="dessert-img" alt="${dessert.name}">
  `);
};
