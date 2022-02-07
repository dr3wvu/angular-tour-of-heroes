import { Component } from '@angular/core';

import { HeroForm } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
      const myHero = new HeroForm(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
      console.log('My hero is called ' + myHero.name)
  }
  newHero(){
    this.model = new HeroForm(42, '', '');
  }

}