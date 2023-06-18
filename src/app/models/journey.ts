// export class Journey{
//     destination = "";
//     origin = ""
// }

export interface Transport {
    flightCarrier: string;
    flightNumber: string;
  }
  
  export interface Flight {
    transport: Transport;
    origin: string;
    destination: string;
    price: number;
  }
  
  export interface Journey {
    origin: string;
    destination: string;
    price: number;
    flights: Flight[];
  }