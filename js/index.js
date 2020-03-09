const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//add body bgc
const wholePage = document.querySelector("body");
wholePage.style.backgroundColor = "#f0ffff";
console.log(wholePage)
//nav
const aElement = document.querySelectorAll("a");
aElement[0].textContent = siteContent["nav"]["nav-item-1"];
aElement[1].textContent = siteContent["nav"]["nav-item-2"];
aElement[2].textContent = siteContent["nav"]["nav-item-3"];
aElement[3].textContent = siteContent["nav"]["nav-item-4"];
aElement[4].textContent = siteContent["nav"]["nav-item-5"];
aElement[5].textContent = siteContent["nav"]["nav-item-6"];
//nav - change color
const navElement = document.querySelectorAll("a");
navElement.forEach(item => (item.style.color = "green"));
//nav - add an item append
const newOne = document.createElement("img");
newOne.src =
  "https://findicons.com/files/icons/2129/web_2_0_origami/40/gmail_small.png";
const parent = document.querySelector("nav");
parent.prepend(newOne);
//nav - add an item behind
const newTwo = document.createElement("h3");
newTwo.textContent = "Hello!";
newTwo.style.color = "pink";
parent.append(newTwo);
//cta image
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
//cta h1
const ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent["cta"]["h1"];
//cta button
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
//cta click btn
ctaButton.addEventListener('click',(event) => {
  event.target.textContent = "submitted!";
})
//main-content: top-content
const firstTop = document.querySelectorAll("h4")[0];
firstTop.textContent = siteContent["main-content"]["features-h4"];
const secondTop = document.querySelectorAll("h4")[1];
secondTop.textContent = siteContent["main-content"]["about-h4"];
////main-content: top-content text
const firstTopContent = document.querySelectorAll("p")[0];
firstTopContent.textContent = siteContent["main-content"]["features-content"];
const secondTopContent = document.querySelectorAll("p")[1];
secondTopContent.textContent = siteContent["main-content"]["about-content"];
//main img
const mainImg = document.querySelector(".middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];
//bottom content h4
const btLeft = document.querySelectorAll("h4")[2];
btLeft.textContent = siteContent["main-content"]["services-h4"];
const btMiddle = document.querySelectorAll("h4")[3];
btMiddle.textContent = siteContent["main-content"]["product-h4"];
const btRight = document.querySelectorAll("h4")[4];
btRight.textContent = siteContent["main-content"]["vision-h4"];
//bottom text
const btLeftContent = document.querySelectorAll("p")[2];
btLeftContent.textContent = siteContent["main-content"]["services-content"];
const btMiddleContent = document.querySelectorAll("p")[3];
btMiddleContent.textContent = siteContent["main-content"]["product-content"];
const btRightContent = document.querySelectorAll("p")[4];
btRightContent.textContent = siteContent["main-content"]["vision-content"];
//contact
const contactHeader = document.querySelectorAll("h4")[5];
contactHeader.textContent = siteContent["contact"]["contact-h4"];
const addressElement = document.querySelectorAll("p")[5];
addressElement.textContent = siteContent["contact"]["address"];
const phoneElement = document.querySelectorAll("p")[6];
phoneElement.textContent = siteContent["contact"]["phone"];
const emailElement = document.querySelectorAll("p")[7];
emailElement.textContent = siteContent["contact"]["email"];
//footer
const copyRight = document.querySelectorAll("p")[8];
copyRight.textContent = siteContent["footer"]["copyright"];
