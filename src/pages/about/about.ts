import { ViewChild, Component, OnInit} from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions, MbscRangeOptions, MbscFormOptions, MbscRange, MbscEventcalendar } from '@mobiscroll/angular';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { AngularFireObject } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

let now = new Date();


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage{

  alleDiensten: AngularFireList<{}>;
  nieuweDienst = '';

  constructor(public navCtrl: NavController, private firebaseService: FirebaseServiceProvider){
        this.alleDiensten = this.firebaseService.getDiensten();
    }

  addDienst(){
    this.firebaseService.addDiensten(this.nieuweDienst);
  }

  removeDienst(id){
      this.firebaseService.removeDiensten(id);
  }


  @ViewChild('mbscRange')
  range: MbscRange;

  @ViewChild('mbscEventCal')
  eventCal: MbscEventcalendar;

  allDay: boolean = false;
  eventDate: Array < Date > = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
  isBusy: string = 'busy';
  eventText: string = '';
  eventDesc: string = '';
  events: Array < any > = [{
      d: new Date(),
      text: 'First Event'
  }];

  rangeSettings: MbscRangeOptions = {
      theme: 'ios', 
      lang: 'nl', 
      controls: ['date', 'time'],
      dateWheels: '|D M d|',
      startInput: '#startDate',
      endInput: '#endDate',
      tabs: false
  };

  eventSettings: MbscEventcalendarOptions = {
      theme: 'ios', 
      lang: 'nl', 
      display: 'inline',
      layout: 'liquid',
      view: {
          calendar: { type: 'week' }
      }
  };

  formSettings: MbscFormOptions = {
      theme: 'ios'
  };

  addEvent() {
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

   change() {
      this.range.instance.option({
          controls: this.allDay ? ['date'] : ['date', 'time'],
          dateWheels: this.allDay ? 'MM dd yy' : '|D M d|'
      });

      this.range.instance.setVal(this.eventDate, true, false);
  }
}