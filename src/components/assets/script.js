const aboutMe = document.querySelector("#about-me");
const projects = document.querySelector("#projects");
const resume = document.querySelector("#resume");
const contact = document.querySelector("#contact");

const navAbout = document.querySelector("#nav-about");
const navProj = document.querySelector("#nav-proj");
const navRes = document.querySelector("#nav-res");
const navCon = document.querySelector("#border");

projects.setAttribute("style", "display: none");
resume.setAttribute("style", "display: none");
contact.setAttribute("style", "display: none");

navAbout.addEventListener("click", function() {
    aboutMe.setAttribute("style", "display: inline-flex");
    projects.setAttribute("style", "display: none");
    resume.setAttribute("style", "display: none");
    contact.setAttribute("style", "display: none");
});

navProj.addEventListener("click", function() {
    projects.setAttribute("style", "display: inline-flexbox");
    aboutMe.setAttribute("style", "display: none");
    resume.setAttribute("style", "display: none");
    contact.setAttribute("style", "display: none");
});

navRes.addEventListener("click", function() {
    resume.setAttribute("style", "display: inline-flexbox");
    projects.setAttribute("style", "display: none");
    aboutMe.setAttribute("style", "display: none");
    contact.setAttribute("style", "display: none");
});

navCon.addEventListener("click", function() {
    contact.setAttribute("style", "display: inline-flexbox");
    projects.setAttribute("style", "display: none");
    aboutMe.setAttribute("style", "display: none");
    resume.setAttribute("style", "display: none");
});
