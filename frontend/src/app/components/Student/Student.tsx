import { Space } from "antd";
import { Student as StudentType } from "../../types/Student";

type StudentProps = {
  student: StudentType;
};

export const Student = ({ student }: StudentProps) => {
  return (
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
  );
};
