"use strict";

const containerJobs = document.querySelector(".grid-countainer");
const filterByTitle = document.querySelector(".filter-by-title");
const searchBtn = document.querySelector(".search-btn");
const alljobcard = document.querySelectorAll(".job-card");

const datas = [];
console.log(datas); 

/*

const getData = async function (jobs) {
  const res = await fetch("./data.json");
  const data = await res.json();
  datas.push(data);

  data.forEach(function (data) {
    const createJobCard = `
        <div class="job-card">
            <img class="job-logo" src="${data.logo}" />
            <p>${data.postedAt} <span>.</span> <span>${data.contract}</span></p>
            <h1>${data.position}</h1>
            <p>${data.company}</p>
            <p>${data.location}</p>
        </div>
    `;
    containerJobs.insertAdjacentHTML("afterbegin", createJobCard);
  });
};
getData();
getData(object);
*/
/*
searchBtn.addEventListener("click", function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
    (data) => data.position === filterByTitle.value
  );
const expect = datas[0].filter((data) => data != jobsByTitle);
  containerJobs.classList.add("hidden");
  getData(jobsByTitle);
  const index = datas[0].findIndex((data) => data === jobsByTitle);
  ///
  const xxx = containerJobs.slice(index);
  console.log(xxx);
});
*/
/*********************************************** */
/************************************************ */
/*************************************************** */
/*************************************************** */
/***************************************************** */
const renderCountry = function (data) {
  const createJobCard = `
        <div class="job-card">
          <img class="job-logo" src="${data.logo}" />
            <p>${data.postedAt} <span>.</span> <span>${data.contract}</span></p>
            <h1>${data.position}</h1>
            <p>${data.company}</p>
            <p>${data.location}</p>
        </div>
    `;
  containerJobs.insertAdjacentHTML("afterbegin", createJobCard);
};

const getData = async function () {
  const res = await fetch("./data.json");
  const data = await res.json();
  datas.push(data);
  data.forEach((data) => renderCountry(data));
};
getData();
/*
searchBtn.addEventListener("click", function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
  (data) => data.position === filterByTitle.value
  );
  for (const data of datas[0])
  if (data === jobsByTitle) containerJobs.textContent = " ";
  renderCountry(jobsByTitle);
*/
/*
  datas[0].find(function (data) {
    data === jobsByTitle;
    containerJobs.textContent = " ";    //containerJobs.classList.add("hidden"); ამან რატო არ იმუშავაა?
  });
  renderCountry(jobsByTitle);*/
/*

});*/
/*********************************************** */
/************************************************ */
/*************************************************** */
/*************************************************** */
/***************************************************** */
/*********************************************** */
const createFilter = function () {
  const filterByTitle = document.querySelector(".filter-by-title");
  const jobsByTitle = datas[0].find(
    (data) => data.position === filterByTitle.value
  );
  const jobsByCompany = datas[0].find(
    (data) => data.company === filterByTitle.value
  );
  console.log(jobsByCompany);


  for (const data of datas[0]) {
    if (data === jobsByTitle ?? data === jobsByCompany)
      containerJobs.textContent = " ";
  };
  renderCountry(jobsByTitle);
  renderCountry(jobsByCompany);
  /*
  datas[0].find(function (data) {
    data === jobsByCompany ?? data === jobsByCompany;
    containerJobs.textContent = " ";
  });*/
};
searchBtn.addEventListener("click", createFilter);