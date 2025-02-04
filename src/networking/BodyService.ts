import { orderBy } from "@firebase/firestore";

import ModelService from "./ModelService";
import { COLLECTION_NAME } from "./PopulationOptions";

import Body from "../models/Body";
import { FirebaseConfig } from "../app/AppConfigContext";

export default class BodyService extends ModelService {
  constructor(firebaseConfig: FirebaseConfig) {
    super(COLLECTION_NAME.Body, firebaseConfig);
  }

  async getAllBodies(): Promise<Body[]> {
    const networkQueryResponse = this.networkService.getDocuments(COLLECTION_NAME.Body, [
      orderBy("name"),
    ]);
    return this.createModels(networkQueryResponse, Body, `getAllBodies()`);
  }
}
