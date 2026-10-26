import type { Localized } from './i18n';

const l = (id: string, en: string): Localized => ({ id, en });

export type SellerId = 'ezra';

/**
 * A company that holds the exclusive right to sell some of our robots. Those robots show no price
 * and no cart button here: buyers contact the seller instead. Everything else is sold directly,
 * through the cart.
 */
export interface Seller {
  id: SellerId;
  /** The legal name, for the sentence that says who sells the robot. */
  name: string;
  /** The short name, for buttons. */
  shortName: string;
  role: Localized;
}

export const sellers: Record<SellerId, Seller> = {
  ezra: {
    id: 'ezra',
    name: 'PT Ezra Robotics Teknologi',
    shortName: 'Ezra Robotics',
    role: l('Penjual eksklusif', 'Exclusive seller'),
  },
};
