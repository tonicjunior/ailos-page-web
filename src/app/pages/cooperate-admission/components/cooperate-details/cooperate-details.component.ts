import { Component, Input, OnInit } from '@angular/core';
import { Cooperate } from 'src/model/cooperate.model';

@Component({
  selector: 'app-cooperate-details',
  templateUrl: './cooperate-details.component.html',
  styleUrls: ['./cooperate-details.component.scss'],
})
export class CooperateDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  cooperate!: Cooperate;
}
