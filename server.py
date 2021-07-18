from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index(file_data=None):
    if request.method == 'POST':
        return render_template('index.html', file_data=file_data)
    return render_template('index.html', file_data=file_data)

