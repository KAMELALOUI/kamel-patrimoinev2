import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private servicesUrl = 'http://localhost:8222';

  constructor(private http: HttpClient) { }

  // article services 
  publish(articleFormData: FormData) {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.post( `${this.servicesUrl}/api/articles/add`, articleFormData, { headers });
  }

  getArticlesList() {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.get(`${this.servicesUrl}/api/articles/list`, { headers });
  }

  // media services 
  publishM(mediaFormData: FormData) {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.post( `${this.servicesUrl}/api/media/add`, mediaFormData, { headers });
  }

  getMediaList() {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.get( `${this.servicesUrl}/api/media/list`, { headers });
  }

  // site
  publishSite(siteFormData: FormData) {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.post( `${this.servicesUrl}/api/sites/add`, siteFormData, { headers });
  }

  getSiteList() {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.get( `${this.servicesUrl}/api/sites/list`, { headers });
  }

  siteSearch() {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.get( `${this.servicesUrl}/api/sites/search`, { headers });
  }

  // mapping services
  publishMapping(mappFormData: FormData) {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.post(`${this.servicesUrl}/api/heritage/add`, mappFormData, { headers });
  }

  getMappingList() {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });
    return this.http.get( `${this.servicesUrl}/api/heritage/list`, { headers });
  }

  searchMapping(name: string, location: string, keyword: string) {
    const headers = new HttpHeaders({
      'Authorization': '' + localStorage.getItem('token')
    });

    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (location) params = params.set('location', location);
    if (keyword) params = params.set('keyword', keyword);

    return this.http.get( `${this.servicesUrl}/api/heritage/search`, { headers, params });
  }
}
