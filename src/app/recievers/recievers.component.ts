import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  cin: string;
  age: number;
  date: string;
  nombre_enfants: number;
  etat_civil: string;
  bourse: string;
  score: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"},
  {id:1,firstName:"yousri",lastName:"naouali",email:"yousri@gmail.com",gender:"Male",cin:"52631482",age:23,date:"2023/06/02 22:02:00",nombre_enfants:0,etat_civil:"celibataire",bourse:"Bourse détude",score:1,type:"prosthèse pied"}

];

@Component({
  selector: 'app-recievers',
  templateUrl: './recievers.component.html',
  styleUrls: ['./recievers.component.css']
})
export class RecieversComponent implements OnInit {
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.id}`,
    },
    {
      columnDef: 'firstName',
      header: 'First Name',
      cell: (element: PeriodicElement) => `${element.firstName}`,
    },
    {
      columnDef: 'lastName',
      header: 'Last Name',
      cell: (element: PeriodicElement) => `${element.lastName}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: PeriodicElement) => `${element.email}`,
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: PeriodicElement) => `${element.gender}`,
    },
    {
      columnDef: 'cin',
      header: 'Cin',
      cell: (element: PeriodicElement) => `${element.cin}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: PeriodicElement) => `${element.age}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: PeriodicElement) => `${element.date}`,
    },
    {
      columnDef: 'nombre_enfants',
      header: 'Nombre enfants',
      cell: (element: PeriodicElement) => `${element.nombre_enfants}`,
    },
    {
      columnDef: 'etat_civil',
      header: 'Etat civil',
      cell: (element: PeriodicElement) => `${element.etat_civil}`,
    },
    {
      columnDef: 'bourse',
      header: 'Bourse',
      cell: (element: PeriodicElement) => `${element.bourse}`,
    },
    {
      columnDef: 'score',
      header: 'Score',
      cell: (element: PeriodicElement) => `${element.score}`,
    },
    {
      columnDef: 'type',
      header: 'Type',
      cell: (element: PeriodicElement) => `${element.type}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
  constructor() { }

  ngOnInit(): void {
  }

}
