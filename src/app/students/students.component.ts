import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../student.service";
import { FreeapiService } from '../freeapi.service';

import { Student } from '../student';
import { Instrument } from '../instrument';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  Student: any = [];
  Instrument: any = []

  constructor(
    public restApi: RestApiService,private _freeApiService: FreeapiService
  ) { }

  lstInstruments:Instrument[];

  ngOnInit() {
    this.loadStudents()
    this.loadInstruments()

    this._freeApiService.getInstruments()
    .subscribe
    (
      data=>
      {
        this.lstInstruments = data;
      }
    )
  }

  // Get Students list
  loadStudents() {
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.Student = data;
    })
  }

    // Get instrument list
    loadInstruments() {
      return this.restApi.getInstruments().subscribe((data: {}) => {
        this.Instrument = data;
      })
    }

}
