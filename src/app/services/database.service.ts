import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Database } from '../class/database';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { DatabaseInfo } from '../class/database-info';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:6062/createdb'; 
  private baseUrl = 'http://localhost:6062/api/databases';
  verifyMongoDBConnection(): Observable<string> {
    const apiUrl = `${this.baseUrl}/verify-mongodb-connection`;
    return this.http.get<string>(apiUrl);
  }
  addPostgresDatabase(database: Database): Observable<any> {
    // Implement your logic for adding a PostgreSQL database
    return this.http.post<any>(`${this.baseUrl}/addPostgresDatabase`, database);
  }
  restoreKpi(id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/kpis/restore/${id}`, {});
  }

  deletePermanently(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/kpis/permanent-delete/${id}`);
  }

  addMySQLDatabase(database: Database): Observable<any> {
    // Implement your logic for adding a MySQL database
    return this.http.post<any>(`${this.baseUrl}/addMySQLDatabase`, database);
  }
  moveToTrash(ids: number[]): Observable<void> {
    const url = `${this.baseUrl}/kpis/move-to-trash`; 
    return this.http.post<void>(url, { ids });
  }
  constructor(private http: HttpClient) {}
  addDatabasee(database: any): Observable<any> {
   return this.http.post(`${this.baseUrl}/add`, database);
  }
  verifyConnexion(database: Database): Observable<string> {
    const url = `${this.baseUrl}/verify-connexion`;
    return this.http.post<string>(url, database);
  }
 
testConnection(formData: any): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/testAndAddMySQLDatabase`, formData);
}
testAndAddMySQLDatabase(database: any): Observable<any> {

  return this.http.post(`${this.baseUrl}/testAndAddMySQLDatabase`, database);
}


testDatabaseConnection(databaseInfo: Database): Observable<string> {
  const url = `${this.baseUrl}/test-database-connection`;
  return this.http.post<string>(url, databaseInfo).pipe(
    catchError((error: HttpErrorResponse) => {
        console.error('Erreur lors du test de la connexion à la base de données:', error);
        console.error('Corps de la réponse d\'erreur:', error.error);
        return throwError('Erreur lors du test de la connexion à la base de données. Veuillez consulter les journaux pour plus de détails.');
    })
);

}
getMySQLDatabases(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/mysql-databases`);
}

getOracleDatabases(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/oracle-databases`);
}

getPostgresDatabases(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/postgres-databases`);
}
verifyPostgresConnection(): Observable<string> {
  return this.http.get(`${this.baseUrl}/postgres`, { responseType: 'text' });
}
verifyPostgresConnectionn(databaseId: number, options?: any): Observable<string> {
  const url = `${this.baseUrl}/verify-connection/${databaseId}`;
  
  return this.http.get(url, { ...options, responseType: 'arraybuffer' }).pipe(
    map(response => new TextDecoder('utf-8').decode(response))
  );
}

verifyMySQLConnection(): Observable<string> {
  return this.http.get(`${this.baseUrl}/mysql`, { responseType: 'text' });
}

verifyOracleConnection(): Observable<string> {
  return this.http.get(`${this.baseUrl}/oracle`, { responseType: 'text' });
}
verifyMongoDBConnectionn(databaseId: number): Observable<string> {
  const url = `${this.baseUrl}/verifyMongoConnection/${databaseId}`;
  return this.http.get<string>(url);
}

verifyMySQLConnectionn(databaseId: number, options?: any): Observable<string> {
  const url = `${this.baseUrl}/verifyConnection/${databaseId}`;
    return this.http.get(url, { ...options, responseType: 'arraybuffer' }).pipe(
    map(response => new TextDecoder('utf-8').decode(response))
  );
}
verifyOracleConnectionn(databaseId: number, options?: any): Observable<string> {
  const url = `${this.baseUrl}/verifyConnectionn/${databaseId}`;
    return this.http.get(url, { ...options, responseType: 'arraybuffer' }).pipe(
    map(response => new TextDecoder('utf-8').decode(response))
  );
}


  verifySQLConnection(formData: any): Observable<any> {
    const url = `${this.baseUrl}/test-and-add-mysql-database`;

    if (!formData) {
      console.error('formData is null or undefined');
      return null;  // Handle appropriately based on your application's logic
    }

    return this.http.post(url, formData);
  }
  testMongoDBConnection(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/test-connection`);
  }
  createOrUpdateDb(database: Database): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.baseUrl}/manage_connexion`, database, { headers });
  }

  getAllDb(): Observable<Database[]> {
    return this.http.get<Database[]>(`${this.baseUrl}`);
  }
  deleteDatabase(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  //verifyConnection(databaseInfo: any, databaseType: string): Observable<string> {
   // return this.http.post<string>(`${this.baseUrl}/verify-connection?type=${databaseType}`, databaseInfo);
  //}
  addDatabase(databaseInfo: any, databaseName: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/add-database?databaseName=${databaseName}`, databaseInfo);
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  updateDatabase(id: number, updatedDatabase: Database): Observable<Database> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Database>(url, updatedDatabase, this.httpOptions);
  }
  verifyExistenceDatabase(id: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verifyConnexion/${id}`);
  }}