from PIL import Image
import os

def reduce_webp_size(input_folder, output_folder, quality=80):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Iterate over all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith('.webp'):
            input_file_path = os.path.join(input_folder, filename)
            output_file_path = os.path.join(output_folder, filename)
            try:
                # Open the image
                with Image.open(input_file_path) as img:
                    # Save the image with reduced quality to the output folder
                    img.save(output_file_path, 'WEBP', quality=quality)
                    print(f"Reduced size and saved {filename} to {output_folder}")
            except Exception as e:
                print(f"Could not process {filename}: {e}")

if __name__ == "__main__":
    input_folder = input("Enter the folder path containing .webp images: ")
    output_folder = input("Enter the output folder path for compressed images: ")
    quality = int(input("Enter the quality for compression (0-100): "))
    reduce_webp_size(input_folder, output_folder, quality)
