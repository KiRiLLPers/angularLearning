import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-add-new-card-popup',
  templateUrl: './add-new-card-popup.component.html',
  styleUrls: ['./add-new-card-popup.component.scss']
})
export class AddNewCardPopupComponent {
  @Input() title = '';
}
