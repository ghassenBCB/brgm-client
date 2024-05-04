import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtimatumComponent } from './create-utimatum.component';

describe('CreateUtimatumComponent', () => {
  let component: CreateUtimatumComponent;
  let fixture: ComponentFixture<CreateUtimatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUtimatumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUtimatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
