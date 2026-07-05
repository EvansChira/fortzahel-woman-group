import { Component, Input } from "@angular/core";

@Component({
    selector: "app-service-card",
    standalone: true,
    templateUrl: "./service-card.component.html",
})

export class ServiceCardComponent {
    @Input({ required: true }) service!: {
        title: string;
        description: string;
        image: string;
        slug: string;
    };
}