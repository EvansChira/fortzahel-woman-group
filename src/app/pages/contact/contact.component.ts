import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/header/header.component";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";

@Component({
    selector: "app-contact",
    standalone: true,   
    imports: [HeaderComponent, CtaSectionComponent, FooterComponent, PageHeaderComponent],
    templateUrl: "./contact.component.html",
})

export class ContactComponent { }