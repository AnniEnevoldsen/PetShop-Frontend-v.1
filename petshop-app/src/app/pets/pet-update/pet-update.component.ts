import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {PetServiceService} from "../../shared/services/pet-service.service";
@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private petService: PetServiceService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

   /* this.PetServiceService.getPetById(this.id)
      .subscribe(petFromRest => {
        this.petForm.patchValue({
          name: petFromRest.name,

        });
      });*/
  }

  save() {
    const pet = this.petForm.value;
   /* pet.id = this.id;
    this.petService.updatePet(pet)
      .subscribe(() => {
        this.router.navigateByUrl('/pets');
      }); */
  }
}
