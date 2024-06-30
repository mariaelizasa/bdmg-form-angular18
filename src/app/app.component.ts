import { Component, Input } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { MatExpansionModule } from "@angular/material/expansion";
import { CommonModule } from "@angular/common";
import { InstructionsComponent } from "./components/Instructions/instructions.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    InstructionsComponent,
    MatExpansionModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "BDMG Teste Frontend";
  panelOpenState: boolean = true;
  @Input() name!: string;
}
