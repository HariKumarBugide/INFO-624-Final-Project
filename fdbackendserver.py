import ssl
from elasticsearch import Elasticsearch
from elasticsearch.connection import create_ssl_context
from flask import *
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
app.secret_key='N@twestkey1_2907!'
cors = CORS(app)
authenticated = False

context = create_ssl_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

es = Elasticsearch(
    ['tux-es1.cci.drexel.edu','tux-es2.cci.drexel.edu','tux-es3.cci.drexel.edu'],
    http_auth=('hkb44', 'oobaecha9eeK'),
    scheme="https",
    port=9200,
    ssl_context = context,
)



@app.route('/')
def home():
    return "welcome to finding doctor backend"



@app.route('/search', methods=['GET','POST'])
def search():
    k_state = request.args['k1']
    k_lst=k_state.split(" ")

    body = {
   "from" : 0, "size" : 10,
  "query": {"bool": {"should": [
    {"match": {
     "State":k_state
   }},
    {"match": {
     "City": k_state
   }},
   {"match_phrase_prefix": {
     "Primary_specialty": k_lst[0]
   }}]}
}
}
    res = es.search(index="hkb44_info624_201904_final_doc_data", body=body)

    if res['hits']['total']['value']==0:

        return False
    else:

        return jsonify(res['hits']['hits'])

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=True)