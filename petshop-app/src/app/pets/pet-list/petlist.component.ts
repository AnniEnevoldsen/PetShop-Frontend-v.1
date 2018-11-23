import { Component, OnInit } from '@angular/core';
import { Pet } from '../../shared/models/pet';
import {PetServiceService} from '../../shared/services/pet-service.service';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

pets: Pet[];
count: number;
loading: boolean;


  constructor(private petService: PetServiceService) { }

  ngOnInit() {
  this.refresh();
  }

  refresh() {
    this.loading = true;
    console.log('loading true');
    this.petService.getPets()
      .subscribe(listOfPets => {
      // this.pets = listOfPets.count;
        this.pets = listOfPets; // why doesnt .list work?
        this.loading = false;
      });
  }

  delete(id: number) {
   this.petService.deletePet(id)
      .subscribe(message => {
        this.refresh();
      });
  }
}
