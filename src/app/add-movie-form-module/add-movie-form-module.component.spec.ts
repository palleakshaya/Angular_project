import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieFormModuleComponent } from './add-movie-form-module.component';

describe('AddMovieFormModuleComponent', () => {
  let component: AddMovieFormModuleComponent;
  let fixture: ComponentFixture<AddMovieFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovieFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
