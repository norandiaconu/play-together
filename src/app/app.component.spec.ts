import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let app: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppComponent]
        });

        const fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should have as title play-together', () => {
        expect(app.title).toEqual('play-together');
    });

    it('should increase boxes', () => {
        expect(app.extraBoxes).toEqual(0);
        app['increaseBoxes']();
        expect(app.extraBoxes).toEqual(1);
    });

    it('should decrease boxes', () => {
        app.extraBoxes = 1;
        expect(app.extraBoxes).toEqual(1);
        app['decreaseBoxes']();
        expect(app.extraBoxes).toEqual(0);
    });
});
