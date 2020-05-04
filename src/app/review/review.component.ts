import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

import { Review, ContactType } from '../../shared/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewForm: FormGroup;
  @ViewChild('rForm', { static: false })

  formErrors={           //Java script object for form-errors
    'name': '',
    'author': '',
    'email': '',
    'comment':'',
    'rating': '',
    'date': '',
    'agree': '',
    'phone': '',
  };
  validationMessages = {
    'name':{
      'required': 'Name is required',
      'minLength': 'Minimum lenght policy is violated - min 3 charactrs',
      'maxLength': 'Minimum lenght policy is violated - max 40 characters',
    },
    'author':{
      'required': 'Name is required',
      'minLength': 'Minimum lenght policy is violated - min 3 charactrs',
      'maxLength': 'Minimum lenght policy is violated - max 40 characters',
    },
    'phone':{
      'required': 'Phone is required is required',
      'pattern': 'Should be only numbers'
    },
    'email':{
      'required': 'Email is required',
      'pattern': 'Invalid email format'
    },
    'rating':{
      'required': 'Rating is required',
      'min': 'Minmium value is 1',
      'mxa': 'Maximum value is 5'
    },

};

  reviewFormDirective;

  review: Review;
  contactType = ContactType;



  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.reviewForm = this.fb.group({
      name: ["The One with a cat", Validators.required],
      author: ["", [Validators.required, Validators.minLength(3), Validators.minLength(30)]],
      email: ["", [Validators.required, Validators.email]],
      comment: ["", [Validators.required, Validators.minLength(3), Validators.minLength(24)]],
      rating: [5, [Validators.required, Validators.min(1), Validators.min(5)]],
      date: ["today", [Validators.required, Validators.pattern]],
      agree: [false, Validators.required],
      phone: ["", Validators.pattern],
      contactType: "None"
    });
    this.reviewForm.valueChanges
    .subscribe(formData => this.onValueChanged(formData));
    this.onValueChanged(); //reet form validation messages
  }

  onValueChanged(formData?: any){
    if(!this.reviewForm){
      return;
    }

    const form = this.reviewForm;
    for (const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        //clear previous error messages (if an)
        this.formErrors[field]='';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field]+=messages[key] + ' ';
            }
          }
        }
      }
    }


  }

  onSubmitReview() {
    this.review = this.reviewForm.value;
    console.log(this.reviewForm);
    this.reviewForm.reset({
      episode: "x",
      author: "",
      email: "",
      comment: "",
      rating: 5,
      date: "today",
      agree: true,
      phone: "",
      contactType: "None"
    });
    this.reviewFormDirective.resetForm();
  }

}
