using System;
using System.Collections.Generic;

// Component: Giao diện chung cho tất cả các thành phần trong cây.
public interface IComponent
{
    void DisplayInfo();
}

// Leaf: Đại diện cho một học sinh.
public class Student : IComponent
{
    private readonly string _name;

    public Student(string name)
    {
        _name = name;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Học sinh: {_name}");
    }
}

// Composite: Đại diện cho một lớp học, có thể chứa các học sinh hoặc các lớp học con.
public class Classroom : IComponent
{
    private readonly List<IComponent> _children = new();

    public void Add(IComponent component)
    {
        _children.Add(component);
    }

    public void DisplayInfo()
    {
        foreach (var component in _children)
        {
            component.DisplayInfo();
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Tạo các học sinh
        var student1 = new Student("Alice");
        var student2 = new Student("Bob");
        var student3 = new Student("Charlie");

        // Tạo lớp học và thêm học sinh vào lớp
        var classA = new Classroom();
        classA.Add(student1);
        classA.Add(student2);

        // Tạo lớp học khác và thêm học sinh vào lớp
        var classB = new Classroom();
        classB.Add(student3);

        // Tạo lớp học tổng hợp và thêm các lớp học vào đó
        var allClasses = new Classroom();
        allClasses.Add(classA);
        allClasses.Add(classB);

        // Hiển thị thông tin về tất cả các lớp học và học sinh
        allClasses.DisplayInfo();

        Console.ReadLine();
    }
}
