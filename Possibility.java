public class Possibility{
    public static void main(String[] args) {
        String s = null;
        String g = "Sharma";
        System.out.println(s+g);

        outer:
        for(int i=1; i<=3; i++){
            inner:
                for(int j=1; j<=3; j++){
                    if(i==2){
                        break outer;
                    }
                    System.out.println(""+ i + j);

                }
        }
    }
}