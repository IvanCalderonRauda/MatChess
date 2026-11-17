// pairing-engine.ts
import { Color } from '../domain/enums/color.enum';


export interface PlayerStanding {
  registrationId: string;
  startingRank: number;
  points: number;
  opponents: string[];
  colorHistory: Color[];
  hadBye: boolean;
}


export interface GeneratedPairing {
  board: number;
  whiteRegistrationId: string;
  blackRegistrationId: string | null;
}

export interface PairingEngineInput {
  players: PlayerStanding[];
  roundNumber: number;
}

export abstract class PairingEngine {
  abstract generate(input: PairingEngineInput): GeneratedPairing[];
}
