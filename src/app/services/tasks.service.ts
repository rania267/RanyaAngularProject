import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskScheduler } from '../class/task-scheduler';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:6062/api'; 

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<TaskScheduler[]> {
    return this.http.get<TaskScheduler[]>(`${this.apiUrl}/tasks`); 
  }}