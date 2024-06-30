import { Routes } from "@angular/router";
import { FormComponent } from "./View/Form/form.component";

export const routes: Routes = [
  { path: "", redirectTo: "form", pathMatch: "full" },
  { path: "form", component: FormComponent },
];
