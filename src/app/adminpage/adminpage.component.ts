import { AngularFireDatabase } from 'angularfire2/database';
import { Classes } from './../models/newEntry';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})

export class AdminpageComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  class: Classes;
  exampleForm = new FormGroup ({
    description: new FormControl(),
    title: new FormControl(),
    url: new FormControl(),
  });

  constructor(private db: AngularFireDatabase, private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  addCourse(data) {
    const obj = this.db.database.ref('/courses');
    obj.push(data);
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      description: '',
      title: '',
      url: ''
    });
  }

  onSubmit() {
    const obj = this.db.database.ref('/courses');
    obj.push(this.exampleForm.value);
    this.exampleForm.reset();
  }


}
