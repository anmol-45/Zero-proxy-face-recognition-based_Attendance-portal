from flask import Flask, request, jsonify
from geopy.distance import geodesic

app = Flask(__name__)

# Dummy data for demonstration
teacher_location = (37.7749, -122.4194)  # (latitude, longitude)
radius = 1.5  # in kilometers

@app.route('/check_proximity', methods=['POST'])
def check_proximity():
    data = request.get_json()
    
    # Assuming data format: {"student_location": [latitude, longitude]}
    student_location = tuple(data.get("student_location", []))
    
    if not student_location:
        return jsonify({"error": "Student location not provided"}), 400

    distance = geodesic(teacher_location, student_location).kilometers

    result = {"proximity": distance <= radius}
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)