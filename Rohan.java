public class Rohan{
    int a = 10;
    Rohan(){
        System.out.println(a);
        int a = 34;
        System.out.println(a);
    } 
    public static void main(String[] args) {
        Rohan r = new Rohan();
    }
}