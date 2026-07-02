import { Component } from "@angular/core";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { CountersComponent } from "./counters/counters.component";
import { OurTeamComponent } from "../../shared/our-team/our-team.component";

@Component({
    selector: "app-home",
    standalone: true,
    templateUrl: "./home.component.html",
    imports: [FooterComponent, CtaSectionComponent, HeaderComponent, HeroComponent, CountersComponent, OurTeamComponent],
})

export class HomeComponent { }