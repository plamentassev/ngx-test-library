import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxTestLibraryComponent {
    constructor() {
        //An example input to the component
        this.textInput = "Default text message";
        //Am example output
        this.eventEmitter = new EventEmitter();
    }
    // Trigger for the output emitter
    onEmitEvent() {
        this.eventEmitter.emit("Test Value");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxTestLibraryComponent, selector: "ngx-test-library", inputs: { textInput: "textInput" }, outputs: { eventEmitter: "eventEmitter" }, ngImport: i0, template: `
    <div>{{ textInput }}</div>
    <button (click)="onEmitEvent()">Emit Event Trigger</button>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-test-library', template: `
    <div>{{ textInput }}</div>
    <button (click)="onEmitEvent()">Emit Event Trigger</button>
  ` }]
        }], propDecorators: { textInput: [{
                type: Input
            }], eventEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRlc3QtbGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVzdC1saWJyYXJ5L3NyYy9saWIvbmd4LXRlc3QtbGlicmFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFXckUsTUFBTSxPQUFPLHVCQUF1QjtJQVRwQztRQVVFLG1DQUFtQztRQUMxQixjQUFTLEdBQVcsc0JBQXNCLENBQUM7UUFFcEQsbUJBQW1CO1FBQ1QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBTXJEO0lBSkMsaUNBQWlDO0lBQ2pDLFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDOytHQVZVLHVCQUF1QjttR0FBdkIsdUJBQXVCLHVJQVB4Qjs7O0dBR1Q7OzRGQUlVLHVCQUF1QjtrQkFUbkMsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEI7OztHQUdUOzhCQU1RLFNBQVM7c0JBQWpCLEtBQUs7Z0JBR0ksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGVzdC1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2Pnt7IHRleHRJbnB1dCB9fTwvZGl2PlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRW1pdEV2ZW50KClcIj5FbWl0IEV2ZW50IFRyaWdnZXI8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGVzdExpYnJhcnlDb21wb25lbnQge1xuICAvL0FuIGV4YW1wbGUgaW5wdXQgdG8gdGhlIGNvbXBvbmVudFxuICBASW5wdXQoKSB0ZXh0SW5wdXQ6IHN0cmluZyA9IFwiRGVmYXVsdCB0ZXh0IG1lc3NhZ2VcIjtcblxuICAvL0FtIGV4YW1wbGUgb3V0cHV0XG4gIEBPdXRwdXQoKSBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBUcmlnZ2VyIGZvciB0aGUgb3V0cHV0IGVtaXR0ZXJcbiAgb25FbWl0RXZlbnQoKSB7XG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdChcIlRlc3QgVmFsdWVcIik7XG4gIH1cbn1cbiJdfQ==