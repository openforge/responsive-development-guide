import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicDesignPageComponent } from './ionic-design.page';

describe('IonicDesignPageComponent', () => {
    let component: IonicDesignPageComponent;
    let fixture: ComponentFixture<IonicDesignPageComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IonicDesignPageComponent],
                imports: [IonicModule.forRoot()],
            }).compileComponents();

            fixture = TestBed.createComponent(IonicDesignPageComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
