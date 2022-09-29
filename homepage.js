let tabs = document.querySelectorAll(".vertical-tabs > div");
// console.log(tabs[0].children[1].innerText);
tabs.forEach(function (el) {
  el.addEventListener("click", function () {
    myFun(el);
  });
});

let contentObj = [
  {
    id: "Proposals",
    conHead: "Win More Work",
    textCon:
      "With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.",
    linkCon: "EXPLORE PROPOSALS",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png",
  },
  {
    id: "Contracts",
    conHead: "Protect Your Business",
    textCon:
      "Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.",
    linkCon: "EXPLORE CONTRACTS",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png",
  },
  {
    id: "Client CRM",
    conHead: "Stay Organized",
    textCon:
      "Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.",
    linkCon: "EXPLORE PROJECTS",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png",
  },
  {
    id: "Time Tracking",
    conHead: "Keep It Simple",
    textCon:
      "Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.",
    linkCon: "EXPLORE TIME TRACKING",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png",
  },
  {
    id: "Invoices",
    conHead: "Get Paid Faster",
    textCon:
      "Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.",
    linkCon: "EXPLORE INVOICES",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png",
  },
  {
    id: "Task Tracking",
    conHead: "Be More Effective",
    textCon:
      "Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.",
    linkCon: "EXPLORE TASKS",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png",
  },
  {
    id: "Accounting & Taxes",
    conHead: "Automate Your Finances",
    textCon:
      "Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.",
    linkCon: "EXPLORE ACCOUNTING & TAXES",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png",
  },
  {
    id: "Forms",
    conHead: "Ask Your Clients",
    textCon:
      "Create your own customized forms and questionnaires for clieants and kicking off new projects",
    linkCon: "EXPLORE FORMS",
    img: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png",
  },
];
let content = document.querySelector(".tab-content");
// console.log(content);
function myFun(el) {
  let tabId = el.children[1].innerText;
  console.log("invoked");
  content.innerHTML = "";
  contentObj.forEach(function (e) {
    if (e.id === tabId) {
      // console.log("pass");
      let contDiv = document.createElement("div");
      let conhead = document.createElement("h2");
      conhead.innerText = e.conHead;
      let contex = document.createElement("div");
      contex.innerText = e.textCon;
      let conlink = document.createElement("div");
      conlink.innerText = e.linkCon;
      let conImg = document.createElement("img");
      conImg.src = e.img;
      contDiv.append(conhead, contex, conlink);
      content.append(contDiv, conImg);
    }
  });
}
let track = document.querySelector(".carousel_track");
let slides = Array.from(track.children);
// console.log(slides);
let dotsNav = document.querySelector(".carousel_nav");
let dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;
slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";

dotsNav.addEventListener("click", navigate);

function navigate(event) {
  targetDot = event.target.closest("button");
  //   console.log(targetDot);
  if (!targetDot) {
    return;
  }
  let currentSlide = track.querySelector(".current_slide");
  let currentDot = dotsNav.querySelector(".current_slide");
  let targetIndex = dots.findIndex(function (el) {
    return el === targetDot;
  });
  // console.log(targetIndex);
  let targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);
  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
}

function moveSlide(track, cS, tS) {
  track.style.transform = "translateX(-" + tS.style.left + ")";
  cS.classList.remove("current_slide");
  tS.classList.add("current_slide");
}
