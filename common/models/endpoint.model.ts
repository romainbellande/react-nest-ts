export class Endpoint {
  public readonly get: string
  public readonly getOne: string;
  public readonly param: string;
  public readonly id: string;

  constructor(singular: string, plural?: string) {
    this.get = plural || singular + 's';
    this.id = `${ singular }Id`;
    this.param = `:${ this.id }`;
    this.getOne = `${ this.get }/${ this.param }`
  }
}
