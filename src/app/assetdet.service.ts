import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDet } from './assetdet'

@Injectable({
  providedIn: 'root'
})
export class AssetdetService {

  private baseUrl1 ="http://localhost:8282/RestAssetManagement/api";

  constructor(private http:HttpClient) { }

  getAssetDetsList(): Observable<any>{
    return this.http.get(this.baseUrl1+'/assetdetails');
  }

  getAssetDet(id: number):Observable<any>{
    return this.http.get(this.baseUrl1+'/assetdetdetailsid/'+id);
  }
  createAssetDet(assetdet:Object):Observable<Object>{
    return this.http.post(this.baseUrl1+'/assetdetdetailsinsert',assetdet);
  }
 
  updateAssetDet(id:number,assetdet:AssetDet):Observable<any>{
    return this.http.put(this.baseUrl1+'/assetdetdetailsupdate/'+id,assetdet);
  }
 
  deleteAssetDet(id:number,assetdet:AssetDet):Observable<any>{
    return this.http.put(this.baseUrl1+'/assetdetdetailsdelete/'+id,assetdet);
  }
 
}
