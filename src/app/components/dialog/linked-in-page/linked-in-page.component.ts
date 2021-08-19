import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialProfile } from 'src/app/model/socialProfile';
import { ManageaccountService } from 'src/app/services/manageaccount.service';


@Component({
  selector: 'app-linked-in-page',
  templateUrl: './linked-in-page.component.html',
  styleUrls: ['./linked-in-page.component.scss']
})
export class LinkedInPageComponent implements OnInit {

  messageData: {
    linkedinProfile: any,
    linkedinPages: any
  } | undefined;
  constructor(public modal: NgbActiveModal,
    private manageaccountService: ManageaccountService,) { }
  
  ngOnInit(): void {

    console.log("messageData",this.messageData);
  }


}
