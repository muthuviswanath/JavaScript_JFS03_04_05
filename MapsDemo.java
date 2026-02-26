import java.util.HashMap;

public class MapsDemo {
    public static void main(String[] args) {
        HashMap  hm = new HashMap<>();
        hm.put(true,"Boolean");
        hm.put(true,"Bool");
        System.out.println(hm.get(true));
    }
}
