import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Offre,Request} from '../model/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  private baseURL = "http://localhost:8081/offers";

  constructor(private httpClient: HttpClient) { }

  addOffre(offre:Offre){
    return   this.httpClient.post(this.baseURL+'/addOffer',offre)
  }
  getOffre(id:any){
    return this.httpClient.get(this.baseURL+'/getOffre/'+id)
  }
  addRequest(request:Request){
    return this.httpClient.post(this.baseURL+'/addRequest',request)
  }
  updateRequest(request:Request, id:any){
    return this.httpClient.put(this.baseURL+'/updateRequest/'+id,request)
  }
  updateOffre(offre:Offre, id:any){
    return this.httpClient.put(this.baseURL+'/updateOffer/'+id,offre)
  }
  deleteOffre( id:any){
    return this.httpClient.delete(this.baseURL+'/deleteOffer/'+id)
  }
  deleteRequest( id:any){
    return this.httpClient.delete(this.baseURL+'/deleteRequest/'+id)
  }
  getOffres()  {
    return this.httpClient.get(this.baseURL + '/AllOffers');
  }
  getOffresArchived()  {
    return this.httpClient.get(this.baseURL + '/AllOffersArchived');
  }
  getRequests( )  {
    return this.httpClient.get(this.baseURL + '/AllRequests');
  }

  bestOff(){
    return this.httpClient.get(this.baseURL + '/best-off');
  }
  likeOffre(id:any){
    return this.httpClient.get(this.baseURL +'/'+id+ '/like')
  }
  dislikeOffre(id:any){
    return this.httpClient.get(this.baseURL +'/'+id+ '/dislike')
  }
  statistics(){
    return this.httpClient.get(this.baseURL + '/statistics')
  }
  similar(descriptionRequest:any, decriptionOffre){
    return this.httpClient.get(this.baseURL + '/cosine-similarity/'+decriptionOffre+'/'+descriptionRequest)
  }
  matching(idRequest:any){
    return this.httpClient.get(this.baseURL + '/requests/matching-offers/'+idRequest)
  }
}
