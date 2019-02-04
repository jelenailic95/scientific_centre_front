export class Journal {

  constructor(public id?: number,
              public issnNumber?: string,
              public name?: string,
              public openAccess?: string,
              public price?: number,
              public period?: number,
  ) {
  }
}
