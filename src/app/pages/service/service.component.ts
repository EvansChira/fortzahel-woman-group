import { Component } from "@angular/core";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { ServiceCardComponent } from "../../components/service-card/service-card.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-service",
    standalone:true,
    templateUrl:'./service.component.html',
    imports: [CtaSectionComponent, FooterComponent, HeaderComponent, PageHeaderComponent, ServiceCardComponent,CommonModule]
})

export class ServiceComponent{
    services = [
  {
    title: 'Home Deep Cleaning',
    description: 'Revitalize your living space with our thorough deep cleaning service.',
    image: 'https://framerusercontent.com/images/ejsZ1xUeEh5EUMp1CfdqfvmEk8.jpg',
    slug: 'home-deep-cleaning'
  },
  {
    title: 'Office Cleaning',
    description: 'Professional office cleaning for productive workspaces.',
    image: 'https://framerusercontent.com/images/ejsZ1xUeEh5EUMp1CfdqfvmEk8.jpg',
    slug: 'office-cleaning'
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning for fresh and healthy floors.',
    image: 'https://framerusercontent.com/images/ejsZ1xUeEh5EUMp1CfdqfvmEk8.jpg',
    slug: 'carpet-cleaning'
  },
    {
    title: 'Office Cleaning',
    description: 'Professional office cleaning for productive workspaces.',
    image: 'https://framerusercontent.com/images/ejsZ1xUeEh5EUMp1CfdqfvmEk8.jpg',
    slug: 'office-cleaning'
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning for fresh and healthy floors.',
    image: 'https://framerusercontent.com/images/ejsZ1xUeEh5EUMp1CfdqfvmEk8.jpg',
    slug: 'carpet-cleaning'
  }
];
}