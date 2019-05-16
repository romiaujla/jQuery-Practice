//Called when the page loads
$(function(){

    $('button').on("click", function(event){
        
        //prevents from automatically submitting the form 
        //which avoids the page being refreshed
        event.preventDefault();
        
        //clearing the .js-results div so everytime submit is clicked 
        //any previous values disappear
        $('.js-results').text("");

        //check for positive number
        const val = $('#number-choice').val();
        
        //if the number entered is less than or equal to 0
        //it will display an error, set the focus to the input and
        //empty the value of the input box
        if(val <= 0){
            $('.error').removeClass('hidden');
            $('#number-choice').val("");
            $('#number-choice').focus();
        }else{
            //hide the error message
            $('.error').addClass('hidden');

            for(let i = 1; i <= val;i++){

                //if not divisible by either 3 or 5 
                //display the number, in this case value of i
                if(i % 3 !== 0 && i % 5 !== 0){
                    $('.js-results').append(
                        `<div class="fizz-buzz-item">
                        <span>${i}</span>
                      </div>`
                    );
                }
                //if divisible by 3 only display fizz
                else if(i%3 === 0 && i%5 !== 0){
                    $('.js-results').append(
                        `<div class="fizz-buzz-item fizz">
                        <span>fizz</span>
                      </div>`
                    );
                }
                //if divisible by 5 only display buzz
                else if(i%3 !== 0 && i%5 === 0){
                    $('.js-results').append(
                        `<div class="fizz-buzz-item buzz">
                        <span>buzz</span>
                      </div>`
                    );
                }
                //if divisible by both 3 and 5 display fizzbuzz
                else if(i%3 === 0 && i%5 === 0){
                    $('.js-results').append(
                        `<div class="fizz-buzz-item fizzbuzz">
                        <span>fizzbuzz</span>
                      </div>`
                    );
                }
            }
        }
    });

})