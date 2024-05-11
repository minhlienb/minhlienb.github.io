public class Singleton
{
    // Phương thức khởi tạo private để ngăn việc tạo đối tượng từ bên ngoài.
    private Singleton()
    {
        Console.WriteLine("Tạo đối tượng Singleton");
    }

    // Thuộc tính để lưu trữ ngày tạo đối tượng Singleton.
    private DateTime DateCreated { get; } = DateTime.Now;

    // Ghi đè phương thức ToString để hiển thị ngày tạo theo định dạng ISO 8601.
    public override string ToString()
    {
        return DateCreated.ToString("O");
    }

    // Biến static để lưu trữ đối tượng Singleton.
    private static Singleton _instance;

    // Đối tượng Lock để đảm bảo luồng.
    private static readonly object Lock = new();

    // Phương thức để lấy đối tượng Singleton.
    public static Singleton GetInstance()
    {
        // Kiểm tra đối tượng đã được khởi tạo chưa.
        if (_instance == null)
        {
            // Sử dụng double-checked locking để đảm bảo luồng và hiệu suất.
            lock (Lock)
            {
                // Kiểm tra lại trong khoảng lock để đảm bảo luồng.
                _instance ??= new Singleton();
            }
        }

        return _instance;
    }  
}



// Sử dụng - Usage
class Program
{
    static void Main(string[] args)
    {
        // Lấy đối tượng Singleton thông qua phương thức GetInstance().
        Singleton instance1 = Singleton.GetInstance();

        // In ra ngày tạo của đối tượng Singleton.
        Console.WriteLine("Đối tượng Singleton được tạo vào ngày: " + instance1);

        // Thử lấy lại đối tượng Singleton và kiểm tra xem có phải cùng một đối tượng không.
        Singleton instance2 = Singleton.GetInstance();

        // So sánh hai đối tượng Singleton.
        if (instance1 == instance2)
        {
            Console.WriteLine("Hai đối tượng Singleton là cùng một đối tượng.");
        }
        else
        {
            Console.WriteLine("Hai đối tượng Singleton không giống nhau.");
        }

        Console.ReadLine();
    }
}
