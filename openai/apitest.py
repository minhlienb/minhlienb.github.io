import openai

# Set your OpenAI API Key
API_KEY = "sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop"
openai.api_key = API_KEY

def test_openai_api():
    try:
        # Call the latest OpenAI API (using new method)
        response = openai.completions.create(
            model="gpt-3.5-turbo",  # or "gpt-4"
            prompt="Hãy cho tôi biết cách học lập trình hiệu quả.",
            max_tokens=150,
            temperature=0.7
        )
        # Print the result
        print("Kết quả trả về từ API:")
        print(response['choices'][0]['text'])
    except Exception as e:
        print("Có lỗi xảy ra:")
        print(e)

# Run the test function
if __name__ == "__main__":
    test_openai_api()
