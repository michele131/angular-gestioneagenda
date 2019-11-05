import { Component } from '@angular/core';
import { Contatto } from './contatto.model.ts';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Michele', 'Corrado', 'michele.corrado@marconirovereto.it', '+393402747394', 5);
  
}