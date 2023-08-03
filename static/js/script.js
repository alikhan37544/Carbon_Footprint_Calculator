// Assuming you have included jQuery in your HTML

$(document).ready(function() {
    $('form').on('submit', function(e) {
      e.preventDefault();
  
      // Get form data
      var activity = $('#activity').val();
      var energy_used = parseFloat($('#energy_used').val());
      // Add other input fields as needed
  
      // Validate the input (you can add more validation as per your requirements)
      if (isNaN(energy_used) || energy_used <= 0) {
        alert('Please enter a valid energy usage value.');
        return;
      }
  
      // Calculate carbon footprint based on activity and energy_used
      // You can use the same 'get_carbon_emission_factor()' function from the server-side code.
      // For this example, we'll assume the server has already provided the 'carbon_emission_factor' value.
      var carbon_emission_factor = parseFloat($('#carbon_emission_factor').val());
      var carbon_footprint = energy_used * carbon_emission_factor;
  
      // Display the calculated carbon footprint
      $('#result').text('Your carbon footprint is: ' + carbon_footprint.toFixed(2) + ' kg CO2');
  
      // You can send the calculated value to the server here for storing in the database
      // You can use an AJAX request to send the data to the server
  
      // Optional: You can clear the form fields after calculation if needed
      // $('form')[0].reset();
    });
  });
  