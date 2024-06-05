import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/api/main.service';

@Component({
  selector: 'app-create-sites',
  templateUrl: './create-sites.component.html',
  styleUrls: ['./create-sites.component.css']
})
export class CreateSitesComponent implements OnInit {

  form: FormGroup;
  error: string = '';
  success: string = '';

  constructor(private mainService: MainService, private router: Router) {
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      localisation: new FormControl('', Validators.required),
      descriptionHistorique: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        file: file
      });
    }
  }

  createSite() {
    if (this.form.invalid) {
      this.error = 'Please fill all required fields.';
      return;
    }

    const formData = new FormData();
    formData.append('nom', this.form.get('nom')?.value);
    formData.append('localisation', this.form.get('localisation')?.value);
    formData.append('descriptionHistorique', this.form.get('descriptionHistorique')?.value);
    formData.append('file', this.form.get('file')?.value);

    this.mainService.publishSite(formData).subscribe(
      (res: any) => {
        this.success = res.message;
        this.router.navigate(['/sites']);  // Navigate to a list page or reset the form
      },
      (err: any) => {
        this.error = err.message;
      }
    );
  }
}
