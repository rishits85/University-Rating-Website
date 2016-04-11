//create lightbox for sign in and sign up
var $overlay = $('<div id="overlay"></div>');
              
              
//capture the click event on link to image
  $(".topcorner a").click(function(event){
  event.preventDefault()
  //get data stored in the data-action attribute
  var action = $(this).attr('data-action');
  $overlay.load(action);

//create OVERLAY
$("body").append($overlay);
    
 //display overlay
$overlay.show()});
//add form to overlay


////hide overlay on clicking cross button
$('.cross').click(function(){
  $overlay.hide();
});

//hide overlay with esc button
 $(document).keyup(function(e) {
        if(e.keyCode == 27 && $("#overlay").css("display") != "none" ) { 
            event.preventDefault();
            $("#overlay").hide();
        }
    });
// using plugin to add suggestions and search box to the select box
$(function(){
    $(".college").select2();
  $(".region").select2();
   $(".job").select2();
  $(".tftextinput").select2();
});





//
////filter content according to the selected option on a select box on a page
// //Get the value of the option selectd in region box
//   var $selectedRegion = $('#region');
//
// // fire function when region value changed
// $selectedRegion.change(function(){
//      
//   //cycle through each element of college and get its value
// $('select#college').find('option').each(function() {
//
//   //Get the value of the option selectd in college box
//    var $item = $(this).val();
//   
//   //check if the value of college and region is same. If not hide the college name
//   if($selectedRegion.val() !== $item ) {
//      $(this).wrap('<span>').hide();
//   }
//    });
//   });
//
//


//open change profile photo dialogue box
    function changePicture() {
        //open the open file dialog
        document.getElementById('upload').click();
        var link = document.getElementById('upload').url;
        //change picture
        var img = document.getElementById("image");
        img.src = link;
    }





// Script to filter content according to the selected option on a select box on a page

$(document).ready(function() {

    $('#catagory').on("change", function() {
        var cattype = $(this).val();
        optionswitch(cattype);
    });

});

function optionswitch(myfilter) {
    //Populate the optionstore first time when nothing is selected
    if ($('#optionstore').text() == "") {
        //get value,text, and class of each option
        $('option[class^="sub-"]').each(function() {
            var optvalue = $(this).val();
            var optclass = $(this).prop('class');
            var opttext = $(this).text();
          //add the obtained values to span
            optionlist = $('#optionstore').text() + "@%" + optvalue + "@%" + optclass + "@%" + opttext;
            $('#optionstore').text(optionlist);
        });
    }
    //delete everything
    $('option[class^="sub-"]').remove();
  
    // put the filtered stuff back
    populateoption = rewriteoption(myfilter);
    $('#fileType').html(populateoption);
}

function rewriteoption(myfilter) {
    //rewrite only the filtered stuff back into the option
    var options = $('#optionstore').text().split('@%');
    var resultgood = false;
    var myfilterclass = "sub-" + myfilter;
    var optionlisting = "";
    
    myfilterclass = (myfilter != "")?myfilterclass:"all";
    //first variable is always the value, second is always the class, third is always the text
    for (var i = 3; i < options.length; i = i + 3) {
        if (options[i - 1] == myfilterclass || myfilterclass == "all") {
            optionlisting = optionlisting + '<option value="' + options[i - 2] + '" class="sub-' + options[i - 1] + '">' + options[i] + '</option>';
            resultgood = true;
        }
    }
    if (resultgood) {
        return optionlisting;
    }
}

//check if compulsory select boxes selected 

$continueButton = $('.continue-btn');
$continueButton.click( function(event){
  if($('.college').val() === 'select-one' ){
  event.preventDefault();
 $alertEmptyCollege = $('<h4 class="alert"></h4>');
  $alertEmptyCollege.text('Enter Your College');
  $('.imp-data-clg').append($alertEmptyCollege);}
  


if($('.job').val() === 'select-one'){
  event.preventDefault();
 $alertEmptyCollege = $('<h4 class="alert"></h4>');
  $alertEmptyCollege.text('Enter Your Status');
  $('.imp-data-status').append($alertEmptyCollege);
}  
});







