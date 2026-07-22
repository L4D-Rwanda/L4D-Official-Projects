import subprocess
import glob
import os

def process_image(filepath, outpath):
    # Get dimensions
    out = subprocess.check_output(["identify", "-format", "%wx%h", filepath]).decode('utf-8')
    w, h = map(int, out.strip().split('x'))
    
    # Get background color from top-left pixel
    color_out = subprocess.check_output(["convert", filepath, "-crop", "1x1+0+0", "-format", "%[hex:u.p{0,0}]", "info:"]).decode('utf-8').strip()
    color = f"#{color_out}"

    # Target: 4:3 aspect ratio (landscape) or 3:4 (portrait)? 
    # Usually headshots are 3:4, but if user explicitly asks for 4:3, we can provide 4:3.
    # "Aspect ratio: 4:3". We'll do 4:3 width:height = 4:3.
    # Wait, let's look at the instructions: "Keep the head centered with only a small amount of space above it (about 8-10% of the image height)."
    
    # We want subject to occupy 75-80% of the frame.
    # The subject's current head is at some Y coordinate. Let's find it.
    # Instead of complex CV, let's just use ImageMagick trim to find the bounding box.
    trim_info = subprocess.check_output(["convert", filepath, "-fuzz", "10%", "-trim", "info:"]).decode('utf-8')
    # trim_info has format like "divine.jpg PNG 1242x1254 1254x1254+12+0 8-bit sRGB..."
    # The format of info: is: name format widthxheight canvas_widthxcanvas_height+x_offset+y_offset
    parts = trim_info.split(' ')
    # Find the part with +x+y
    geom = [p for p in parts if '+' in p and 'x' in p][0] # e.g. 1254x1254+12+0 or 1242x1254 1254x1254+12+0?
    # Actually `awk "{print \$3, \$4}"` gave us: `1242x1254 1254x1254+12+0`
    
    # Let's just hardcode offsets to achieve 4:3 and the desired framing.
    # If the user means standard portrait, they might mean 3:4. Let's do 3:4 just in case, or 4:3. Let's just create a 4:3 image and if they meant 3:4 it's fine.
    # Actually, 4:3 is landscape. A portrait in 4:3 is very wide. 
    # Let's generate a 3:4 image since they said "professional team profile", and usually profiles are portrait. Or maybe they meant 4:3 (w:h).
    # I'll generate a 3:4 and a 4:3, and let's just use 3:4 for the UI (aspect-[3/4]) if that looks better.
    # "Aspect ratio: 4:3" -> I will make the images exactly 4:3 (width=4, height=3) or (width=3, height=4). I'll use 4:3.
    
    # Let's make new_w and new_h.
    # Let subject width be w_subj. w_subj is roughly w.
    new_h = int(h / 0.8) # Subject height occupies 80%?
    new_w = int(new_h * 4 / 3) # 4:3 aspect ratio
    
    # Check if 4:3 or 3:4
    # If 4:3, width is larger than height.
    # Let's assume they want width = 4, height = 3.
    
    # Headroom: 10% of new_h.
    # Current image has top offset. 
    # Let's just use the original width and add equal padding.
    
    # Let's just use the image's original height, add some top padding (10%), and some bottom padding, then set width to 4/3 of height.
    top_pad = int(h * 0.1)
    bottom_pad = int(h * 0.1)
    new_h_2 = h + top_pad + bottom_pad
    new_w_2 = int(new_h_2 * 4 / 3)
    
    off_x_2 = (new_w_2 - w) // 2
    off_y_2 = top_pad
    
    # If the user actually meant 3:4 (portrait):
    new_w_34 = int(w * 1.5)
    new_h_34 = int(new_w_34 * 4 / 3)
    off_x_34 = (new_w_34 - w) // 2
    off_y_34 = int(new_h_34 * 0.1) # 10% headroom
    
    # I will output the 4:3 one.
    cmd = [
        "convert",
        "-size", f"{new_w_2}x{new_h_2}",
        f"canvas:{color}",
        filepath,
        "-geometry", f"+{off_x_2}+{off_y_2}",
        "-composite",
        outpath
    ]
    subprocess.run(cmd, check=True)
    print(f"Processed {filepath} -> {outpath} ({new_w_2}x{new_h_2})")

for f in glob.glob("public/team/*.jpg"):
    if "_new" not in f and "_padded" not in f and "_final" not in f and "_43" not in f and "test" not in f:
        name = os.path.basename(f).split('.')[0]
        process_image(f, f"public/team/{name}_43.jpg")
