import { Player } from '../domain/entities/player';

export abstract class PlayerRepository {
  abstract findById(id: number): Promise<Player | null>;
  abstract save(player: Player): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
