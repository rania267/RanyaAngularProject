import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TaskScheduler } from '../../class/task-scheduler';
import { TasksService } from '../../services/tasks.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<TaskScheduler>;
  displayedColumns: string[] = ['scheduleName', 'triggerType', 'creationDate', 'endScheduler'];

  tasks: TaskScheduler[] = [];
  searchText: string = '';

  constructor(private taskService: TasksService) {
    this.dataSource = new MatTableDataSource(this.tasks);

    this.dataSource.filterPredicate = (data, filter) => {
      return data.scheduleName.toLowerCase().includes(filter);
    };
  }

  ngOnInit(): void {
    this.loadTasks();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  filterTasks(): void {
    if (this.searchText && this.searchText.trim() !== '') {
      const filterValue = this.searchText.toLowerCase().trim();

      this.dataSource.data = this.tasks.filter(tasks =>
        tasks.scheduleName.toLowerCase().includes(filterValue)
      );
    } else {
      this.dataSource.data = [...this.tasks];
    }
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      data => {
        this.tasks = data;
        this.dataSource.data = this.tasks;
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;

      },
      error => console.error('Error loading tasks:', error)
    );
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
}
