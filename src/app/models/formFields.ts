import { Validators } from "@angular/forms";

export const formFields = {
  cep: ["", Validators.required],
  logradouro: ["", Validators.required],
  complemento: ["", Validators.required],
  unidade: ["", Validators.required],
  bairro: ["", Validators.required],
  localidade: ["", Validators.required],
  uf: ["", Validators.required],
  ibge: [{ value: "", disabled: true }],
  gia: ["", Validators.required],
  ddd: ["", Validators.required],
  siafi: [{ value: "", disabled: true }],
};