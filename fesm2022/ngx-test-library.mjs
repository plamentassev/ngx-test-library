import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

class NgxTestLibraryService {
    constructor() { }
    showAlert(message) {
        alert(message);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxTestLibraryComponent {
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

class NgxTestLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryModule, declarations: [NgxTestLibraryComponent], exports: [NgxTestLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxTestLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxTestLibraryComponent
                    ],
                    imports: [],
                    exports: [
                        NgxTestLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-test-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTestLibraryComponent, NgxTestLibraryModule, NgxTestLibraryService };
//# sourceMappingURL=ngx-test-library.mjs.map
