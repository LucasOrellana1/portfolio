import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule, CommonModule, MatGridListModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //ZONELESS?
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer:DomSanitizer){

    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('globe', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/globe.svg'));

  }

  projects:any = [
  {
    title: "DND Arsenal",
    subtitle: "Aplicación de gestión de personajes",
    description: "Desarrollo de una aplicación para la creación y gestión de personajes en Dungeons & Dragons, utilizando Angular/Ionic. Incluye funcionalidades para formularios de creación, estadísticas y gestión de personajes, así como la visualización de detalles mediante tarjetas."
  },
  {
    title: "RegistrrApp",
    subtitle: "Aplicación móvil",
    description: "Aplicación móvil basada en Ionic y Angular para registrar la asistencia mediante el escaneo de un código QR. Los datos de asistencia se almacenan en Firebase, con una estructura de base de datos diseñada para asegurar la integridad y evitar duplicidades."
  },
  {
    title: "ColeDrive",
    subtitle: "Plataforma de transporte escolar",
    description: "Colaboración en el desarrollo de ColeDrive, una plataforma para conectar conductores y pasajeros para viajes compartidos en entornos escolares. Incluye características de seguridad, verificación de usuarios y programación de viajes. Utiliza Angular, TypeScript, Node.js, Express, Playwright y Firebase."
  },
  {
    title: "Importadora SyL",
    subtitle: "Desarrollo web",
    description: "Desarrollo de un sitio web para Importadora SyL utilizando Django. Implementación de la base de datos SQL con el ORM de Django y realización de pruebas unitarias."
  },
  {
    title: "Hackathon de Bomberos",
    subtitle: "Aplicación para bomberos",
    description: "Participación en un hackathon para construir una aplicación que resuelve problemas en la comunidad de bomberos local. Desarrollo enfocado en la solución de necesidades específicas de la comunidad."
  }
];

}
