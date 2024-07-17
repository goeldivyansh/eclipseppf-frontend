export class WarrantyInfo {
    sno: string,
    quantity: string,
    roll_no: string,
    customer: {
      name: string,
      address: string,
      city: string,
      state: string,
      pincode: string,
      mobile_no: string,
      email: string
    },
    car_details: {
      car_no: string,
      mfd_year: string,
      model_name: string,
      photos: {
        link1: string,
        link2: string,
        link3: string,
        link4: string,
        link5: string,
        link6: string
      },
    },
    warranty_card: string
}