import { HttpClient } from '@angular/common/http';
import { computed, Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

const API_URL = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  private router = inject(Router)

  private isBrowser: boolean;


  currentUser = signal<User | null | undefined>(undefined);

  isLoggedIn = computed(() => !!this.currentUser());

  constructor(@Inject(PLATFORM_ID) platformId: Object){
    this.isBrowser = isPlatformBrowser(platformId);
    
    if(this.isBrowser) {
    const userJson = localStorage.getItem('current_user');
    this.currentUser.set(userJson ? JSON.parse(userJson) : null);
  } else {
    this.currentUser.set(null);
  }
}
  
  
  
  register(user: Omit<User, 'id'>){
    return this.http.post<User>(API_URL, user);
  } 

  login(credentials: Pick<User, 'email' | 'password'>) {
    return this.http.get<User[]>(
      `${API_URL}/login?email=${credentials.email}&password=${credentials.password}`
    );
  }

  handleLoginSuccess(user: User){
    localStorage.setItem('current_user', JSON.stringify(user));
    this.currentUser.set(user);
    this.router.navigate(['/'])
  }

  logout() {
    localStorage.removeItem('current_user');
    this.currentUser.set(null);
    this.router.navigate(['/login'])
  }
}
