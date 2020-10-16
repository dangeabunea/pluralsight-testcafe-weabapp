import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private readonly _feedbackModel: FormGroup;
  private _submitted = false;
  private _submitOk = false;
  private _submitFail = false;

  constructor(private _fb: FormBuilder) {
    this._feedbackModel = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      rating: ['', Validators.required],
      feedback: ['']
    });
  }

  ngOnInit() {
  }

  public get submitted(): boolean {
    return this._submitted;
  }

  public get feedbackModel(): FormGroup {
    return this._feedbackModel;
  }

  public get submitFail(): boolean {
    return this._submitFail;
  }

  public get submitOk(): boolean {
    return this._submitOk;
  }

  sendFeedback(): void {
    this._submitted = true;
    if (this._feedbackModel.invalid) {
      this._submitOk = false;
    } else {
      this._submitOk = true;
    }
  }
}


