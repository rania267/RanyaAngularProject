import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { Requete } from '../class/requete';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  queries: Requete[] = []; 

  constructor(private requeteService: RequeteService) { }
  dataSource: Requete[] = []; // Assuming dataSource is of type Requete[]
  displayedColumns: string[] = ['id', 'code_requete', 'date', 'val_kpi', 'val_kpi_alias']; // Add other columns as needed
  searchText: string = '';
  ngOnInit(): void {
    this.requeteService.getListRequetes().subscribe(data => {
      this.queries = data;
    });
  }
}