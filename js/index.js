$(document).ready(function(){

	//create new array 'cities' and assign city strings
	var cities = ['NYC','SF','LA','ATX','SYD'];
	//use forEach to populate dropdown list with cities array
	cities.forEach(function(city){
		$('#city-type').append('<option>' + city + '</option>');
	});

	//anonymous function that triggers when the dropdown is changed
	$('#city-type').change(function(){
		//creating variable and assigning it to value of dropdown
		var selectedCity = $('#city-type').val();

		//if-else conditionals to change the background to corresponding city based on dropdown value
		if (selectedCity == 'NYC'){
			$('body').css('background-image', 'url(images/nyc.jpg');
		}
		else if (selectedCity == 'SF'){
			$('body').css('background-image', 'url(images/sf.jpg');
		}
		else if (selectedCity == 'LA'){
			$('body').css('background-image', 'url(images/la.jpg');
		}
		else if (selectedCity == 'ATX'){
			$('body').css('background-image', 'url(images/austin.jpg');
		}
		else if (selectedCity == 'SYD'){
			$('body').css('background-image', 'url(images/sydney.jpg');
		}
		else{
			$('body').css('background-image', 'url(images/citipix_skyline.jpg');
		}
		//print the var selectedCity to console for debugging
		console.log('Selected City = ' + selectedCity);

	});

/* attempt to change background without conditionals

	$('#city-type').change(function(){
		//create var selectedCity and set it equal to the value of the dropdown
		var selectedCity = $(this).val();
		//print the var selectedCity to console for debugging
		console.log('Selected City = ' + selectedCity);

		$('option').attr('class', selectedCity);
	});
*/

});
