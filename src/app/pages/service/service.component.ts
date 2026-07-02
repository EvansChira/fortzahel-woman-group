import { Component } from "@angular/core";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";

@Component({
    selector: "app-service",
    standalone:true,
    templateUrl:'./service.component.html',
    imports: [CtaSectionComponent, FooterComponent, HeaderComponent, PageHeaderComponent]
})

export class ServiceComponent{}