import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out')
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(50px)' }),
        animate('0.5s ease-out')
      ])
    ]),
    trigger('pulseAnimation', [
      state('active', style({ transform: 'scale(1)' })),
      transition('* => active', [
        animate('0.3s ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('0.3s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])  
  ]
})
export class HeaderComponent {

  protected headerState: 'gret' | 'who' = 'gret'

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  viewProjects(){
    const container = this.scrollContainer.nativeElement as HTMLElement;
    const containerHeight = container.offsetHeight;

    // Desplazar la ventana para que el contenedor actual quede fuera de la vista
    window.scrollBy({
      top: containerHeight,
      behavior: 'smooth'  // Desplazamiento suave
    });
  }
  changeViewPort(){
    if(this.headerState == 'gret'){
      this.headerState = 'who';
    }
    else{
      this.headerState = 'gret';
    }
  }
    
}



