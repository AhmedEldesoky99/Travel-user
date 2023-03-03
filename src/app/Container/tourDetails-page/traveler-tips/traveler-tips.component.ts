import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-traveler-tips',
  templateUrl: './traveler-tips.component.html',
  styleUrls: ['./traveler-tips.component.css'],
})
export class TravelerTipsComponent {
  // ---------
  closeModal: string = '';

  constructor(private modalService: NgbModal) {}

  triggerModal(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (res) => {
        this.closeModal = `Closed with: ${res}`;
      },
      (res) => {
        this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
      }
    );
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
