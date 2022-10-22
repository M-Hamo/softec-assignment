import { FormControl } from "@angular/forms";

export interface ICreateOrderFormGroup {
  orderDate: FormControl<string | null>;
  paymentType: FormControl<string | null>;
  userId: FormControl<string | null>;
}
