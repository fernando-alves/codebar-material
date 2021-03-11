import composition.AutomaticCreator;
import composition.Game;
import composition.ManualCreator;
import inheritance.AutomaticGame;
import inheritance.ManualGame;

public class Main {
  public static void main(String[] args) {
    new AutomaticGame();
    new Game(new AutomaticCreator());

    new ManualGame();
    new Game(new ManualCreator());
  }
}
