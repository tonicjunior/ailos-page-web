/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CooperateDetailsComponent } from './cooperate-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Cooperate } from 'src/model/cooperate.model';

const cooperateSearch: Cooperate = {
  id: 6,
  cpf: '72594287679',
  name: 'Fernando Enrico Fogaça',
  situation: 'Regular',
  accountNumber: '0328856-0',
  currentAccount: '0328856-0',
};
describe('CooperateDetailsComponent', () => {
  let component: CooperateDetailsComponent;
  let fixture: ComponentFixture<CooperateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CooperateDetailsComponent],
      imports: [MatIconModule, MatCardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperateDetailsComponent);
    component = fixture.componentInstance;
    component.cooperate = cooperateSearch;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
