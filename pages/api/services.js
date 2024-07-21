import { services } from "@/data";

export default function handler(req, res) {
  //by default the method is GET

  // console.log(services);
  res.status(200).json({ services });
}
