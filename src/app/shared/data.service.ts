import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDetails() {
    // Promise constructor accepts a callback function with two arguments
    // It is a Promis of type string
    const resultPromise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });

    return resultPromise;
  }
}
