let houseArray = [
  {
    img: "./assets/images/house1.jpg",
    description: "Seaside Serenity Villa",
    text: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    img: "./assets/images/house2.jpg",
    description: "Metropolitan Haven",
    text: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    img: "./assets/images/house3.jpg",
    description: "Rustic Retreat Cottage",
    text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... ",
    bedroom: "3-Bedroom",
    bathroom: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
];

const contentHouse = document.getElementById("main-content");

houseArray.forEach((element) => {
  let elm = document.createElement("div");
  elm.classList.add("part-house");

  let housePic = document.createElement("div");
  housePic.classList.add("house-img");
  let houseImg = document.createElement("img");
  houseImg.src = element.img;

  let textP = document.createElement("div");
  textP.classList.add("house-text");
  let description = document.createElement("h4");
  description.classList.add("house-sub");
  description.innerText = element.description;
  let info = document.createElement("p");
  info.classList.add("house-info");
  info.innerText = element.text;
  let link = document.createElement("a");
  link.classList.add("house-link");
  link.innerText = "Read More";
  link.href = "#";
  link.target = "_blank";

  let about = document.createElement("div");
  about.classList.add("about-house");
  let bedroom = document.createElement("div");
  bedroom.classList.add("about-elm");
  let bedroomIco = document.createElement("img");
  bedroomIco.src = "./assets/icons/bedroom.png";
  let bedroomText = document.createElement("p");
  bedroomText.classList.add("about-text");
  bedroomText.innerText = element.bedroom;
  let bathroom = document.createElement("div");
  bathroom.classList.add("about-elm");
  let bathroomIco = document.createElement("img");
  bathroomIco.src = "./assets/icons/bathroom.png";
  let bathroomText = document.createElement("p");
  bathroomText.classList.add("about-text");
  bathroomText.innerText = element.bathroom;
  let type = document.createElement("div");
  type.classList.add("about-elm");
  let typeIco = document.createElement("img");
  typeIco.src = "./assets/icons/type.png";
  let typeText = document.createElement("p");
  typeText.classList.add("about-text");
  typeText.innerText = element.type;

  let priceP = document.createElement("div");
  priceP.classList.add("price-p");
  let priceTextP = document.createElement("div");
  priceTextP.classList.add("price");
  let price = document.createElement("p");
  price.classList.add("price-text");
  price.innerText = "Price";
  let priceSum = document.createElement("p");
  priceSum.classList.add("price-sum");
  priceSum.innerText = element.price;
  let priceBtn = document.createElement("button");
  priceBtn.classList.add("price-btn");
  priceBtn.innerText = "View Property Details";

  contentHouse.appendChild(elm);
  elm.appendChild(housePic);
  housePic.appendChild(houseImg);
  elm.appendChild(textP);
  textP.appendChild(description);
  textP.appendChild(info);
  info.appendChild(link);
  elm.appendChild(about);
  about.appendChild(bedroom);
  bedroom.appendChild(bedroomIco);
  bedroom.appendChild(bedroomText);
  about.appendChild(bathroom);
  bathroom.appendChild(bathroomIco);
  bathroom.appendChild(bathroomText);
  about.appendChild(type);
  type.appendChild(typeIco);
  type.appendChild(typeText);
  elm.appendChild(priceP);
  priceP.appendChild(priceTextP);
  priceTextP.appendChild(price);
  priceTextP.appendChild(priceSum);
  priceP.appendChild(priceBtn);
});

let rateArray = [
  {
    userDescription: "Exceptional Service!",
    userText:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    userImage: "./assets/images/Profile1.png",
    userName: "Wade Warren",
    userRegion: "USA, California",
  },
  {
    userDescription: "Efficient and Reliable",
    userText:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    userImage: "./assets/images/Profile2.png",
    userName: "Emelie Thomson",
    userRegion: "USA, Florida",
  },
  {
    userDescription: "Trusted Advisors",
    userText:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    userImage: "./assets/images/Profile3.png",
    userName: "John Mans",
    userRegion: "USA, Nevada",
  },
];

const contentRate = document.getElementById("main-content1");

rateArray.forEach((element) => {
  let elm = document.createElement("div");
  elm.classList.add("part-rate");

  let stars = document.createElement("div");
  stars.classList.add("star-part");
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("button");
    star.classList.add("star-btn");
    let starIco = document.createElement("i");
    starIco.classList.add("icon-star");

    stars.appendChild(star);
    star.appendChild(starIco);
  }

  let textP = document.createElement("div");
  textP.classList.add("text-part");
  let sub = document.createElement("h4");
  sub.classList.add("rate-sub");
  sub.innerText = element.userDescription;
  let text = document.createElement("p");
  text.classList.add("rate-text");
  text.innerText = element.userText;

  let userP = document.createElement("div");
  userP.classList.add("user-part");
  let userPic = document.createElement("div");
  userPic.classList.add("user-image");
  let userImg = document.createElement("img");
  userImg.src = element.userImage;
  let userInfo = document.createElement("div");
  userInfo.classList.add("user-info");
  let userName = document.createElement("p");
  userName.classList.add("user-name");
  userName.innerText = element.userName;
  let userRegion = document.createElement("p");
  userRegion.classList.add("user-region");
  userRegion.innerText = element.userRegion;

  contentRate.appendChild(elm);
  elm.appendChild(stars);
  elm.appendChild(textP);
  textP.appendChild(sub);
  textP.appendChild(text);
  elm.appendChild(userP);
  userP.appendChild(userPic);
  userPic.appendChild(userImg);
  userP.appendChild(userInfo);
  userInfo.appendChild(userName);
  userInfo.appendChild(userRegion);
});

let questionArray = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

const questionContent = document.getElementById("main-content2");

questionArray.forEach((element) => {
  let elm = document.createElement("div");
  elm.classList.add('part-question')

  let question = document.createElement("p");
  question.classList.add('question')
  question.innerText = element.question;
  let answer = document.createElement("p");
  answer.classList.add('answer')
  answer.innerText = element.answer;

  let moreBtn = document.createElement("button");
  moreBtn.classList.add('answer-btn')
  moreBtn.innerText = "Read More";

  questionContent.appendChild(elm);
  elm.appendChild(question);
  elm.appendChild(answer);
  elm.appendChild(moreBtn);
});
