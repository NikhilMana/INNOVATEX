import fitz
import os
import glob

# Define PDF paths and output directories
magazines = [
    {"pdf": "public/magazines/cosmic-1.pdf", "out_dir": "public/magazines/cosmic-1"},
    {"pdf": "public/magazines/cosmic-2.pdf", "out_dir": "public/magazines/cosmic-2"},
    {"pdf": "public/magazines/cosmic-3.pdf", "out_dir": "public/magazines/cosmic-3"}
]

for mag in magazines:
    pdf_path = mag["pdf"]
    out_dir = mag["out_dir"]
    
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    print(f"Extracting pages from {pdf_path} to {out_dir}...")
    
    doc = fitz.open(pdf_path)
    
    # We will use high resolution (dpi=200) for good quality flipbook
    zoom_x = 2.0  
    zoom_y = 2.0  
    mat = fitz.Matrix(zoom_x, zoom_y)
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        pix = page.get_pixmap(matrix=mat)
        
        # Save as high-quality JPEG
        img_path = os.path.join(out_dir, f"page_{page_num + 1:03d}.jpeg")
        pix.save(img_path)
        
    print(f"Extracted {len(doc)} pages for {out_dir}")
