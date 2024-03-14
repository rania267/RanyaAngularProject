import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent  {
   kpiLimitsData = [
    { kpiLimit: 'Limit 1', anotherColumn: 'Value 1', yetAnotherColumn: 'Data 1' },
    { kpiLimit: 'Limit 2', anotherColumn: 'Value 2', yetAnotherColumn: 'Data 2' },
  ];

  kpiLimitsColumns: string[] = ['kpiLimit', 'anotherColumn', 'yetAnotherColumn'];

  kpiData = [
    { date: '2022-01-01', queryCode: 'Q1', kpiName: 'KPI 1', valueDB1: 10, valueDB2: 12, gap: 2, gapPercentage: 20, recordsDB1: 100, recordsDB2: 120, recordsOK: 90 },
    { date: '2022-01-02', queryCode: 'Q2', kpiName: 'KPI 2', valueDB1: 15, valueDB2: 18, gap: 3, gapPercentage: 20, recordsDB1: 120, recordsDB2: 150, recordsOK: 110 },
  ];

  kpiDataColumns: string[] = ['date', 'queryCode', 'kpiName', 'valueDB1', 'valueDB2', 'gap', 'gapPercentage', 'recordsDB1', 'recordsDB2', 'recordsOK'];

  showKpiLimitsColumns = true;
  showKpiDataColumns = true;

  toggleKpiLimitsColumns() {
    this.showKpiLimitsColumns = !this.showKpiLimitsColumns;
  }
  consultationData: any[];  
  showConsultationColumns: boolean;
  toggleKpiDataColumns() {
    this.showKpiDataColumns = !this.showKpiDataColumns;
  }
}