const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

function fill(_items, _values) {
  _items.forEach((__item, __index) => __item.innerText = _values[__index]);
}



let _nav = document.querySelector('nav');
let _nav_alp = document.createElement('a')
let _nav_omg = document.createElement('a')

_nav.appendChild(_nav_omg);
_nav.prepend(_nav_alp);


let n_items = document.querySelectorAll('nav a');
let n_vals = Object.values(siteContent['nav']);

fill(n_items, n_vals);
n_items.forEach((item) => item.style.color = "green")


 let logo = document.getElementById("logo-img");
 logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let content_h = document.querySelectorAll('.text-content h4');
let h_items = Object.keys(siteContent['main-content']);
let h_vals = [];
h_items.forEach((h) => {
  if (h.includes('h4')) {
    h_vals.push(siteContent['main-content'][h]);
  }
});

fill(content_h, h_vals);


let content_p = document.querySelectorAll('.text-content p');
let p_vals = [];
h_items.forEach((i) => {
  if (i.includes('content')) {
    p_vals.push(siteContent['main-content'][i]);
  }
});

fill(content_p, p_vals);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let _contacts = document.querySelector('.contact h4');
_contacts.innerText = siteContent['contact']['contact-h4'];

let c_items = document.querySelectorAll('.contact p');
let c_vals = Object.values(siteContent['contact']).splice(1, 3);
fill(c_items, c_vals);

let foot = document.querySelector('footer p');
foot.innerText = siteContent['footer']['copyright'];