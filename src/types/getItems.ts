export interface Products {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                  string;
    site_id:             string;
    title:               string;
    seller:              Seller;
    price:               number;
    prices:              Prices;
    sale_price:          null;
    currency_id:         string;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         string;
    listing_type_id:     string;
    stop_time:           Date;
    condition:           string;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    accepts_mercadopago: boolean;
    installments:        Installments;
    address:             Address;
    shipping:            Shipping;
    seller_address:      SellerAddress;
    attributes:          Attribute[];
    original_price:      null;
    category_id:         string;
    official_store_id:   null;
    domain_id:           string;
    catalog_product_id:  string;
    tags:                string[];
    order_backend:       number;
    use_thumbnail_id:    boolean;
    offer_score:         null;
    offer_share:         null;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    string;
    city_name:  string;
}

export interface Attribute {
    value_struct:         null;
    values:               Value[];
    source:               number;
    value_name:           string;
    name:                 string;
    value_id:             null | string;
    attribute_group_id:   string;
    attribute_group_name: string;
    id:                   string;
}

export interface Value {
    id:     null | string;
    name:   string;
    struct: null;
    source: number;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      ReferencePrice[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: string;
}

export interface Price {
    id:                    string;
    type:                  string;
    amount:                number;
    regular_amount:        null;
    currency_id:           string;
    last_updated:          Date;
    conditions:            Conditions;
    exchange_rate_context: string;
    metadata:              Metadata;
}

export interface Conditions {
    context_restrictions: any[];
    start_time:           Date | null;
    end_time:             Date | null;
    eligible:             boolean;
}

export interface Metadata {
}

export interface ReferencePrice {
    id:                    string;
    type:                  string;
    conditions:            Conditions;
    amount:                number;
    currency_id:           string;
    exchange_rate_context: string;
    tags:                  any[];
    last_updated:          Date;
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  Date;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               string[];
    eshop:              Eshop;
    seller_reputation:  SellerReputation;
}

export interface Eshop {
    nick_name:        string;
    eshop_rubro:      null;
    eshop_id:         number;
    eshop_locations:  any[];
    site_id:          string;
    eshop_logo_url:   string;
    eshop_status_id:  number;
    seller:           number;
    eshop_experience: number;
}

export interface SellerReputation {
    transactions:        Transactions;
    power_seller_status: string;
    metrics:             Metrics;
    level_id:            string;
}

export interface Metrics {
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
    cancellations:         Cancellations;
}

export interface Cancellations {
    rate:   number;
    value:  number;
    period: string;
}

export interface Sales {
    period:    string;
    completed: number;
}

export interface Transactions {
    total:     number;
    canceled:  number;
    period:    string;
    ratings:   Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    positive: number;
    neutral:  number;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      City;
    state:        City;
    city:         City;
    latitude:     string;
    longitude:    string;
}

export interface City {
    id:   string;
    name: string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          string;
    tags:          string[];
    logistic_type: string;
    store_pick_up: boolean;
}
