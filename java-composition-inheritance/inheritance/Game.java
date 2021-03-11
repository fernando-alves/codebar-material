package inheritance;

import player.Player;

import java.util.Collections;
import java.util.List;

public abstract class Game {
  protected List<Player> players;

  public void start() {
    this.createPlayers();
    System.out.println("Starting");
  }

  protected void play() {
    System.out.println("Playing");
    System.out.println("....");
    System.out.println("End");
  }

  protected abstract void createPlayers();
}

public class AutomaticGame extends Game {
  @Override
  protected void createPlayers() {
    System.out.println("Automatically creating players");
    this.players = Collections.emptyList();
  }
}

public class ManualGame extends Game {
  @Override
  public void createPlayers() {
    System.out.println("Manually creating players");
    this.players = Collections.emptyList();
  }
}
