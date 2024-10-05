import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]

})
export class AppComponent {
  title = '¡Salsa Power pone el sabor! 🔥🎶';
  nombre: string = '';
  email: string = '';
  edad!: number;
  selectedSalsaIcon = '';
  selectedGroup = '';
  selectedRhythm = '';
  selectedImage = '';

  icons = [
    { name: 'Celia Cruz', phrase: '¡Azúcar!' },
    { name: 'Rubén Blades', phrase: 'La vida te da sorpresas' },
    { name: 'Héctor Lavoe', phrase: 'Yo soy el cantante' }
  ];

  groups = {
    red: ['El Gran Combo de Puerto Rico', 'La Sonora Matancera', 'Dimensión Latina', 'Grupo Niche'],
    blue: ['Cortijo y su Combo', 'La Orquesta de Richie Ray y Bobby Cruz', 'La Sonora Ponceña', 'La Orquesta de Tito Puente'],
    yellow: ['Fruko y sus Tesos', 'Orquesta Zodiac', 'Hermanos Lebrón', 'Orquesta Aragón']
  };

  rhythms = {
    green: ['Son montuno', 'Mambo', 'Guaguancó', 'Chachachá'],
    pink: ['Son', 'Danzón', 'Guaracha', 'Salsa Brava'],
    purple: ['Salsa Romántica', 'Salsa Dura', 'Boogaloo', 'Bolero']
  };
  constructor(private http: HttpClient) { }

  onSubmit() {
    if (
      (this.selectedGroup === 'El Gran Combo de Puerto Rico' ||
        this.selectedGroup === 'La Sonora Matancera' ||
        this.selectedGroup === 'Dimensión Latina' ||
        this.selectedGroup === 'Grupo Niche') &&
      (this.selectedRhythm === 'Son montuno' ||
        this.selectedRhythm === 'Mambo' ||
        this.selectedRhythm === 'Guaguancó' ||
        this.selectedRhythm === 'Chachachá')
    ) {
      console.log("if lo mejor de la salsa");
      this.selectedImage = 'assets/imagenes/Lomejordelasalsa.jpeg';

    } else if (
      (this.selectedGroup === 'El Gran Combo de Puerto Rico' ||
        this.selectedGroup === 'La Sonora Matancera' ||
        this.selectedGroup === 'Dimensión Latina' ||
        this.selectedGroup === 'Grupo Niche') &&
      (this.selectedRhythm === 'Son' ||
        this.selectedRhythm === 'Danzón' ||
        this.selectedRhythm === 'Guaracha' ||
        this.selectedRhythm === 'Salsa Brava')
    ) {
      console.log("if salsa para el alma");
      this.selectedImage = 'assets/imagenes/salsaparaelalma.jpeg';


    } else if (
      (this.selectedGroup === 'Cortijo y su Combo' ||
        this.selectedGroup === 'La Orquesta de Richie Ray y Bobby Cruz' ||
        this.selectedGroup === 'La Sonora Ponceña' ||
        this.selectedGroup === 'La Orquesta de Tito Puente') &&
      (this.selectedRhythm === 'Son montuno' ||
        this.selectedRhythm === 'Mambo' ||
        this.selectedRhythm === 'Guaguancó' ||
        this.selectedRhythm === 'Chachachá')
    ) {
      console.log("if exitos de la salsa");
      this.selectedImage = 'assets/imagenes/exitosdelasalsa.jpeg';
    } else if (
      (this.selectedGroup === 'Cortijo y su Combo' ||
        this.selectedGroup === 'La Orquesta de Richie Ray y Bobby Cruz' ||
        this.selectedGroup === 'La Sonora Ponceña' ||
        this.selectedGroup === 'La Orquesta de Tito Puente') &&
      (this.selectedRhythm === 'Son' ||
        this.selectedRhythm === 'Danzón' ||
        this.selectedRhythm === 'Guaracha' ||
        this.selectedRhythm === 'Salsa Brava')
    ) {
      console.log("if lo mejor de la salsa");
      this.selectedImage = 'assets/imagenes/Lomejordelasalsa.jpeg';

    } else if (
      (this.selectedGroup === 'Cortijo y su Combo' ||
        this.selectedGroup === 'La Orquesta de Richie Ray y Bobby Cruz' ||
        this.selectedGroup === 'La Sonora Ponceña' ||
        this.selectedGroup === 'La Orquesta de Tito Puente') &&
      (this.selectedRhythm === 'Salsa Romántica' ||
        this.selectedRhythm === 'Salsa Dura' ||
        this.selectedRhythm === 'Boogaloo' ||
        this.selectedRhythm === 'Bolero')
    ) {
      console.log("if salsa para el alma");
      this.selectedImage = 'assets/imagenes/salsaparaelalma.jpeg';

    } else if (
      (this.selectedGroup === 'Fruko y sus Tesos' ||
        this.selectedGroup === 'Orquesta Zodiac' ||
        this.selectedGroup === 'Hermanos Lebrón' ||
        this.selectedGroup === 'Orquesta Aragón') &&
      (this.selectedRhythm === 'Son montuno' ||
        this.selectedRhythm === 'Mambo' ||
        this.selectedRhythm === 'Guaguancó' ||
        this.selectedRhythm === 'Chachachá')
    ) {
      console.log("if exitos de la salsa");
      this.selectedImage = 'assets/imagenes/exitosdelasalsa.jpeg';

    } else if (
      (this.selectedGroup === 'Fruko y sus Tesos' ||
        this.selectedGroup === 'Orquesta Zodiac' ||
        this.selectedGroup === 'Hermanos Lebrón' ||
        this.selectedGroup === 'Orquesta Aragón') &&
      (this.selectedRhythm === 'Son' ||
        this.selectedRhythm === 'Danzón' ||
        this.selectedRhythm === 'Guaracha' ||
        this.selectedRhythm === 'Salsa Brava')
    ) {
      console.log("if lo mejor de la salsa");
      this.selectedImage = 'assets/imagenes/Lomejordelasalsa.jpeg';

    } else if (
      (this.selectedGroup === 'Fruko y sus Tesos' ||
        this.selectedGroup === 'Orquesta Zodiac' ||
        this.selectedGroup === 'Hermanos Lebrón' ||
        this.selectedGroup === 'Orquesta Aragón') &&
      (this.selectedRhythm === 'Salsa Romántica' ||
        this.selectedRhythm === 'Salsa Dura' ||
        this.selectedRhythm === 'Boogaloo' ||
        this.selectedRhythm === 'Bolero')
    ) {
      console.log("if salsa para el alma");
      this.selectedImage = 'assets/imagenes/salsaparaelalma.jpeg';
    }


    console.log(this.selectedGroup);
    console.log(this.selectedRhythm);
    console.log(this.selectedSalsaIcon);
    console.log(this.edad);
    console.log(this.nombre);
    console.log(this.email);
    const formData = {
      nombre: this.nombre,
      email: this.email,
      edad: this.edad
    };

  
        // Enviar los datos al backend
        this.http.post('https://formulariosalsapower.netlify.app/.netlify/functions/saveData', formData).subscribe({
          next: (response: any) => {
            console.log('Datos guardados correctamente', response);
          },
          error: (error: any) => {
            console.error('Error al guardar los datos', error);
          }
        });
    

  }


}

