import subprocess
import glob
import os

def process_image(filepath, outpath):
    # get dimensions
    try:
        out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    except Exception as e:
        print(f"Skipping {filepath} due to identify error: {e}")
        return
        
    w, h = map(int, out.strip().split('x'))
    
    # get top-left color
    try:
        color_out = subprocess.check_output(["convert", filepath, "-crop", "1x1+0+0", "-format", "%[hex:u.p{0,0}]", "info:"]).decode('utf-8').strip()
    except Exception as e:
        color_out = "FFFFFF"
        
    color = f"#{color_out}"
    
    # We want subject to fill 75-80% of frame height (let's say 80%)
    # Let's define new_h = h / 0.8
    # Headroom = 10% of new_h (0.1 * new_h)
    
    new_h = int(h / 0.8)
    new_w = new_h # 1:1 aspect ratio
        
    off_x = (new_w - w) // 2
    off_y = int(new_h * 0.1) # 10% from the top
    
    # if it goes past the bottom, we might need to adjust.
    if off_y + h > new_h:
        new_h = off_y + h
        new_w = new_h # keep 1:1
        off_x = (new_w - w) // 2
        off_y = int(new_h * 0.1)
    
    cmd = [
        "convert",
        "-size", f"{new_w}x{new_h}",
        f"canvas:{color}",
        filepath,
        "-geometry", f"+{off_x}+{off_y}",
        "-composite",
        outpath
    ]
    subprocess.run(cmd, check=True)
    print(f"Processed {filepath} -> {outpath} ({new_w}x{new_h})")

names = ['divine', 'jean_bosco', 'kevin', 'richard', 'iris', 'bridget', 'marie_chantal', 'bonaventure', 'teferi', 'harrison']
for name in names:
    # First try png then jpg
    if os.path.exists(f"public/team/{name}.png"):
        process_image(f"public/team/{name}.png", f"public/team/{name}_sq.jpg")
    elif os.path.exists(f"public/team/{name}.jpg"):
        process_image(f"public/team/{name}.jpg", f"public/team/{name}_sq.jpg")
    else:
        print(f"File for {name} not found.")
        
