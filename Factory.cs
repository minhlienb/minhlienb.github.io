using System;

// Product: Interface chung cho tất cả các đối tượng sản phẩm.
public interface IFood
{
    void Prepare();
    void Serve();
}

// ConcreteProduct: Lớp cụ thể của sản phẩm - Burger.
public class Burger : IFood
{
    public void Prepare()
    {
        Console.WriteLine("Chuẩn bị burger...");
    }

    public void Serve()
    {
        Console.WriteLine("Phục vụ burger!");
    }
}

// ConcreteProduct: Lớp cụ thể của sản phẩm - Pizza.
public class Pizza : IFood
{
    public void Prepare()
    {
        Console.WriteLine("Chuẩn bị pizza...");
    }

    public void Serve()
    {
        Console.WriteLine("Phục vụ pizza!");
    }
}

// Creator: Interface hoặc lớp cơ sở chung cho Factory Method.
public abstract class FoodFactory
{
    // Factory Method: Tạo đối tượng sản phẩm.
    public abstract IFood CreateFood();
}

// ConcreteCreator: Lớp cụ thể của Creator - Factory Burger.
public class BurgerFactory : FoodFactory
{
    // Factory Method để tạo burger.
    public override IFood CreateFood()
    {
        return new Burger();
    }
}

// ConcreteCreator: Lớp cụ thể của Creator - Factory Pizza.
public class PizzaFactory : FoodFactory
{
    // Factory Method để tạo pizza.
    public override IFood CreateFood()
    {
        return new Pizza();
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Sử dụng Factory Burger để tạo burger.
        FoodFactory burgerFactory = new BurgerFactory();
        IFood burger = burgerFactory.CreateFood();
        burger.Prepare();
        burger.Serve();

        // Sử dụng Factory Pizza để tạo pizza.
        FoodFactory pizzaFactory = new PizzaFactory();
        IFood pizza = pizzaFactory.CreateFood();
        pizza.Prepare();
        pizza.Serve();

        Console.ReadLine();
    }
}
