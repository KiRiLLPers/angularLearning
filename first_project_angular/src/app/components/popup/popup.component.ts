import {Component, Input} from '@angular/core';
import {PopupOpenService} from "../../services/popup-service.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(private PopupOpenService: PopupOpenService) {

  }
}
