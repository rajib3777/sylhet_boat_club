import pdfplumber

def try_open_ai(filename):
    print(f"Trying to open {filename} as PDF...")
    try:
        with pdfplumber.open(filename) as pdf:
            print(f"Success! Number of pages: {len(pdf.pages)}")
            # Let's extract any text or paths
            page = pdf.pages[0]
            print("Extracted text:", page.extract_text())
            # Let's see if we can export pages as images
            try:
                im = page.to_image(resolution=150)
                im.save(filename.replace(".ai", ".png"), format="PNG")
                print(f"Saved image as {filename.replace('.ai', '.png')}")
            except Exception as eImage:
                print(f"Failed to export image: {eImage}")
    except Exception as e:
        print(f"Failed to open {filename} as PDF: {e}")

try_open_ai("Sylhet Boat Club Ltd-Logo.ai")
try_open_ai("Sylhet Boat Club Ltd-Logo (1).ai")
