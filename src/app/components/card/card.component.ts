import { Component, Input } from '@angular/core';
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { CardLabelComponent } from "./card-label/card-label.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardPricingComponent, CardLabelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() cover!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() platform!: string;
  @Input() label!: string;


}
