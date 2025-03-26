import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule,              
    ReactiveFormsModule,       
    MatFormFieldModule,        
    MatInputModule,            
    MatButtonModule,           
    MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  formulari: FormGroup;
  carregant = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private router:Router) {
    this.formulari = this.fb.group({
      usuari: ['', Validators.required],
      contra: ['', Validators.required]

    })
  }

  ngOnInit(): void {

  }
  acces() {

    const usuari = this.formulari.value.usuari;
    const contra = this.formulari.value.contra;

    if (usuari == 'iocdawm9' && contra == 'ioc@dmin-123') {
      
      this.acces_tauler();
    }
    else {
      this.missatge_error();
      this.formulari.reset();
    }
  }

acces_tauler(){
  //Accedim a tauler
  this.carregant=true;
  setTimeout(()=>{
    //Carreguem tauler
    this.router.navigate(['tauler']);
    },1000)
}

  missatge_error() {
    //Missatge d'error
    this._snackBar.open('Error en dades d´accés', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}