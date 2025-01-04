import os
from PIL import Image

def convert_to_webp(input_folder):
    """
    Convert all image files in the specified folder to WebP format.

    Args:
        input_folder (str): The path to the folder containing image files.
    """
    # Supported formats by Pillow
    supported_formats = ["jpeg", "jpg", "png", "bmp", "tiff", "gif"]

    # Ensure the output folder exists
    output_folder = os.path.join(input_folder, "converted_webp")
    os.makedirs(output_folder, exist_ok=True)

    for file_name in os.listdir(input_folder):
        file_path = os.path.join(input_folder, file_name)

        # Skip if it's a folder
        if os.path.isdir(file_path):
            continue

        # Check file extension
        ext = file_name.split(".")[-1].lower()
        if ext in supported_formats:
            try:
                with Image.open(file_path) as img:
                    # Convert and save as WebP
                    webp_file_name = f"{os.path.splitext(file_name)[0]}.webp"
                    webp_file_path = os.path.join(output_folder, webp_file_name)
                    img.save(webp_file_path, format="WEBP")
                    print(f"Converted: {file_name} -> {webp_file_name}")
            except Exception as e:
                print(f"Failed to convert {file_name}: {e}")

if __name__ == "__main__":
    input_folder = input("Enter the path to the folder: ").strip()
    if os.path.isdir(input_folder):
        convert_to_webp(input_folder)
    else:
        print("Invalid folder path. Please try again.")
