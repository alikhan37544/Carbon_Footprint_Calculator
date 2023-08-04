$(document).ready(function() {
    $('#carbon-form').on('submit', function(e) {
        e.preventDefault();
        var selectedActivity = $('#activity').val();
        if (selectedActivity === "") {
            alert('Please select an activity.');
            return;
        }

        // Show the appropriate section and hide the previous section
        $('#' + selectedActivity + '-container').show();
        $('#form-container').hide();
    });

    $('.back-button').on('click', function() {
        // Get the data-previous-section attribute value
        var previousSection = $(this).data('previous-section');
        // Show the previous section and hide the current section
        $('#' + previousSection).show();
        $(this).closest('.use-case').hide();
    });

    $('.next-button').on('click', function() {
        // Get the data-next-section attribute value
        var nextSection = $(this).data('next-section');
        // Show the next section and hide the current section
        $('#' + nextSection).show();
        $(this).closest('.use-case').hide();
    });

    // Handling form submissions
    $('#food-form, #energy-form, #travel-form, #services-form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var activity = form.attr('id').split('-')[0];
        var energy_used = parseFloat(form.find('input[type="number"]').val());

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
        form.closest('.use-case').hide();
        $('#result-container').show();
    });

    $('#go-back-button').on('click', function() {
        // Show the form container and hide the result container
        $('.form-container').show();
        $('#result-container').hide();

        // Reset the form inputs
        $('#food-form, #energy-form, #travel-form, #services-form')[0].reset();
    });

    $('#add-more-button').on('click', function() {
        // Show the form container and hide the result container
        $('.form-container').show();
        $('#result-container').hide();

        // Reset the form inputs
        $('#food-form, #energy-form, #travel-form, #services-form')[0].reset();

        // Hide additional use cases
        $('#food-container, #energy-container, #travel-container, #services-container').hide();
    });
});

// Dummy function to simulate fetching the carbon emission factor
function getCarbonEmissionFactor(activity) {
    // ... Your emission factor lookup code ...
}
