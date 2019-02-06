import {Journal} from './journal';

export class Paper {

  constructor(
    public id?: number,
    public title?: string,
    public keyWords?: string,
    public abstrect?: string,
    public journal?: Journal,
    public price?: number
  ) {
    this.journal = new Journal();
  };
}
