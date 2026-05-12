import PyPDF2
import sys

def check_pdf(path):
    try:
        with open(path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            text = reader.pages[0].extract_text()
            print(f"--- {path} ---")
            print(text[:200])
    except Exception as e:
        print(f"Error reading {path}: {e}")

check_pdf(r"C:\Users\gadda\Downloads\aksh.pdf")
check_pdf(r"C:\Users\gadda\Downloads\resume.in.pdf")
check_pdf(r"C:\Users\gadda\Downloads\akshaya 4.pdf")
check_pdf(r"C:\Users\gadda\Downloads\download.aksh.pdf")
