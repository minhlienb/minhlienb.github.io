using System;

// Interface định nghĩa phương thức MakeCoffee để tạo cà phê.
public interface ICoffee
{
    string MakeCoffee();
}

// Lớp cơ sở, cung cấp cà phê đơn giản.
public class SimpleCoffee : ICoffee
{
    public string MakeCoffee()
    {
        return "Cà phê đơn giản";
    }
}

// Decorator để thêm sữa vào cà phê.
public class MilkDecorator : ICoffee
{
    private readonly ICoffee _coffee;

    public MilkDecorator(ICoffee coffee)
    {
        _coffee = coffee;
    }

    public string MakeCoffee()
    {
        // Thêm chức năng của Decorator vào kết quả của cà phê gốc.
        return _coffee.MakeCoffee() + ", Thêm sữa";
    }
}

// Decorator để thêm đường vào cà phê.
public class SugarDecorator : ICoffee
{
    private readonly ICoffee _coffee;

    public SugarDecorator(ICoffee coffee)
    {
        _coffee = coffee;
    }

    public string MakeCoffee()
    {
        // Thêm chức năng của Decorator vào kết quả của cà phê gốc.
        return _coffee.MakeCoffee() + ", Thêm đường";
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Tạo một cốc cà phê đơn giản.
        ICoffee coffee = new SimpleCoffee();
        Console.WriteLine(coffee.MakeCoffee());

        // Thêm sữa vào cà phê.
        ICoffee milkCoffee = new MilkDecorator(coffee);
        Console.WriteLine(milkCoffee.MakeCoffee());

        // Thêm đường vào cà phê.
        ICoffee sugarCoffee = new SugarDecorator(coffee);
        Console.WriteLine(sugarCoffee.MakeCoffee());

        // Thêm cả sữa và đường vào cà phê.
        ICoffee milkSugarCoffee = new MilkDecorator(new SugarDecorator(coffee));
        Console.WriteLine(milkSugarCoffee.MakeCoffee());

        Console.ReadLine();
    }
}
