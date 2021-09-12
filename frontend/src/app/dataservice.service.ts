import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  userRole: BehaviorSubject<any> = new BehaviorSubject(null);
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoggedInUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loginDateTime: BehaviorSubject<any> = new BehaviorSubject("");
  logoutDateTime: BehaviorSubject<any> = new BehaviorSubject("");
  userID: BehaviorSubject<any> = new BehaviorSubject("");
  IDX: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }
  baseURL = "http://rdcquonapp001.chi.catholichealth.net:8090/api"
  getRole() {
    this.userRole.subscribe((dt) => {
      return dt
    })
  }

  setRole(role) {
    this.userRole.next(role);
  }

  loginInfo(userID, LoginDateTime, LogoutDateTime) {
    return this.http.post<any>(this.baseURL+"/loginInfo", { userID, LoginDateTime, LogoutDateTime })
  }

  logout(idx, uid, loginDtTime, logoutDtTime) {
    let logoutDtTm = logoutDtTime.toLocaleString("en", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "long"
    })
    let loginDtTm = loginDtTime.toLocaleString("en", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "long"
    })
    return this.http.post<any>(this.baseURL+"/logout", { idx, uid, loginDtTm, logoutDtTm })
  }

  getAllData() {
    return this.http.get<any>(this.baseURL+"/data")
  }

  getAllRegions() {
    return this.http.get<any>(this.baseURL+"/regions")
  }

  getData(Region) {
    return this.http.post<any>(this.baseURL+"/region", { Region })
  }
  getDataByEMR(emr) {
    return this.http.post<any>(this.baseURL+"/emr", emr)
  }

  getDataHospital(selectedRegion, hospitalName) {
    return this.http.post<any>(this.baseURL+"/hospital", { selectedRegion, hospitalName })
  }


  getDataDept(selectedRegion, hospital, department) {
    return this.http.post<any>(this.baseURL+"/department", {selectedRegion, hospital, department })
  }

  createRecord(record) {
    return this.http.post<any>(this.baseURL+"/create", record).pipe(

      retry(1),

      catchError(this.handleError)

    );
  }
  updateRecord(record) {
    return this.http.put<any>(this.baseURL+"/update", { record })
  }

  deleteRecord(record) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: record
    };
    return this.http.delete<any>(this.baseURL+"/delete", httpOptions)
  }
  isLoggedIn(userId?, password?) {
    return this.http.post<any>(this.baseURL+"/login", { userId, password })
    // return true;
  }

  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    //window.alert(errorMessage);

    return throwError(errorMessage);

  }

  getAllUsers() {
    return this.http.get<any>(this.baseURL+"/users")
  }

  addUser(user) {
    return this.http.post<any>(this.baseURL+"/createUser", user).pipe(

      retry(1),

      catchError(this.handleError)

    );
  }
  deleteUser(user) {
    return this.http.post<any>(this.baseURL+"/deleteUser", user).pipe(

      retry(1),

      catchError(this.handleError)

    );
  }

  updateUser(user) {
    return this.http.post<any>(this.baseURL+"/updateUser", user).pipe(

      retry(1),

      catchError(this.handleError)

    );
  }
}
