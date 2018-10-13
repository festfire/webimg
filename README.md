# webimg
Web image recognition with YOLO

global installation:

apt-get install libsm6 libxrender1 libfontconfig1

pip3 install opencv-python opencv-contrib-python numpy bottle pillow cython tensorflow

git clone https://github.com/thtrieu/darkflow.git

cd darkflow/

python3 setup.py build_ext --inplace

pip3 install -e . 

weights for yolo: https://pjreddie.com/media/files/yolov2.weights

cfg: https://raw.githubusercontent.com/pjreddie/darknet/master/cfg/yolov2.cfg

API:

image upload - POST /uploadimg

image url - POST /urlimg

Sample output: 
{"results": [{"confidence": "0.84632134", "bottomright": {"x": 929, "y": 693}, "label": "person", "topleft": {"x": 516, "y": 272}}, {"confidence": "0.49170035", "bottomright": {"x": 440, "y": 372}, "label": "car", "topleft": {"x": 50, "y": 179}}, {"confidence": "0.476661", "bottomright": {"x": 859, "y": 765}, "label": "car", "topleft": {"x": 22, "y": 190}}, {"confidence": "0.37287682", "bottomright": {"x": 1238, "y": 959}, "label": "car", "topleft": {"x": 145, "y": 498}}], "time": 1.1828856468200684}
