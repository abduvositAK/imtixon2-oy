var elInp = document.querySelector(".input");
var elNon = document.querySelector(".order__right-1-text");
var elRadios1 = document.querySelector(".radios__1");
var elRadios2 = document.querySelector(".radios__2");
var elRadios3 = document.querySelector(".radios__3");
var elNon = document.querySelector(".order__right-1-text");
var elSize = document.querySelector(".order__right-2-text");
var elInp1 = document.querySelector(".box__1-inp");
var elInp2 = document.querySelector(".box__2-inp");
var elInp3 = document.querySelector(".box__3-inp");
var elInp4 = document.querySelector(".box__4-inp");
var elInp5 = document.querySelector(".box__5-inp");
var elInp6 = document.querySelector(".box__6-inp");
var elInp8 = document.querySelector(".supplements__1-inp");
var elInp9 = document.querySelector(".supplements__2-inp");
var elText1 = document.querySelector(".order__right-3-text1");
var elText2 = document.querySelector(".order__right-3-text2");
var elText3 = document.querySelector(".order__right-3-text3");
var elText4 = document.querySelector(".order__right-3-text4");
var elText5 = document.querySelector(".order__right-3-text5");
var elText6 = document.querySelector(".order__right-3-text6");
var elText8 = document.querySelector(".order__right-4-text1");
var elText9 = document.querySelector(".order__right-4-text2");
var elButton = document.querySelector(".btn");

elInp.addEventListener("change", function () {
  elNon.textContent = elInp.value;
}),
  elRadios1.addEventListener("click", function () {
    elSize.textContent = "25cm";
  }),
  elRadios2.addEventListener("click", function () {
    elSize.textContent = "30cm";
  }),
  elRadios3.addEventListener("click", function () {
    elSize.textContent = "35cm";
  });

elInp1.addEventListener("click", function () {
  elText1.textContent = "- Pomidor";
}),
  elInp2.addEventListener("click", function () {
    elText2.textContent = "- Kurka go'shti";
  }),
  elInp3.addEventListener("click", function () {
    elText3.textContent = "- Zaytun";
  }),
  elInp4.addEventListener("click", function () {
    elText4.textContent = "- Tuzlangan bodirng";
  }),
  elInp5.addEventListener("click", function () {
    elText5.textContent = "- Qo'ziqorin";
  }),
  elInp6.addEventListener("click", function () {
    elText6.textContent = "- Qazi";
  });

    elInp8.addEventListener("click", function() {
    elText8.textContent = "- Achchiq"
  })

    elInp9.addEventListener("click", function() {
    elText9.textContent = "- Pishloq"
})


function but(){

elButton.addEventListener('click', function(){
    console.log(elNon.textContent + ' '  + elSize.textContent + elText1.textContent + elText2.textContent + elText3.textContent + elText4.textContent + elText5.textContent + elText6.textContent + elText8.textContent+ elText9.textContent);
})
}