import { Injectable } from '@angular/core';
import { Item } from './interfaces/item.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {
  localStorageName = 'todo-list';
  private statusSubject = new BehaviorSubject<string>('test');
  status = this.statusSubject.asObservable();

  constructor() {}

  private getBrowserSupport() {
    if (typeof Storage !== 'undefined') {
      return true;
    } else {
      this.updateMessage('Sorry, your browser does not support storage.');
      return false;
    }
  }

  private updateMessage(message: string) {
    this.statusSubject.next(message);
    setTimeout(() => {
      this.statusSubject.next('Idle');
    }, 3000);
  }

  getList() {
    if (!this.getBrowserSupport()) {
      return [];
    }
    const list = localStorage.getItem(this.localStorageName);
    if (list) {
      this.updateMessage('Successfully loaded');
      return JSON.parse(list);
    } else {
      this.updateMessage('No items in local storage');
      return [];
    }
  }

  setList(list: Item[]) {
    if (!this.getBrowserSupport()) {
      return;
    }
    localStorage.setItem('todoList', JSON.stringify(list));
    this.updateMessage('List was updated');
  }
}
