from bottle import route, run
from bottle import get, post, request, response, redirect # or route
from bottle import static_file
import requests
import json
import socket
import fcntl
import struct
from io import BytesIO
import PIL.Image
import numpy as np
import time
import cv2
from darkflow.net.build import TFNet

serv_addr = '10.142.0.4'
options = {"model": "/home/festfire/darkflow/cfg/yolo.cfg", "load": "/home/festfire/darkflow/bin/yolov2.weights", "threshold": 0.3, "gpu": 1.0}
tfnet = TFNet(options)

def magic(img_file):
    start_time = time.time()
    img = PIL.Image.open(img_file)
    img = np.array(img)
    print(img)
    img = img[:,:,::-1] # RGB to BGR
    results = tfnet.return_predict(img)
    print(results)
    results = [{'label': x['label'], 'confidence': str(x['confidence']), 'topleft': x['topleft'], 'bottomright': x['bottomright'] } for x in results]
    elapsed_time = time.time() - start_time
    print(elapsed_time)
    json_results = json.dumps({'results': results, 'time': elapsed_time})
    return json_results

def get_ip_address(ifname):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    return socket.inet_ntoa(fcntl.ioctl(
        s.fileno(),
        0x8915,  # SIOCGIFADDR
        struct.pack('256s', ifname[:15])
    )[20:24])

# Static Routes
@get('/<filename:re:.*\.js>')
def javascripts(filename):
    return static_file(filename, root='http/js')

@get('/<filename:re:.*\.css>')
def stylesheets(filename):
    return static_file(filename, root='http/css')

@get('/<filename:re:.*\.(jpg|png|gif|ico)>')
def images(filename):
    return static_file(filename, root='http/img')

@get('/<filename:re:.*\.html>')
def files(filename):
    return static_file(filename, root='http')

@route('/')
def root():
    redirect('/index.html')

@route('/uploadimg', method='POST')
def do_upload_img():
    upload = request.files.get('upload')
    return magic(BytesIO(upload.file.read()))

@route('/urlimg', method='POST')
def do_url_img():
    url = request.forms.get('url')
    print(url)
    r = requests.get(url)
    return magic(BytesIO(r.content))

run(host=serv_addr, port=80, debug=True)
