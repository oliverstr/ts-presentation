// https://jvilk.com/MakeTypes/

// https://gw.hellofresh.com/vouchers/QWEQWE?country=DE&locale=de-DE

// Response

const response = {
  code: "QWEQWE",
  category: "HelloShare",
  channel: "HelloShare Online",
  channel_split: "",
  partner: "",
  customer_status: "new",
  order_status: "new",
  discount_type: "fixed",
  discount_value: 30,
  shipping_amount: 0,
  voucher_type: "ONE_TIME",
  success_message:
    "20€ Rabatt - Dein Gutschein wird automatisch Deinem Warenkorb hinzugefügt.",
  is_active: true,
  is_gift: false,
  available_products: [
    "DE-CB-2-2-0",
    "DE-CB-2-3-0",
    "..."
  ],
  available_families: [
    "classic-box-thermomix",
    "classic-box-t2",
    "veggie-box-thermomix-t4",
    "family-box-thermomix-t4",
    "classic-box",
    "classic-box-t4",
    "..."
  ],
  limit_per_code: 20,
  limit_per_subscription: 1,
  limit_per_customer: 0,
  repetition_rate: 0,
  repetition_limit: 0,
  repetition_from_first: false,
  repetition_from_redemption: false,
  min_total: 0,
  valid_from: "2017-02-02T14:29:02Z",
  valid_to: "2027-02-01T14:29:02Z",
  discount_settings: {
    customer_type: "new",
    product_type: [
      "DE-CB-2-2-0",
      "DE-CB-2-3-0",
      "..."
    ],
    lifetime: "Static",
    box_count: 1,
    discount_type: "fixed",
    discount_rule: {
      box_rule: {
        "1": {
          applicable_to: "both",
          discount_value: 3000
        }
      },
      customer_unique_usage_limit: 1,
      subscription_unique_usage_limit: 1
    }
  },
  source: "INTFOOD"
};

// TYPES

export type Voucher = {
    code: string;
    /** Category set by AdTech when creating the voucher.
     *  It's only available in DE.
     *  Used to validate the voucher in the backend.
     */
    category: string;
    channel: string;
    channel_split: string;
    partner: string;
    customer_status: string;
    order_status: string;
    discount_type: string;
    discount_value: number;
    shipping_amount: number;
    voucher_type: string;
    success_message: string;
    is_active: boolean;
    is_gift: boolean;
    available_products?: (string)[] | null;
    available_families?: (string)[] | null;
    limit_per_code: number;
    limit_per_subscription: number;
    limit_per_customer: number;
    repetition_rate: number;
    repetition_limit: number;
    repetition_from_first: boolean;
    repetition_from_redemption: boolean;
    min_total: number;
    valid_from: string;
    valid_to: string;
    discount_settings: DiscountSettings;
    source: string;
  }

  export type DiscountSettings = {
    customer_type: string;
    product_type?: (string)[] | null;
    lifetime: string;
    box_count: number;
    discount_type: string;
    discount_rule: DiscountRule;
  }

  export type DiscountRule = {
    box_rule: {
        [k: string]: BoxRule
    },
    customer_unique_usage_limit: number;
    subscription_unique_usage_limit: number;
  }

  export type BoxRule = {
    applicable_to: string;
    discount_value: number;
  }

  // CLIENT

  class HellofreshClient {
      get<T>(path: string): Promise<T> {
        return fetch(path).then(res => res.json())
      }
  }

  // USAGE

  const client = new HellofreshClient();
  client.get<Voucher>('/vouchers/QWEQWE').then(voucher => voucher.order_status);
