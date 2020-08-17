import { Observable } from "rxjs";

export interface RequestAdapater {
  loadAll(): Observable<any>
}
