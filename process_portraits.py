import subprocess
import glob
import os

def outpaint_image(filepath, outpath):
    # get dimensions
    out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    w, h = map(int, out.strip().split('x'))
    
    # Target 3:4 aspect ratio for portraits
    new_h = int(h / 0.8) # Subject fills 80% height
    new_w = int(new_h * 3 / 4) # 3:4 aspect ratio
    
    # Center horizontally
    off_x = (new_w - w) // 2
    
    # 8-10% headroom
    off_y = int(new_h * 0.09)
    
    # if it goes past the bottom
    if off_y + h > new_h:
        new_h = off_y + h
        new_w = int(new_h * 3 / 4)
        off_x = (new_w - w) // 2
        off_y = int(new_h * 0.09)

    # Use virtual-pixel Edge and blur to create a seamless extended background, 
    # or just use the exact color. 
    # Let's extract the top left, top right, and average them or just use virtual-pixel Edge.
    cmd = [
        "convert",
        filepath,
        "-set", "option:distort:viewport", f"{new_w}x{new_h}-{off_x}-{off_y}",
        "-virtual-pixel", "Edge",
        "-filter", "point",
        "-distort", "SRT", "0",
        outpath
    ]
    subprocess.run(cmd, check=True)
    print(f"Processed {filepath} -> {outpath}")

names = ['divine', 'jean_bosco', 'kevin', 'richard', 'iris', 'bridget']
for name in names:
    in_file = f"public/team/{name}.jpg"
    out_file = f"public/team/{name}_final.jpg"
    if os.path.exists(in_file):
        outpaint_image(in_file, out_file)

