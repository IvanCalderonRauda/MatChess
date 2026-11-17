import { Round } from "../domain/entities/round";

export abstract class RoundRepository {
  abstract save(round: Round): Promise<void>;
  abstract findByTournament(tournamentId: string): Promise<Round[]>;
  abstract findByTournamentAndNumber(
    tournamentId: string,
    number: number,
  ): Promise<Round | null>;
}
