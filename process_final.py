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
    
    # 75-80% of frame -> let's say 80%.
    # Headroom -> 10%
    new_h = int(h / 0.8)
    
    # 3:4 portrait
    new_w = int(new_h * 3 / 4)
    off_y = int(new_h * 0.1)
    off_x = (new_w - w) // 2
    
    # If the original image is tall and goes past bottom
    if off_y + h > new_h:
        new_h = off_y + h
        new_w = int(new_h * 3 / 4)
        off_x = (new_w - w) // 2
        off_y = int(new_h * 0.1)
        
    cmd_34 = [
        "convert",
        "-size", f"{new_w}x{new_h}",
        f"canvas:{color}",
        filepath,
        "-geometry", f"+{off_x}+{off_y}",
        "-composite",
        outpath.replace(".jpg", "_34.jpg")
    ]
    subprocess.run(cmd_34, check=True)
    
    # 4:3 landscape
    new_w_43 = int(new_h * 4 / 3)
    off_x_43 = (new_w_43 - w) // 2
    cmd_43 = [
        "convert",
        "-size", f"{new_w_43}x{new_h}",
        f"canvas:{color}",
        filepath,
        "-geometry", f"+{off_x_43}+{off_y}",
        "-composite",
        outpath.replace(".jpg", "_43.jpg")
    ]
    subprocess.run(cmd_43, check=True)

    print(f"Processed {filepath}")

for f in glob.glob("public/team/*.png"):
    name = os.path.basename(f).split('.')[0]
    process_image(f, f"public/team/{name}_gen.jpg")

