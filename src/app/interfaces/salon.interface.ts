export interface SalonDTO {
  salon: Salon;
  services: SalonService[];
}

export interface Salon {
  name: string;
  address: string;
  currency: string;
}

export interface SalonService {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  addons: ServiceAddon[];
}

export interface ServiceAddon {
  id: number;
  name: string;
  duration: number;
  price: number;
  selected?: boolean;
}

export interface NotificationDialogData {
  message: string;
}
