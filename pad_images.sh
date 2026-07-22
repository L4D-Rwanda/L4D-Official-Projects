#!/bin/bash
for file in public/team/*.jpg; do
  if [[ "$file" != *"_padded"* ]]; then
    filename=$(basename "$file")
    name="${filename%.*}"
    
    # Get dimensions
    dims=$(identify -format "%wx%h" "$file")
    width=$(echo $dims | cut -d'x' -f1)
    height=$(echo $dims | cut -d'x' -f2)
    
    # Calculate new dimensions (+40%)
    new_w=$(awk "BEGIN {print int($width * 1.4)}")
    new_h=$(awk "BEGIN {print int($height * 1.4)}")
    
    # Calculate offsets
    off_x=$(awk "BEGIN {print int(($new_w - $width) / 2)}")
    off_y=$(awk "BEGIN {print int(($new_h - $height) / 2)}")
    
    echo "Processing $file: $width x $height -> $new_w x $new_h, offset: $off_x, $off_y"
    
    convert "$file" -set option:distort:viewport "${new_w}x${new_h}-${off_x}-${off_y}" -virtual-pixel Edge -filter point -distort SRT 0 "public/team/${name}_padded.jpg"
  fi
done
