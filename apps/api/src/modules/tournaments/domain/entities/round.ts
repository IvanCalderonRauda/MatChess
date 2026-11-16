import { RoundStatus } from '@matchess-app/contracts';

export class Round {
  constructor(
    public readonly id: number | null,
    public readonly tournamentId: number,
    public readonly roundNumber: number,
    public status: RoundStatus = RoundStatus.DRAFT,
    public publishedAt: Date | null = null,
  ) {}

  publish(): void {
    if (this.status !== RoundStatus.DRAFT) {
      throw new Error('Solo se puede publicar una ronda en borrador');
    }
    this.status = RoundStatus.PUBLISHED;
    this.publishedAt = new Date();
  }
}
