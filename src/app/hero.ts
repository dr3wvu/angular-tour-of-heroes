export interface Hero {
  id: number;
  name: string;
}

export class HeroForm {
  constructor(
    public id: number,
    public name: string,
    public power: string, 
    public alterEgo?: string
  ) {}
}

export interface Battery {
  id: number,
  battryNum: string,
  in: string,
  out: string
}

export interface Device {
  id: number,
  Device: string,
  in: string,
  out: string
}
