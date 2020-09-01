In order to run the search engine in your local host please follow below steps.

For Windows

Please make sure your system has node.js installed if not please download install it form below link.

https://nodejs.org/en/download/

Pleae make sure you have python installed in your machine if not please download and install it from below link.
https://www.python.org/downloads/

Now open command prompt and navigate to the project folder in your system.

To run backend server run below commands.

python -m pip install -U pip

pip install -r requirements.txt

set FLASK_APP=fdbackendserver

flask run

To run front end react app open command prompt in another terminal navigate to the project folder and run below commands.

npm install

npm start


For MAC OS

Please make sure your system has node.js installed if not please download install install it form below link.
https://nodejs.org/en/download/

Pleae make sure you have python installed in your machine if not please download and install it from below link.
https://www.python.org/downloads/release/python-385/

Now open terminal and navigate to the project folder in your system.

To run backend server run below commands.

pip install -U pip

pip install -r requirements.txt

export FLASK_APP=fdbackendserver

flask run

To run front end react app open command prompt in another terminal navigate to the project folder and run below commands.

npm install

npm start

Note: Your backend server will run on port 5000 and front server will run on port 3000 by default.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




  