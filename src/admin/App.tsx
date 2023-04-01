import React from "react";
import { Admin, Resource } from "react-admin";
import { AboutShow, AboutEdit, AboutList } from "@/components/About";
import {
  SkillShow,
  SkillEdit,
  SkillList,
  SkillCreate,
} from "@/components/Skill";
import customDataProvider from "@/lib/customDataProvider";
import authProvider from "@/lib/authProvider";
import CustomLoginForm from "@/components/CustomLoginForm";

const App = () => (
  <Admin
    dataProvider={customDataProvider}
    authProvider={authProvider}
    loginPage={CustomLoginForm}
  >
    <Resource
      name="abouts"
      list={AboutList}
      show={AboutShow}
      edit={AboutEdit}
    />
    <Resource
      name="skills"
      list={SkillList}
      show={SkillShow}
      edit={SkillEdit}
      create={SkillCreate}
    />
  </Admin>
);

export default App;
