import subprocess
import glob
import os

def process_image(filepath, outpath, is_landscape=False):
    out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    w, h = map(int, out.strip().split('x'))
    
    color_out = subprocess.check_output(["convert", filepath, "-crop", "1x1+0+0", "-format", "%[hex:u.p{0,0}]", "info:"]).decode('utf-8').strip()
    color = f"#{color_out}"

    # We want subject to fill 75-80% of frame height (let's say 80%)
    # Let's define new_h = h / 0.8
    # Headroom = 10% of new_h (0.1 * new_h)
    
    # Wait, the current subject has some head room, but it's very tight. Let's assume the top of the image IS the top of the head.
    # Therefore, we need to add 10% of new_h at the top.
    
    new_h = int(h / 0.8)
    
    if is_landscape:
        new_w = int(new_h * 4 / 3)
    else:
        new_w = int(new_h * 3 / 4)
        
    off_x = (new_w - w) // 2
    off_y = int(new_h * 0.1) # 10% from the top
    
    # if it goes past the bottom, we might need to adjust.
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

for f in glob.glob("public/team/*.jpg"):
    if "_new" not in f and "_padded" not in f and "_final" not in f and "_43" not in f and "test" not in f and "_34" not in f:
        name = os.path.basename(f).split('.')[0]
        # Generate 4:3 (Landscape) as requested
        process_image(f, f"public/team/{name}_43.jpg", is_landscape=True)
        # Generate 3:4 (Portrait) just in case
        process_image(f, f"public/team/{name}_34.jpg", is_landscape=False)
