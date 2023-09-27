import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  public empListData = [
    {id:1,name:'nilesh',gender:'Male',address:'Mumbai'},
    {id:2,name:'dinesh',gender:'Male',address:'Delhi'},
    {id:3,name:'paresh',gender:'Male',address:'Pune'},
    {id:4,name:'kamlesh',gender:'Male',address:'Chennai'}
  ]

  constructor() { }
}
