import pdfplumber
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

def dump_pdf(filename, output_txt):
    print(f"Dumping {filename} to {output_txt}...")
    try:
        with pdfplumber.open(filename) as pdf:
            with open(output_txt, "w", encoding="utf-8") as f:
                for i, page in enumerate(pdf.pages):
                    text = page.extract_text() or ""
                    f.write(f"=== PAGE {i+1} ===\n")
                    f.write(text)
                    f.write("\n\n")
        print(f"Successfully dumped {filename}")
    except Exception as e:
        print(f"Error dumping {filename}: {e}")

dump_pdf("Sylhet_BOAT_CLUB_Final.pdf", "sylhet_final_text.txt")
dump_pdf("Untitled document.pdf", "untitled_text.txt")
dump_pdf("BOAT CLUB-1(2).pdf", "boat_club_1_text.txt")
