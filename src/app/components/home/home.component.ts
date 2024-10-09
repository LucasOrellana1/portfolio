import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule, CommonModule, MatGridListModule, MatIconModule, MatChipsModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  //ZONELESS?
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: []

})
export class HomeComponent {
  
  lightboxImage: string | null = null;
  currentYear: number = new Date().getFullYear();

  constructor(private iconRegistry: MatIconRegistry, private sanitizer:DomSanitizer){
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('globe', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/globe.svg'));
    iconRegistry.addSvgIcon('playstore', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playstore.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));

  }

  projects:any = [
  {
    title: "DND: Arsenal",
    subtitle: "Desarrollo full-stack (mobile)",
    description: "Desarrollo de una aplicación para la creación y gestión de personajes en Dungeons & Dragons, utilizando Angular/Ionic. Incluye funcionalidades para formularios de creación, estadísticas y gestión de personajes, así como la visualización de detalles mediante tarjetas.",
    github: null,
    deployUrl: null,
    images: 'dnd',
  },
/*   {
    title: "RegistrrApp",
    subtitle: "Aplicación móvil",
    description: "Aplicación móvil basada en Ionic y Angular para registrar la asistencia mediante el escaneo de un código QR. Los datos de asistencia se almacenan en Firebase, con una estructura de base de datos diseñada para asegurar la integridad y evitar duplicidades.",
    github: "https://github.com/LucasOrellana1/AppRegistrr.git",
    deployUrl: null
  }, */
  {
    title: "ColeDrive",
    subtitle: "Desarrollo backend",
    description: "Colaboración en el desarrollo de ColeDrive, una plataforma para conectar conductores y pasajeros para viajes compartidos en entornos escolares. Incluye características de seguridad, verificación de usuarios y programación de viajes.",
    github: "https://github.com/LucasOrellana1/ColeDrive.git",
    deployUrl: null,
    images: 'coledrive',
  },
  {
    title: "Constructora SL",
    subtitle: "Desarrollo frontend",
    description: "He desarrollado una landing page para Constructora SL utilizando Angular, que presenta los servicios de la empresa de manera atractiva y funcional.",
    github: "https://github.com/LucasOrellana1/constructoraSyL",
    deployUrl: "https://lucasorellana1.github.io/constructoraSyL/",
    images: 'constructora',
  },
  {
    title: "Mail API - Constructora SL",
    subtitle: "Desarrollo backend",
    description: "He desarrollado una API utilizando Express.js que integra Nodemailer para gestionar los contactos de una landing page empresarial de Constructora SL, aplicando buenas practicas de seguridad",
    github: "https://github.com/LucasOrellana1/email-api",
    deployUrl: null,
  },
  {
    title: "POC Chatbot empresarial",
    subtitle: "Desarrollo full-stack",
    description: " Desarrollo de una prueba de concepto de un chatbot empresarial para un cliente, utilizando Python y Langchain. Este proyecto muestra la capacidad del chatbot para interactuar y responder eficazmente a las consultas de los usuarios.",
    github: "https://github.com/LucasOrellana1/testLangChain",
    deployUrl: "https://testlangchain-jxdxthwfpyywehhbp6pvyq.streamlit.app",
  },
  {
    title: "Movie Crud API",
    subtitle: "Desarrollo backend",
    description: "He desarrollado una API RESTful CRUD utilizando Node.js y MySQL, implementando el patrón de diseño MVC (Modelo-Vista-Controlador) para estructurar el código de manera clara y mantenible.",
    github: "https://github.com/LucasOrellana1/API-EXPRESS-MYSQL",
    deployUrl: null,
  },

];

  experiences = [
    { role: 'Apoyo en sistemas institucionales', 
      company: 'Banco de Chile', 
      period: 'Marzo 2024 - Junio 2024', 
      description: 'En mi práctica profesional en el Banco de Chile, apoyé en la implementación de un sistema ERP. Mis responsabilidades incluyeron la preparación y revisión de documentación y reuniones con usuarios para levantar requerimientos.' },
  ];

  technologies = [
    { name: 'Python', icon: 'code' },
    { name: 'JavaScript', icon: 'code' },
    { name: 'TypeScript', icon: 'code' },

    { name: 'Angular', icon: 'code' },
    { name: 'Ionic', icon: 'code' },
    { name: 'Node.js', icon: 'code' },
    { name: 'Express', icon: 'code' },

    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Firebase', icon: 'storage' },
    { name: 'PL/SQL', icon: 'storage' },
    { name: 'MySQL', icon: 'storage' },

    { name: 'Docker', icon: 'layers' },
    { name: 'Git', icon: 'layers' },

  ];

  redirectTo(url:string){
    console.log(url)
    if(url){
      window.open(url, '_blank')
    }
  }

  getProjectImages(project: any): string[] {
    const images: string[] = [];
    for (let i = 1; i <= (project.imageCount || 4); i++) {
      images.push(`assets/demos/${project.images}/image${i}.png`);
    }
    return images;
  }

  openLightbox(image: string) {
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }

  
}
