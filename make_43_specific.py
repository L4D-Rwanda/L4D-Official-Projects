import subprocess
import glob
import os

def process_image(filepath, outpath, is_landscape=False):
    out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    w, h = map(int, out.strip().split('x'))
    
    color_out = subprocess.check_output(["convert", filepath, "-crop", "1x1+0+0", "-format", "%[hex:u.p{0,0}]", "info:"]).decode('utf-8').strip()
    color = f"#{color_out}"

    new_h = int(h / 0.8)
    
    if is_landscape:
        new_w = int(new_h * 4 / 3)
    else:
        new_w = int(new_h * 3 / 4)
        
    off_x = (new_w - w) // 2
    off_y = int(new_h * 0.1) # 10% from the top
    
    if off_y + h > new_h:
        new_h = off_y + h
        if is_landscape:
            new_w = int(new_h * 4 / 3)
        else:
            new_w = int(new_h * 3 / 4)
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

for name in ['iris', 'bridget']:
    process_image(f"public/team/{name}.jpg", f"public/team/{name}_43.jpg", is_landscape=True)

