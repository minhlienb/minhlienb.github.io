using System.Security.Cryptography.X509Certificates;

class Program
{
    static void Main(string[] args) 
    {
        IAnimation myAnim = new SimpleAnimation();
         myAnim.Action();
        IAnimation myAnim2 = new RotateDecorator(myAnim);
         myAnim2.Action();
        IAnimation myAnim3 = new FlipDecorator(myAnim2);
        myAnim3.Action();
    }
}

public interface IAnimation
{
    bool Action();
}


public class SimpleAnimation : IAnimation
{
   public bool Action()
    {
        Console.WriteLine("Animation Initiated!");
        return true;
    }
}   

public class RotateDecorator : IAnimation
{
    public readonly IAnimation _anim;
    public RotateDecorator(IAnimation anim)
    {
        _anim = anim;
    }
    public bool Action()
    {
        Console.WriteLine("Rotated!");
        return _anim.Action() && true;
    }
}

public class FlipDecorator : IAnimation
{
    public readonly IAnimation _anim;
    public FlipDecorator(IAnimation anim)
    {
        _anim = anim;
    }
    public bool Action()
    {
        Console.WriteLine("Flipped!");
        return _anim.Action() && true;
    }
}