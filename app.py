from flask import Flask, render_template
app = Flask(__name__)

@app.route('/index')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/obl')
def obl():
    return render_template('obl.html')
@app.route('/val')
def val():
    return render_template('val.html')
@app.route('/met')
def met():
    return render_template('met.html')


if __name__ == '__main__':
    app.run(debug=True)
