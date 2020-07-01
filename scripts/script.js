let clickCount1 = 0;
let clickCount2 = 0;

const catPictureElem1 = document.getElementById("catPicture1");
const catPictureElem2 = document.getElementById("catPicture2")
const clickCountElem1 = document.getElementById("clickCount1");
const clickCountElem2 = document.getElementById("clickCount2");

document.getElementById("catName1").innerText = "Basil";
document.getElementById("catName2").innerText = "Mew";

catPictureElem1.addEventListener('click', 
	() => clickCountElem1.innerText = ++clickCount1,
	false);

catPictureElem2.addEventListener('click',
	() => clickCountElem2.innerText = ++clickCount2,
	false);