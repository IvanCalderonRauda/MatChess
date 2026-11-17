import { GameResult } from '@matchess-app/contracts';

export class Pair {
  constructor(
    public readonly id: number | null,
    public readonly tournamentId: number,
    public readonly roundId: number,
    public boardNumber: number,
    public whitePlayerId: number,          // en un bye, el jugador va aquí
    public blackPlayerId: number | null,   // null = bye
    public result: GameResult = GameResult.PENDING,
  ) {
    if (blackPlayerId === null) {
      this.result = GameResult.BYE;
    }
    if (blackPlayerId === whitePlayerId) {
      throw new Error('Un jugador no puede jugar contra sí mismo');
    }
  }

  get isBye(): boolean {
    return this.blackPlayerId === null;
  }

  recordResult(result: GameResult): void {
    if (this.isBye) {
      throw new Error('No se puede cambiar el resultado de un bye');
    }
    this.result = result;
  }
}
