import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AboutList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const AboutShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const AboutEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="description" multiline fullWidth />
    </SimpleForm>
  </Edit>
);
