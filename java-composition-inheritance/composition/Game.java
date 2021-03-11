package composition;

import player.Player;

import java.util.Collections;
import java.util.List;

public class Game {

  private final PlayerCreator playerCreator;
  private List<Player> players;

  public Game(PlayerCreator playerCreator) {
    this.playerCreator = playerCreator;
  }

  public void start() {
    this.createPlayers();
    System.out.println("Starting");
  }

  protected void play() {
    System.out.println("Playing");
    System.out.println("....");
    System.out.println("End");
  }

  private void createPlayers() {
    this.players = playerCreator.create();
  };
}

interface PlayerCreator {
  List<Player> create();
}

public class AutomaticCreator implements PlayerCreator {
  @Override
  public List<Player> create() {
    System.out.println("Creating players automatically");
    return Collections.emptyList();
  }
}

public class ManualCreator implements PlayerCreator {
  @Override
  public List<Player> create() {
    System.out.println("Automatically creating players");
    return Collections.emptyList();
  }
}
