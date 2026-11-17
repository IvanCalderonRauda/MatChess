import { RegistrationStatus } from '../enums/registration-status.enum';

export class Registration {
  constructor(
    public readonly id: string,
    public readonly tournamentId: string,
    public readonly playerId: string,
    public startingRank: number, 
    public status: RegistrationStatus = RegistrationStatus.ACTIVE,
  ) {}

  withdraw(): void {
    this.status = RegistrationStatus.WITHDRAWN;
  }
}
