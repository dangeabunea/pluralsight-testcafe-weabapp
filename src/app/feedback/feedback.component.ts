import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    /*
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
     */
  }

}

export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
