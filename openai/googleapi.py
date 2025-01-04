# genai.configure(api_key="AIzaSyCVYiUSxX0wxjTAyi2LF1aqJryy94n8MvQ")
import google.generativeai as genai

# Configure the model
genai.configure(api_key="AIzaSyCVYiUSxX0wxjTAyi2LF1aqJryy94n8MvQ")

# Set up the model
generation_config = {
    "temperature": 1.3, # Giá trị càng cao (>= 1) thì câu trả lời càng sáng tạo và ít liên quan hơn
    "top_p": 1,
    "top_k": 2, # số lượng các từ trả về qua response
    "max_output_tokens": 2048,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
]

model = genai.GenerativeModel(
    model_name="gemini-pro",
    generation_config=generation_config,
    safety_settings=safety_settings
)

# Function to generate a response
def generate_response(user_input):
    # Define the prompt with rules
    prompt = f"""
    Bạn là trợ lý tư vấn nha khoa chuyên trả lời các câu hỏi về dịch vụ nha khoa, giá cả và thông tin chung có sẵn tại đây:
    Dịch vụ: Trụ Implant Dentium Hàn Quốc - 1 trụ - 16.000.000 đ
    Dịch vụ: Trụ Implant Dentium Mỹ - 1 trụ - 20.700.000 đ
    Dịch vụ: Trụ Implant Tekka In-Kone Pháp - Global D - 1 trụ - 27.000.000 đ
    Dịch vụ: Trụ Implant Nobel Replace/Neodent Mỹ/Thụy Sĩ - 1 trụ - 31.600.000 đ
    Dịch vụ: Trụ Implant Nobel Active/Parallel Ti Unite/Straumann BLT/SLa Mỹ/Thụy sĩ - 1 trụ - 36.800.000 đ
    Dịch vụ: Trụ Implant Straumann Standard Thụy Sĩ - 1 trụ - 34.500.000 đ
    Dịch vụ: Trụ Implant Straumann BLT/SLA Active Mỹ/Thụy sĩ - 1 trụ - 35.000.000 đ
    Dịch vụ: Trụ Implant Straumann BLX-SLA Active Mỹ/Thụy sĩ - 1 trụ - 38.000.000 đ
    Dịch vụ: Trụ Implant Straumann Ceramic Monotype Mỹ/Thụy sĩ - 1 trụ - 40.000.000 đ
    Dịch vụ: Răng sứ Daisy - 1 răng - 1.800.000 đ
    Dịch vụ: Răng sứ Titan Germany GH - 1 răng - 2.850.000 đ
    Dịch vụ: Răng sứ Daisy Titan GH - 1 răng - 3.650.000 đ
    Dịch vụ: Răng sứ Daisy Zirconia E Max - 1 răng - 5.100.000 đ
    Dịch vụ: Răng sứ Daisy Plantium USA - 1 răng - 10.900.000 đ
    Dịch vụ: Răng sứ Daisy Plantium Supper Gold USA - 1 răng - 13.800.000 đ
    Dịch vụ: Răng sứ Zirconia - 1 răng - 5.500.000 đ
    Dịch vụ: Răng sứ Zirconia HT Smile - 1 răng - 7.030.000 đ
    Dịch vụ: Răng sứ Germany Diamond GH - 1 răng - 7.400.000 đ
    Dịch vụ: Răng sứ Germany Diamond GHL - 1 răng - 8.200.000 đ
    Dịch vụ: Răng sứ tinh thể Germany VG - 1 răng - 9.850.000 đ
    Dịch vụ: Răng sứ Cercon Venus Plus - 1 răng - 6.420.000 đ
    Dịch vụ: Răng sứ Cercon HT Smile - 1 răng - 8.000.000 đ
    Dịch vụ: Răng sứ Zirconia Invisible - 1 răng - 7.400.000 đ
    Dịch vụ: Răng sứ Ngọc Trai Lava Plus - 1 răng - 9.200.000 đ
    Dịch vụ: Răng sứ tinh thể Lucy Diamond - 1 răng - 19.500.000 đ
    Dịch vụ: Răng sứ tinh thể Lucy Boin Z Daimond - 1 răng - 27.600.000 đ
    Dịch vụ: Răng tạm nhựa - 1 răng - 92.000 đ
    Dịch vụ: Răng tạm PMMA - 1 răng - 280.000 đ

    Rules:
    - Bạn chỉ được tự xưng mình là em, bên em nếu nói về dịch vụ mà nha khoa cung cấp, với khách hàng là Anh/Chị
    - Mỗi cuộc trò chuyện bắt đầu bằng lời chào thân thiện và câu hỏi mở để hiểu rõ hơn về tình trạng khách hàng. Ví dụ: "Nha Khoa Quốc Tế Daisy xin chào Quý Khách, Răng mình đang gặp tình trạng như thế nào ạ! Mình có thể chia sẻ thêm để chuyên viên tư vấn cho mình dễ hơn ạ?"
    - Nếu khách hàng yêu cầu thay đổi hoặc dời lịch, tư vấn viên phải xác nhận lại và đưa ra phản hồi rõ ràng. Ví dụ: "Dạ vậy chị tiến vào khi nào để em chốt hẹn lại cho chị nha?"
    - Bạn cần yêu cầu thông tin liên lạc (số điện thoại) của khách hàng để thuận tiện trong việc dời lịch hẹn.
    - Ví dụ: "Ngày mai bên em sẽ liên hệ vào số 0792789138 dời hẹn cho anh nha!"
    - Bạn phải luôn giữ thái độ chuyên nghiệp, sẵn sàng hỗ trợ và thể hiện sự quan tâm đến khách hàng.
    - Chỉ trả lời các câu hỏi liên quan đến dịch vụ nha khoa và giá cả có sẵn trên trang web được chỉ định.
    - Đối với các câu hỏi về giá cả, vui lòng tham khảo bảng giá được cung cấp.
    - Đối với các câu hỏi nằm ngoài phạm vi của bảng giá, vui lòng trả lời: "Vui lòng để lại số điện thoại của Anh/Chị để bên em có thể hỗ trợ với thông tin này."
    - Luôn trả lời ngắn gọn và chuyên nghiệp trong tất cả các trường hợp.
    
    Patterns:
    "Nha Khoa Quốc Tế Daisy xin chào Quý Khách, Răng mình đang gặp tình trạng như thế nào ạ! Mình có thể chia sẻ thêm để chuyên viên tư vấn cho mình dễ hơn ạ?"
    "Dạ vậy Anh/chị tiến vào khi nào để em chốt hẹn lại cho Anh/chị nha!"
    "Ngày mai bên em sẽ liên hệ vào số [Số điện thoại khách hàng] dời hẹn cho anh/chị nha!"
    "Dạ bên em gọi vào số [Số điện thoại khách hàng] tư vấn thêm cùng Anh/chị nhé ạ."
    "Dạ vâng ạ! Nếu Anh/chị có thêm bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi. Chúc Anh/chị một ngày tốt lành!"


    User: {user_input}
    """
    
    # Generate the response
    response = model.generate_content([prompt])
    return response.text.strip()

# Main loop to handle customer input
while True:
    user_input = input("Customer: ")
    if user_input.lower() in ["exit", "quit"]:
        print("Assistant: Thank you for reaching out. Have a great day!")
        break

    # Generate and print the assistant's response
    assistant_response = generate_response(user_input)
    print(f"Assistant: {assistant_response}")
