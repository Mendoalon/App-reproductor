import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FovoritesPageComponent } from './fovorites-page.component';

describe('FovoritesPageComponent', () => {
  let component: FovoritesPageComponent;
  let fixture: ComponentFixture<FovoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FovoritesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FovoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
