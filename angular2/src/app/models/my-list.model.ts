import { IWithIdentity } from './identity.model';

export class MyList<T extends IWithIdentity> {
  // best option - use Map
  values: T[];

  constructor(initialData?: T[]) {
    this.values = initialData || [];
  }

  public add(data: T): void {
    if (!this.values.find((item) => item.id === data.id)) {
      this.values.push(data);
    }
  }
  public findById(id: number): T | null {
    return this.values.find((item) => item.id === id) || null;
  }
}
