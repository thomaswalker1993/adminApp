import { Classes } from './../models/newEntry';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html',
  styles: []
})
export class CoursesListComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  class: Classes;

  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
