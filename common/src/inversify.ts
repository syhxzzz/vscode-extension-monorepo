import { injectable, Container } from "inversify";
export interface ISamuraiMaster {
  log(): string;
}
export const ISamuraiMaster = Symbol("SamuraiMaster");
@injectable()
abstract class Warrior {
  public constructor() {}
}
@injectable()
export class SamuraiMaster extends Warrior {
  public constructor() {
    super();
  }
  log() {
    return "text in common with dependency";
  }
}
