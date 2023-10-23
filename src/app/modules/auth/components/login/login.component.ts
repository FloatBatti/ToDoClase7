import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/Models';
import { AuthService } from '@core/services/autServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private email: string = '';

  public user: User | null = null;


  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {


  }

  isValidFiled(field: string): boolean | null {
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if (!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido.";
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return null;
  }


  async onSubmit() {

    if (this.loginForm.valid) {
      // Aquí puedes implementar la lógica para verificar las credenciales de inicio de sesión
      console.log('Formulario válido. Usuario: ', this.loginForm.value.email);
    } else {
      // El formulario no es válido, muestra un mensaje de error si es necesario.
      console.log('Formulario no válido');
    }

    try {

      let isLogin: boolean = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);

      if (isLogin) {
        this.router.navigate(["/main"]);
      }
      else {

        this.email = this.loginForm.value.email;

        this.loginForm.reset({ email: this.email });
      }

    } catch (error) {
      console.log(error);
    }

  }
}
