import pdfplumber
import sys, os

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

def extract_images_from_pdf(filename, prefix):
    print(f"Extracting images from {filename}...")
    try:
        with pdfplumber.open(filename) as pdf:
            print(f"Pages: {len(pdf.pages)}")
            for i, page in enumerate(pdf.pages):
                outname = f"{prefix}_page{i+1}.png"
                try:
                    im = page.to_image(resolution=100)
                    im.save(outname, format="PNG")
                    print(f"Saved page {i+1} as {outname}")
                except Exception as e:
                    print(f"  Failed page {i+1}: {e}")
    except Exception as e:
        print(f"Failed: {e}")

extract_images_from_pdf("BOAT CLUB-1(2).pdf", "public/assets/images/floorplan")
