'use strict';

//function that gets the dog images from the Dog API
function getDogImg() {
  const numPics = $('input[name=numPics]').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numPics}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson, numPics))
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Opps! Something went wrong, please try again later.'));
}

//function that displays the dog images
function displayImages(responseJson, numPics) {
  $('.img-placeholder').empty();
  var i
  for (i = 0; i < numPics; i++) {
    $('.img-placeholder').last().append(`<ul><img src=${responseJson.message[i]} alt=image${i}></ul>`);
  };
  //display results
  $('.results').removeClass('hidden');
  return responseJson;
};


function watchForm() {
  $('form').submit(event => {
    //so page doesn't reload
    event.preventDefault();
    getDogImg();
  });
}

//Function for when the app loads on the page
$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});