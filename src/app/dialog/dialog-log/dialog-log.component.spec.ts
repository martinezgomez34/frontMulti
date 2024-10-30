import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogComponent } from './dialog-log.component';

describe('DialogLogComponent', () => {
  let component: DialogLogComponent;
  let fixture: ComponentFixture<DialogLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
