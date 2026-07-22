import cv2
import numpy as np
import sys
import glob

def find_head(filename):
    img = cv2.imread(filename)
    if img is None: return
    # bg color from top-left pixel
    bg_color = img[0, 0]
    
    # find where difference from bg is > 20
    diff = np.abs(img.astype(int) - bg_color.astype(int))
    mask = np.sum(diff, axis=2) > 60
    
    # get top-most row with mask=True
    rows = np.any(mask, axis=1)
    if not np.any(rows):
        print(f"{filename}: empty")
        return
    top = np.argmax(rows)
    height = img.shape[0]
    print(f"{filename}: head starts at {top} ({(top/height)*100:.1f}%) of height {height}")

for f in glob.glob("public/team/*.jpg"):
    if "_new" not in f and "_padded" not in f:
        find_head(f)
