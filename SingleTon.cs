public class Singleton
{
    // Biến static chứa đối tượng Singleton.
    private static Singleton _instance;

    // Private constructor để ngăn chặn việc tạo đối tượng từ bên ngoài.
    private Singleton() { }

    // Phương thức static để truy cập đến đối tượng Singleton.
    public static Singleton GetInstance()
    {
        // Kiểm tra xem đối tượng Singleton đã được tạo chưa.
        if (_instance == null)
        {
            // Nếu chưa, tạo một đối tượng mới.
            _instance = new Singleton();
        }

        // Trả về đối tượng Singleton đã được tạo hoặc đã tồn tại.
        return _instance;
    }

    // Phương thức của Singleton để thực hiện một tác vụ nào đó.
    public void DoSomething()
    {
        Console.WriteLine("Đang thực hiện một tác vụ trong Singleton.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Lấy một thể hiện của Singleton.
        Singleton singleton = Singleton.GetInstance();

        // Gọi phương thức của Singleton.
        singleton.DoSomething();

        // Lấy một thể hiện khác của Singleton.
        Singleton anotherSingleton = Singleton.GetInstance();

        // So sánh hai thể hiện, chúng là cùng một thể hiện.
        if (singleton == anotherSingleton)
        {
            Console.WriteLine("Hai thể hiện là cùng một thể hiện của Singleton.");
        }
        else
        {
            Console.WriteLine("Hai thể hiện không giống nhau.");
        }

        Console.ReadLine();
    }
}
