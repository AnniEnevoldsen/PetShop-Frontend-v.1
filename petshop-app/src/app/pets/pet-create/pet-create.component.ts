import { Component, OnInit } from '@angular/core';
import {PetServiceService} from "../../shared/services/pet-service.service";
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {
petForm = new FormGroup({
  name: new FormControl('')
});

  constructor(private petService: PetServiceService,
              private router: Router) { }

  ngOnInit() {}

  save() {
    const petFromFields = this.petForm.value;
    const pet = {
      name: petFromFields.name
    };
    this.petService.addPet(pet).subscribe(() => {
      this.router.navigateByUrl('/pets');
    });
    debugger;
  }
}
