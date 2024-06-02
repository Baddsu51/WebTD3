import { Space, Button, Input } from "antd";
import { Student as StudentType } from "../../types/Student";
import { useState } from "react";
import {
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./Student.css";

type StudentProps = {
  student: StudentType;
  onEdit: (data: Partial<StudentType>) => void;
  onDelete: (id: string) => void;
};

export const Student = ({ student, onEdit, onDelete }: StudentProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(student.name);
  const [firstname, setFirstname] = useState<string>(student.firstname);
  const [age, setAge] = useState<number>(student.age);

  const edit = (_id: string) => {
    onEdit({ _id, name, firstname, age });
    setEditing(false);
  };

  return (
    <>
      <div>
        {editing ? (
          <div className="student">
            <Space>
              <label>
                <b>Nom :</b>
              </label>
              <Input
                defaultValue={student.name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>
                <b>Prénom :</b>
              </label>
              <Input
                defaultValue={student.firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label>
                <b>Age :</b>
              </label>
              <Input
                defaultValue={student.age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
              <div className="button">
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  onClick={() => edit(student._id)}
                />
                <Button
                  type="primary"
                  danger={true}
                  icon={<CloseOutlined />}
                  onClick={() => setEditing(false)}
                />
              </div>
            </Space>
          </div>
        ) : (
          <div className="student">
            <div key={student._id}>
              <Space>
                <label>
                  <b>Nom :</b>
                </label>
                {student.name}
                <label>
                  <b>Prénom :</b>
                </label>
                {student.firstname}
                <label>
                  <b>Age :</b>
                </label>
                {student.age}
              </Space>
            </div>
            <div className="button">
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => setEditing(true)}
              />
              <Button
                type="primary"
                danger={true}
                icon={<DeleteOutlined />}
                onClick={() => onDelete(student._id)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
