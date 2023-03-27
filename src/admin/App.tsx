import React from "react";
import { Admin, Resource } from "react-admin";
import { AboutShow, AboutEdit, AboutList } from "@/components/About";
import jsonServerProvider from "ra-data-json-server";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1";
console.log(apiUrl);
const dataProvider = jsonServerProvider(apiUrl);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="abouts"
      list={AboutList}
      show={AboutShow}
      edit={AboutEdit}
    />
  </Admin>
);

export default App;
