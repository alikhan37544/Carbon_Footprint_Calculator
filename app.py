from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    user="root",
    password="admin",
    database="CarbonCalc"
)

cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    # Get form data
    activity = request.form['activity']
    energy_used = float(request.form['energy_used'])
    # Add other input fields as needed

    # Calculate carbon footprint based on activity and energy_used
    # Get Emission function is still missing, to be built
    carbon_emission_factor = get_carbon_emission_factor(activity)  
    carbon_footprint = energy_used * carbon_emission_factor

    # Store data in the MySQL database
    
    query = "INSERT INTO carbon_footprints (activity, energy_used, carbon_footprint) VALUES (%s, %s, %s)"
    data = (activity, energy_used, carbon_footprint)
    cursor.execute(query, data)
    db.commit()

    return "Success"  # Return a success message or redirect to a result page

if __name__ == '__main__':
    app.run(debug=True)
