var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ViewChild, Component } from '@angular/core';
import { MbscRange, MbscEventcalendar } from '@mobiscroll/angular';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
var now = new Date();
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.nieuweDienst = '';
        this.allDay = false;
        this.eventDate = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
        this.isBusy = 'busy';
        this.eventText = '';
        this.eventDesc = '';
        this.events = [{
                d: new Date(),
                text: 'First Event'
            }];
        this.rangeSettings = {
            theme: 'ios',
            lang: 'nl',
            controls: ['date', 'time'],
            dateWheels: '|D M d|',
            startInput: '#startDate',
            endInput: '#endDate',
            tabs: false
        };
        this.eventSettings = {
            theme: 'ios',
            lang: 'nl',
            display: 'inline',
            layout: 'liquid',
            view: {
                calendar: { type: 'week' }
            }
        };
        this.formSettings = {
            theme: 'ios'
        };
        this.alleDiensten = this.firebaseService.getDiensten();
    }
    AboutPage.prototype.addDienst = function () {
        this.firebaseService.addDiensten(this.nieuweDienst);
    };
    AboutPage.prototype.removeDienst = function (id) {
        this.firebaseService.removeDiensten(id);
    };
    AboutPage.prototype.addEvent = function () {
        this.events.push({
            start: this.eventDate[0],
            end: this.eventDate[1],
            text: this.eventText || 'New Event',
            allDay: this.allDay
        });
        this.eventText = '';
        this.eventDesc = '';
        this.eventCal.instance.setVal(this.eventDate[0]);
    };
    ;
    AboutPage.prototype.change = function () {
        this.range.instance.option({
            controls: this.allDay ? ['date'] : ['date', 'time'],
            dateWheels: this.allDay ? 'MM dd yy' : '|D M d|'
        });
        this.range.instance.setVal(this.eventDate, true, false);
    };
    __decorate([
        ViewChild('mbscRange'),
        __metadata("design:type", MbscRange)
    ], AboutPage.prototype, "range", void 0);
    __decorate([
        ViewChild('mbscEventCal'),
        __metadata("design:type", MbscEventcalendar)
    ], AboutPage.prototype, "eventCal", void 0);
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController, FirebaseServiceProvider])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map