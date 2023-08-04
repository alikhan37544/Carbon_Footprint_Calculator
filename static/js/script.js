$(document).ready(function() {
    $('#carbon-form').on('submit', function(e) {
        e.preventDefault();

        // Get form data
        var activity = $('#activity').val();
        var energy_used = parseFloat($('#energy_used').val());
        var distance_travelled = parseFloat($('#distance_travelled').val()); // Multiplier for travel
        var service_usage = parseFloat($('#service_usage').val()); // Multiplier for services

        // Validate the input
        if (isNaN(energy_used) || energy_used <= 0) {
            alert('Please enter a valid energy usage value.');
            return;
        }

        // Apply temporary multipliers (if available)
        if (activity === 'travel' && !isNaN(distance_travelled)) {
            energy_used *= distance_travelled;
        } else if (activity === 'services' && !isNaN(service_usage)) {
            energy_used *= service_usage;
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

        // Hide additional use cases
        $('#additional-use-cases').slideUp();
    });

    $('#add-more-button').on('click', function() {
        // Show the form container and hide the result container
        $('#form-container').show();
        $('#result-container').hide();

        // Reset the form inputs
        $('#carbon-form')[0].reset();

        // Hide additional use cases
        $('#additional-use-cases').slideUp();
    });

    // Show/hide additional use cases based on selected activity
    $('#activity').on('change', function() {
        var selectedActivity = $(this).val();
        if (selectedActivity === 'travel' || selectedActivity === 'services') {
            $('#additional-use-cases').slideDown();
        } else {
            $('#additional-use-cases').slideUp();
        }
    });
});

// Dummy function to simulate fetching the carbon emission factor
function getCarbonEmissionFactor(activity) {
    // ... Your emission factor lookup code ...
}
