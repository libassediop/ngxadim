import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListutilisateurComponent } from './listutilisateur.component';

describe('ListutilisateurComponent', () => {
  let component: ListutilisateurComponent;
  let fixture: ComponentFixture<ListutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListutilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
