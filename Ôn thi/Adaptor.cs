public class RoundHole // Lớp định nghĩa lỗ tròn
{
    public RoundHole(double radius) // Constructor với tham số bán kính
    {
        Radius = radius; // Gán bán kính của lỗ tròn
    }

    private double Radius { get; } // Thuộc tính bán kính (chỉ đọc)

    public bool Fits(RoundPeg peg) // Phương thức kiểm tra xem viên gạch tròn có vừa với lỗ tròn không
    {
        return Radius >= peg.Radius; // Trả về true nếu bán kính của viên gạch tròn nhỏ hơn hoặc bằng bán kính của lỗ tròn
    }
}

public class RoundPeg // Lớp định nghĩa viên gạch tròn
{
    public RoundPeg(double radius) // Constructor với tham số bán kính
    {
        Radius = radius; // Gán bán kính của viên gạch tròn
    }

    public double Radius { get; } // Thuộc tính bán kính (chỉ đọc)
}

public class Program // Lớp chương trình chính
{
    static void Main() // Phương thức chính
    {
        var hole = new RoundHole(5); // Tạo một lỗ tròn với bán kính là 5
        var rpeg = new RoundPeg(5); // Tạo một viên gạch tròn với bán kính là 5
        if (hole.Fits(rpeg)) // Kiểm tra xem viên gạch tròn có vừa với lỗ tròn không
        {
            Console.WriteLine("Round peg r5 fits round hole r5."); // In ra thông điệp nếu vừa
        }
    }
}

// TODO: integrate SquarePegs into the existing program using the Adapter pattern
public class SquarePeg // Lớp định nghĩa viên gạch vuông
{

}

public class SquarePegAdapter : RoundPeg // Lớp Adapter chuyển đổi viên gạch vuông thành viên gạch tròn
{

}

public class SquarePeg // Lớp định nghĩa viên gạch vuông
{
    public SquarePeg(double width) // Constructor với tham số chiều rộng
    {
        Width = width; // Gán chiều rộng của viên gạch vuông
    }

    public double Width { get; } // Thuộc tính chiều rộng (chỉ đọc)
}

public class SquarePegAdapter : RoundPeg // Lớp Adapter chuyển đổi viên gạch vuông thành viên gạch tròn
{
    private readonly SquarePeg squarePeg; // Biến lưu trữ viên gạch vuông

    public SquarePegAdapter(SquarePeg squarePeg) // Constructor với tham số là viên gạch vuông
    {
        this.squarePeg = squarePeg; // Gán giá trị viên gạch vuông
    }

    public override double Radius // Ghi đè phương thức Radius của lớp RoundPeg
    {
        get
        {
            // Tính toán và trả về bán kính tương ứng với chiều rộng của viên gạch vuông
            return Math.Sqrt(Math.Pow(squarePeg.Width / 2, 2) * 2);
        }
    }
}


chatgpt
clear