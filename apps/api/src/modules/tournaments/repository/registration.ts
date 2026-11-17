import {Registration} from '../domain/entities/registration';

export abstract class RegistrationRepository {
  abstract save(registration: Registration): Promise<void>;
  abstract findByTournament(tournamentId: string): Promise<Registration[]>;
  abstract countByTournament(tournamentId: string): Promise<number>;
  abstract delete(id: number): Promise<void>;
}
