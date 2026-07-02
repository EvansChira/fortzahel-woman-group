import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { OurTeamComponent } from "../../shared/our-team/our-team.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [HeaderComponent, CtaSectionComponent, FooterComponent, PageHeaderComponent, OurTeamComponent],
})
export class AboutComponent {}