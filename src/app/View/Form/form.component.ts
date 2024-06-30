import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Form } from "../../models/form.model";
import { GetFormService } from "../../service/get-form.service";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { formFields } from "../../models/formFields";
import { SaveButtonComponent } from "../../components/SaveButton/button.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    SaveButtonComponent,
    HeaderComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSnackBarModule,
  ],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;
  form!: Form;

  constructor(
    private formBuilder: FormBuilder,
    private getFormService: GetFormService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fillForm();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group(formFields);
  }

  private fillForm(): void {
    this.getFormService.getForm().subscribe(
      (data) => {
        this.form = data;
        this.formGroup.patchValue({
          cep: this.form.cep,
          logradouro: this.form.logradouro,
          complemento: this.form.complemento,
          unidade: this.form.unidade,
          bairro: this.form.bairro,
          localidade: this.form.localidade,
          uf: this.form.uf,
          ibge: this.form.ibge,
          gia: this.form.gia,
          ddd: this.form.ddd,
          siafi: this.form.siafi,
        });
      },
      (error) => {
        console.error("Erro ao carregar o formulário:", error);
      }
    );
  }

  save(): void {
    if (this.formGroup.valid) {
      localStorage.setItem("formData", JSON.stringify(this.formGroup.value));
      this.snackBar.open("Formulário salvo com sucesso!", "Fechar", {
        duration: 3000,
      });
    } else {
      console.error("Formulário inválido");
    }
  }
}
