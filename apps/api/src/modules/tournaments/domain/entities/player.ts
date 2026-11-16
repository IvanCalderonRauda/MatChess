export interface PlayerProps {
  id: number | null;
  userId?: number | null;
  federationId: number;
  fideId?: string | null;
  firstName: string;
  lastName: string;
  club?: string | null;
  city?: string | null;
  fideRating?: number | null;
  nationalRating?: number | null;
  birthDate?: Date | null;
  gender?: string | null;
  isActive?: boolean;
}

export class Player {
  readonly id: number | null;
  userId: number | null;
  federationId: number;
  fideId: string | null;
  firstName: string;
  lastName: string;
  club: string | null;
  city: string | null;
  fideRating: number | null;
  nationalRating: number | null;
  birthDate: Date | null;
  gender: string | null;
  isActive: boolean;

  constructor(props: PlayerProps) {
    if (props.firstName.trim().length === 0 || props.lastName.trim().length === 0) {
      throw new Error('El jugador necesita nombre y apellido');
    }
    this.id = props.id;
    this.userId = props.userId ?? null;
    this.federationId = props.federationId;
    this.fideId = props.fideId ?? null;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.club = props.club ?? null;
    this.city = props.city ?? null;
    this.fideRating = props.fideRating ?? null;
    this.nationalRating = props.nationalRating ?? null;
    this.birthDate = props.birthDate ?? null;
    this.gender = props.gender ?? null;
    this.isActive = props.isActive ?? true;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
