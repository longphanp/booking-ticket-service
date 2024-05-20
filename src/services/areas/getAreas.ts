import AreaModel from "models/Area";

export default async function getAreas() {
  const data = await AreaModel.find({});
  return data;
}
