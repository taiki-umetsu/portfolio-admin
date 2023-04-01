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
  Create,
  DateField,
  SelectInput,
} from "react-admin";

const LEVEL_DESCRIPTION = {
  0: "beginner",
  10: "professional",
};

const levelChoices = Object.entries(LEVEL_DESCRIPTION).map(([key, value]) => ({
  id: key,
  name: value,
}));

export const SkillList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="level_description" sortable={false} />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const SkillShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="level_description" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleShowLayout>
  </Show>
);

export const SkillEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput source="level" choices={levelChoices} />
    </SimpleForm>
  </Edit>
);

export const SkillCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput source="level" choices={levelChoices} />
    </SimpleForm>
  </Create>
);
