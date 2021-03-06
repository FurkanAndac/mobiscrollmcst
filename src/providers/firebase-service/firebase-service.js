var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
    }
    FirebaseServiceProvider.prototype.getDiensten = function () {
        return this.afd.list('/diensten/');
    };
    FirebaseServiceProvider.prototype.addDiensten = function (name) {
        this.afd.list('/diensten/').push(name);
    };
    FirebaseServiceProvider.prototype.removeDiensten = function (id) {
        this.afd.list('/diensten/').remove(id);
    };
    FirebaseServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());
export { FirebaseServiceProvider };
//# sourceMappingURL=firebase-service.js.map