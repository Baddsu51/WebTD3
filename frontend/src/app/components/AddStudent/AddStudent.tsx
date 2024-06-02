import { Form, Input, Button } from "antd";
import { useState } from "react";

type AddStudentProps = {
  onAdd: (name: string, firstname: string, age: number) => void;
};

export const AddStudent = ({ onAdd }: AddStudentProps) => {
  const [name, setName] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [age, setAge] = useState<number>();
  return (
    <>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={() => onAdd(name, firstname, age!)}
          autoComplete="off"
        >
          <Form.Item
            label="Nom"
            name="name"
            rules={[{ required: true, message: "Le nom est obligatoire !" }]}
          >
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Ajouter
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
