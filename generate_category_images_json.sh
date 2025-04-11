#!/bin/bash

# Base wedding directory
BASE_DIR="/Users/martinsmolik/CascadeProjects/personal-website/public/weddings/marcela-david-2024"

# Categories
CATEGORIES=("ceremony" "dance" "details" "evening" "portraits" "reception")

# Function to generate images.json for a category
generate_category_images_json() {
    local category=$1
    local category_dir="${BASE_DIR}/${category}"
    local json_file="${category_dir}/images.json"
    
    # Find all image files
    local image_files=($(find "${category_dir}" -maxdepth 1 \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) -exec basename {} \;))
    
    # Create JSON file
    echo "[" > "${json_file}"
    
    # Add image entries
    for ((i=0; i<${#image_files[@]}; i++)); do
        echo "  {\"filename\": \"${image_files[i]}\"}" >> "${json_file}"
        
        # Add comma if not last item
        if [ $i -lt $((${#image_files[@]}-1)) ]; then
            echo "," >> "${json_file}"
        fi
    done
    
    echo "]" >> "${json_file}"
    
    echo "Generated images.json for ${category} with ${#image_files[@]} images"
}

# Generate JSON for each category
for category in "${CATEGORIES[@]}"; do
    generate_category_images_json "$category"
done

echo "Completed generating image JSON files for all categories."
