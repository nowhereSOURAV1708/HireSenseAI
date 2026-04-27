import google.generativeai as genai
import os

genai.configure(api_key=os.getenv("AIzaSyCpbvEFdUp3yUGOMus-vQuUQ-ZOdloJpLY"))

for m in genai.list_models():
    print(m.name, "->", m.supported_generation_methods)
