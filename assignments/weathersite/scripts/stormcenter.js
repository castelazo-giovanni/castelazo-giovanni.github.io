function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


var theDate = document.querySelector('input[type="date"]');
        theDate.addEventListener('change', function() {
          console.log('blank date input:', theDate.value);
        });