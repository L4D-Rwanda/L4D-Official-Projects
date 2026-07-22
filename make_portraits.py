import subprocess
import glob
import os

def process_image(filepath, outpath):
    # get dimensions
    out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    w, h = map(int, out.strip().split('x'))
    
    # get top-left color
    color_out = subprocess.check_output(["convert", filepath, "-crop", "1x1+0+0", "-format", "%[hex:u.p{0,0}]", "info:"]).decode('utf-8').strip()
    color = f"#{color_out}"
    
    # We want a 4:5 aspect ratio. 
    # Let's say we want the person's original width to occupy 80% of the new width.
    new_w = int(w / 0.8)
    new_h = int(new_w * 1.25) # 4:5
    
    # Horizontal center
    off_x = (new_w - w) // 2
    
    # Vertical: we want the original image to have some margin at the top.
    # original image top might be touching the head. So we want a top margin of 10% of new_h.
    off_y = int(new_h * 0.08)
    
    # if the original image is tall and goes past the bottom, we might need to adjust new_h.
    # if off_y + h > new_h:
    # let's just make new_h = off_y + h, then recalculate new_w to be 4:5
    
    if off_y + h > new_h:
        new_h = off_y + h
        new_w = int(new_h * 0.8)
        off_x = (new_w - w) // 2
        
    # Create canvas and composite
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

for f in glob.glob("public/team/*.jpg"):
    if "_new" not in f and "_padded" not in f and "_final" not in f and "test" not in f:
        name = os.path.basename(f).split('.')[0]
        process_image(f, f"public/team/{name}_final.jpg")
