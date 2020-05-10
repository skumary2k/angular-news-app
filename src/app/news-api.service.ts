import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key: string = "dde8c27d342142c089017a2e68ba82dd";
  news_url: string = "https://newsapi.org/v2/";

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(`${this.news_url}sources?language=en&apiKey=${this.api_key}`);
  }

  initArticles() {
    return this.http.get(`${this.news_url}top-headlines?sources=techcrunch&apiKey=${this.api_key}`);
  }

  getArticlesByID(source: string) {
    return this.http.get(`${this.news_url}top-headlines?sources=${source}&apiKey=${this.api_key}`);
  }

}
