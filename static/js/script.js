$(document).ready(function() {
    $('#carbon-form').on('submit', function(e) {
        e.preventDefault();

        // Get form data
        var activity = $('#activity').val();
        var energy_used = parseFloat($('#energy_used').val());

        // Validate the input
        if (isNaN(energy_used) || energy_used <= 0) {
            alert('Please enter a valid energy usage value.');
            return;
        }

        // Calculate carbon footprint based on activity and energy_used
        var carbon_emission_factor = parseFloat(getCarbonEmissionFactor(activity));
        var carbon_footprint = energy_used * carbon_emission_factor;

        // Display the calculated carbon footprint
        $('#result-text').text('Your carbon footprint is: ' + carbon_footprint.toFixed(2) + ' kg CO2');

        // Show the result container and hide the form container
        $('#form-container').hide();
        $('#result-container').show();
    });

    $('#go-back-button').on('click', function() {
        // Show the form container and hide the result container
        $('#form-container').show();
        $('#result-container').hide();

        // Reset the form inputs
        $('#carbon-form')[0].reset();
    });

    $('#add-more-button').on('click', function() {
        // Show the form container and hide the result container
        $('#form-container').show();
        $('#result-container').hide();

        // Reset the form inputs
        $('#carbon-form')[0].reset();
    });
});

// Dummy function to simulate fetching the carbon emission factor
function getCarbonEmissionFactor(activity) {
    // ... Your emission factor lookup code ...
}
