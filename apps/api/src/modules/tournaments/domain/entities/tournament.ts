import { TiebreakCode, TournamentStatus, TournamentSystem } from '@matchess-app/contracts';

export interface TournamentProps {
  name: string;
  system: TournamentSystem;
  id: number | null;
  federationId: number;
  location: string | null;
  timeControlTypeId: number;
  startDate: Date;
  endDate: Date;
  totalRounds: number;
  status?: TournamentStatus;
  tiebreaks?: TiebreakCode[];
}

export class Tournament {
  readonly id: number | null;
  name: string;
  system: TournamentSystem;
  federationId: number;
  location: string | null;
  timeControlTypeId: number;
  startDate: Date;
  endDate: Date;
  totalRounds: number;
  status: TournamentStatus;
  tiebreaks: TiebreakCode[];

  constructor(props: TournamentProps) {
    if (props.name.trim().length === 0) {
      throw new Error('El torneo necesita un nombre');
    }
    if (!Number.isInteger(props.totalRounds) || props.totalRounds < 1) {
      throw new Error('El número de rondas debe ser un entero mayor o igual a 1');
    }
    if (props.endDate < props.startDate) {
      throw new Error('La fecha de fin no puede ser anterior a la de inicio');
    }

    this.id = props.id;
    this.name = props.name;
    this.system = props.system;
    this.federationId = props.federationId;
    this.location = props.location;
    this.timeControlTypeId = props.timeControlTypeId;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.totalRounds = props.totalRounds;
    this.status = props.status ?? TournamentStatus.DRAFT;
    this.tiebreaks = props.tiebreaks ?? [];
  }

  start(): void {
    if (this.status !== TournamentStatus.DRAFT) {
      throw new Error('Solo se puede iniciar un torneo en borrador');
    }
    this.status = TournamentStatus.IN_PROGRESS;
  }
}
