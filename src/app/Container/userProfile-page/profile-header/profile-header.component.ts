import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUserService } from 'src/app/services/update-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
})
export class ProfileHeaderComponent implements OnInit {
  flag: boolean = true;

  username: any;
  phone: any;
  userId: any;
  bio = 'hello,write something about yourself';
  cover_photo: any;
  photo: any;
  city: any;

  File: any;

  isLoading = true;
  photoFile: any;
  coverFile: any;
  editedUser: any;

  constructor(
    private userService: UpdateUserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userId = "6411c693305cd845f0217940"

    //get userby id
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserById(this.userId).subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.editedUser = res.data;
      },
      error: (err) => {},
    });
  }

  validationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    bio: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
  });

  checkForm() {
    if (this.validationForm.valid) {
      this.save();
    } else {
      this.flag = false;
      console.log('Inputs Not Valid');
      console.log(this.validationForm);
    }
  }
  save() {
    console.log('saved');
    // send form values to backend for profile updating
  }

  get nameValid() {
    return this.validationForm.controls['username'].valid;
  }
  get locationValid() {
    return this.validationForm.controls['city'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }
  get bioValid() {
    return this.validationForm.controls['bio'].valid;
  }

  closeResult = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // change  profile pic
  handlePhotoInput(event: any) {
    this.photoFile = event.target.files[0];
    console.log(this.photoFile);
  }

  handleCoverPhotoInput(event: any) {
    this.coverFile = event.target.files[0];
    console.log(this.coverFile);
  }

  updateProfile() {
    const formData = new FormData();

    Object.entries(this.validationForm.value).forEach(([key, value]) => {
      formData.append(key, value!);
    });
    formData.append('photo', this.photoFile);
    formData.append('cover_photo', this.coverFile);

    this.userService.updateUser(formData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false;

        this.editedUser = res.data;

        this.username = res.data.username;
        this.phone = res.data.phone;
        this.bio = res.data.bio;
        this.city = res.data.city;

        console.log(this.editedUser);
        // this.getUserData();

        Swal.fire('Good job!', 'You are updated!', 'success');
      },
      error: (err) => {
        console.log(err);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'please refresh the website',
        });
      },
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
