// const API_URL = "https://starwars.egghead.training/";
// const output = document.getElementById("output");
// output.innerText = "Loading.....";

// const responsePromise = fetch(API_URL + "-films");
// responsePromise
//     .then(response => { return response.json() })
//     .then(films => {
//         const filmDetails = films
//             .sort((a, b) => a.episode_id - b.episode_id)
//             .map((film) => `${film.episode_id}-${film.title}`)
//             .join('\n');
//         output.innerText = filmDetails;

//     }).catch((err) => {
//         console.warn(err);
//     });



// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('inside first');
//         resolve('first');
//     }, 3000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('inside second');
//         resolve('second');
//     }, 4000);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('inside third');
//         resolve('third');
//     }, 1000);
// });

// promise1.then((x) => {
//     console.log('waiting inside 1st with value =>' + x);
//     return promise2
// }).then((y) => {
//     console.log('waiting inside 2nd with value =>' + y);
//     return promise3;
// }).then((z) => {
//     console.log('waiting inside 3rd with value =>' + z);
// });


const countryOption = document.getElementById('countries');
const regionOption = document.getElementById('regions');

const API_KEY = '04d9c4fc3a8e9be5b06528478efee433';
let countries = '<option value="default">Select Country</option>';
let regions = '<option value="default">Select Region</option>';

countryOption.addEventListener('change', (event) => {
    fetch(`http://battuta.medunes.net/api/region/${event.target.value}/all/?key=${API_KEY}`)
        .then((response) => {
            regionOption.innerHTML = `<option value='LOADING'>...LOADING</option>`;
            return response.json();
        })
        .then((regions) => {
            console.log(regions);
            regions.forEach((r) => {
                regions = regions + `<option value='${r.country}'>${r.region}</option>`;
            });
            regionOption.innerHTML = regions;
        });
});

fetch(`http://battuta.medunes.net/api/country/all/?key=${API_KEY}`)
    .then((response) => {
        countryOption.innerHTML = `<option value='LOADING'>...LOADING</option>`;
        return response.json();
    })
    .then((vals) => {
        // console.log(vals);
        vals.forEach((country) => {
            countries = countries + `<option value='${country.code}'>${country.name}</option>`;
        });
        countryOption.innerHTML = countries;
    });