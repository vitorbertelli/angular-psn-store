import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss'
})
export class CardPricingComponent {

  @Input() gameTitle!: string;
  @Input() gameType!: string;
  @Input() gamePricing!: string;

}
