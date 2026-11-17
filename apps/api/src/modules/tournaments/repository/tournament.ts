import { Tournament } from '../domain/entities/tournament';

export abstract class TournamentRepository {
  abstract findById(id: number): Promise<Tournament | null>;
  abstract save(tournament: Tournament): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
