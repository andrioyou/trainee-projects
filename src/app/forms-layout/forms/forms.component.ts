import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  skillsForm: FormGroup;
  proficiencyLevels: string[] = ['High', 'Middle', 'Low'];
  skillsValue = '';

  constructor(private fb: FormBuilder) {
    this.skillsForm = new FormGroup({
      skills: new FormArray([this.getSkillFormGroup()], Validators.required)
    });
  }

  ngOnInit() {}

  getSkillFormGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
      proficiency: new FormControl(null)
    });
  }

  addSkill() {
    (this.skillsForm.get('skills') as FormArray).push(this.getSkillFormGroup());
  }

  removeSkill(i: number) {
    (this.skillsForm.get('skills') as FormArray).removeAt(i);
  }

  get controls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }
}
