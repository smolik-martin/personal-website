#!/bin/bash

# Base directory
BASE_DIR="/Users/martinsmolik/CascadeProjects/personal-website/public/weddings/marcela-david-2024"

# Categories
CATEGORIES=("preparation" "ceremony" "portraits" "reception" "details" "dance" "evening")

# Function to generate images.json
generate_images_json() {
    local category=$1
    local json_file="${BASE_DIR}/${category}/images.json"
    
    # Generate a sample JSON with 5 image entries
    echo "[" > "$json_file"
    for i in {1..5}; do
        echo "  {\"filename\": \"image${i}.jpg\"}" >> "$json_file"
        if [ $i -lt 5 ]; then
            echo "," >> "$json_file"
        fi
    done
    echo "]" >> "$json_file"
}

# Generate images.json for each category
for category in "${CATEGORIES[@]}"; do
    generate_images_json "$category"
done

echo "Wedding data generated successfully!"
