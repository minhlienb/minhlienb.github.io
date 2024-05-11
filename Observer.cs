using System;
using System.Collections.Generic;

// Subject: Giao diện định nghĩa các phương thức cho việc đăng ký, hủy đăng ký và thông báo cho các Observer.
public interface ISubject
{
    void Register(IObserver observer);
    void Unregister(IObserver observer);
    void NotifyObservers(string message);
}

// Observer: Giao diện định nghĩa phương thức để cập nhật thông báo từ Subject.
public interface IObserver
{
    void Update(string message);
}

// ConcreteSubject: Lớp cụ thể của Subject, lưu trữ danh sách các Observer và thông báo đến chúng.
public class NotificationSystem : ISubject
{
    private readonly List<IObserver> _observers = new();

    public void Register(IObserver observer)
    {
        _observers.Add(observer);
    }

    public void Unregister(IObserver observer)
    {
        _observers.Remove(observer);
    }

    public void NotifyObservers(string message)
    {
        foreach (var observer in _observers)
        {
            observer.Update(message);
        }
    }
}

// ConcreteObserver: Lớp cụ thể của Observer, nhận thông báo từ Subject và thực hiện hành động cụ thể.
public class User : IObserver
{
    private readonly string _name;

    public User(string name)
    {
        _name = name;
    }

    public void Update(string message)
    {
        Console.WriteLine($"{_name} nhận thông báo: {message}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Tạo một hệ thống thông báo.
        NotificationSystem notificationSystem = new NotificationSystem();

        // Tạo các người dùng và đăng ký chúng vào hệ thống thông báo.
        User user1 = new User("Alice");
        User user2 = new User("Bob");

        notificationSystem.Register(user1);
        notificationSystem.Register(user2);

        // Gửi thông báo đến tất cả các người dùng đã đăng ký.
        notificationSystem.NotifyObservers("Chào mừng đến với hệ thống thông báo!");

        // Người dùng 1 hủy đăng ký và không nhận được thông báo.
        notificationSystem.Unregister(user1);

        // Gửi thông báo mới chỉ đến người dùng 2.
        notificationSystem.NotifyObservers("Thông báo mới!");

        Console.ReadLine();
    }
}
